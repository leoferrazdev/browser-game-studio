import { existsSync, lstatSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const args = process.argv.slice(2);
const valueFor = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
};

if (args.includes('--help')) {
  console.log('Usage: node tools/audit-release.mjs --build <directory> [--platform <name>] [--max-bytes <number>]');
  process.exit(0);
}

const buildArg = valueFor('--build');
const platform = valueFor('--platform');
const maxBytesArg = valueFor('--max-bytes');
const maxBytes = maxBytesArg === undefined ? 50 * 1024 * 1024 : Number(maxBytesArg);
const allowedPlatforms = new Set(['crazygames', 'gamepix', 'gamedistribution', 'poki']);
const forbiddenMarkers = {
  crazygames: ['GD_OPTIONS', 'gamedistribution', 'main-gamedistribution.js'],
  gamepix: ['GD_OPTIONS', 'gamedistribution', 'CrazyGames'],
  gamedistribution: ['CrazyGames', 'GamePix', 'gamepix'],
  poki: ['GD_OPTIONS', 'gamedistribution', 'CrazyGames', 'GamePix']
};

if (!buildArg) {
  console.error('FAIL: --build <directory> is required');
  process.exit(2);
}
if (platform && !allowedPlatforms.has(platform)) {
  console.error(`FAIL: unsupported platform: ${platform}`);
  process.exit(2);
}
if (!Number.isSafeInteger(maxBytes) || maxBytes <= 0) {
  console.error('FAIL: --max-bytes must be a positive integer');
  process.exit(2);
}

const buildDir = resolve(buildArg);
if (!existsSync(buildDir) || !lstatSync(buildDir).isDirectory()) {
  console.error(`FAIL: build directory does not exist: ${buildDir}`);
  process.exit(2);
}

const files = [];
const collect = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collect(path);
    else if (entry.isFile()) files.push(path);
  }
};
collect(buildDir);

const failures = [];
const indexPath = join(buildDir, 'index.html');
if (!existsSync(indexPath) || !lstatSync(indexPath).isFile()) {
  failures.push('index.html must be at the build root');
}

let totalBytes = 0;
let text = '';
for (const file of files) {
  const bytes = lstatSync(file).size;
  totalBytes += bytes;
  if (bytes < 2 * 1024 * 1024) {
    try {
      text += `\n${readFileSync(file, 'utf8')}`;
    } catch {
      // Binary assets are counted but not scanned as text.
    }
  }
}
if (totalBytes > maxBytes) {
  failures.push(`build exceeds ${maxBytes} bytes`);
}
if (platform) {
  for (const marker of forbiddenMarkers[platform]) {
    if (text.includes(marker)) failures.push(`forbidden marker for ${platform}: ${marker}`);
  }
}

const status = failures.length ? 'FAIL' : 'PASS';
console.log(`${status}: ${files.length} files, ${totalBytes} bytes`);
console.log(`Build: ${relative(process.cwd(), buildDir) || '.'}`);
if (platform) console.log(`Platform: ${platform}`);
for (const failure of failures) console.log(`- ${failure}`);
process.exitCode = failures.length ? 1 : 0;
