/* eslint-disable object-curly-newline */
import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);
const readFile = (filePath) => fs.readFileSync(getFixturePath(filePath), 'utf-8');

const valuesForTests = [
  { path1: 'file1.json', path2: 'file2.json', format: 'stylish', expected: 'nestedExpected.txt' },
  { path1: 'file1.yml', path2: 'file2.yml', format: 'stylish', expected: 'nestedExpected.txt' },
  { path1: 'file1.json', path2: 'file2.json', format: 'plain', expected: 'plainExpected.txt' },
  { path1: 'file1.yml', path2: 'file2.yml', format: 'plain', expected: 'plainExpected.txt' },
  { path1: 'file1.json', path2: 'file2.json', format: 'json', expected: 'jsonExpected.txt' },
  { path1: 'file1.yml', path2: 'file2.yml', format: 'json', expected: 'jsonExpected.txt' },
];

test.each(valuesForTests)(
  'Comparing $a and $b --format $format',
  ({ path1, path2, format = 'stylish', expected }) => {
    const file1 = getFixturePath(path1);
    const file2 = getFixturePath(path2);
    const fileExpected = readFile(expected);
    expect(genDiff(file1, file2, format)).toEqual(fileExpected);
  },
);
