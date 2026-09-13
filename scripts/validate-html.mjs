import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const roots = [join(root, 'index.html'), join(root, 'src', 'components'), join(root, 'src', 'layouts'), join(root, 'src', 'demo')];
const failures = [];
let filesChecked = 0;

function collect(path) {
  if (extname(path) === '.html') return [path];
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const child = join(path, entry.name);
    return entry.isDirectory() ? collect(child) : extname(entry.name) === '.html' ? [child] : [];
  });
}

function fail(file, message) {
  failures.push(`${relative(root, file)}: ${message}`);
}

for (const file of roots.flatMap(collect)) {
  const html = readFileSync(file, 'utf8');
  const isDocument = /<!doctype html>/i.test(html);
  filesChecked += 1;

  if (isDocument && !/<html\b[^>]*\blang=(['"])[^'"]+\1/i.test(html)) {
    fail(file, 'full document is missing a non-empty html[lang]');
  }

  const ids = new Set([...html.matchAll(/\bid=(['"])([^'"]+)\1/gi)].map((match) => match[2]));
  for (const match of html.matchAll(/\b(?:href|src)=(['"])([^'"]*)\1/gi)) {
    const value = match[2].trim();
    if (!value) {
      fail(file, `${match[0].split('=')[0]} is empty`);
      continue;
    }
    if (value === '#') {
      fail(file, 'href="#" is not an actionable destination');
      continue;
    }
    if (value.startsWith('#') && isDocument) {
      if (!ids.has(decodeURIComponent(value.slice(1)))) fail(file, `fragment target does not exist: ${value}`);
      continue;
    }
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/|\/)/i.test(value)) continue;
    const pathname = decodeURIComponent(value.split(/[?#]/, 1)[0]);
    if (pathname && !existsSync(resolve(dirname(file), pathname))) fail(file, `local target does not exist: ${value}`);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    if (!/\balt=(['"])[^'"]*\1/i.test(match[0])) fail(file, `image is missing alt: ${match[0].replace(/\s+/g, ' ')}`);
  }

  for (const match of html.matchAll(/<button\b[^>]*>/gi)) {
    if (!/\btype=(['"])(?:button|submit|reset)\1/i.test(match[0])) fail(file, `button is missing an explicit type: ${match[0].replace(/\s+/g, ' ')}`);
  }

  const labels = new Set([...html.matchAll(/<label\b[^>]*\bfor=(['"])([^'"]+)\1/gi)].map((match) => match[2]));
  for (const match of html.matchAll(/<(?:input|textarea|select)\b[^>]*>/gi)) {
    const control = match[0];
    if (/\btype=(['"])(?:hidden|submit|button|reset)\1/i.test(control)) continue;
    const id = control.match(/\bid=(['"])([^'"]+)\1/i)?.[2];
    const named = /\baria-label=(['"])[^'"]+\1/i.test(control) || /\baria-labelledby=(['"])[^'"]+\1/i.test(control);
    if (!named && (!id || !labels.has(id))) fail(file, `form control has no accessible name: ${control.replace(/\s+/g, ' ')}`);
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  console.error(`HTML validation failed with ${failures.length} issue(s) in ${filesChecked} file(s).`);
  process.exit(1);
}

console.log(`HTML and static accessibility validation passed for ${filesChecked} file(s).`);
