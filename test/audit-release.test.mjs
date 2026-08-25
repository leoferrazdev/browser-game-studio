import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import test from 'node:test';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const tool = join(root, 'tools', 'audit-release.mjs');
const fixture = (name) => join(root, 'examples', name);

test('accepts a valid build with index at root', () => {
  const output = execFileSync(process.execPath, [tool, '--build', fixture('minimal-build')], { encoding: 'utf8' });
  assert.match(output, /^PASS:/m);
});

test('rejects a build without index at root', () => {
  const result = spawnSync(process.execPath, [tool, '--build', fixture('invalid-build')], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stdout, /index\.html must be at the build root/);
});

test('rejects a cross-platform SDK marker', () => {
  const result = spawnSync(process.execPath, [tool, '--build', fixture('cross-platform-build'), '--platform', 'crazygames'], { encoding: 'utf8' });
  assert.equal(result.status, 1);
  assert.match(result.stdout, /forbidden marker for crazygames: GD_OPTIONS/);
});
