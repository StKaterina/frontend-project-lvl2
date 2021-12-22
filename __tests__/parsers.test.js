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
  { a: 'file1.json', b: 'file2.json', expected: 'plainJsonExpected.txt' },
  { a: 'file1.yml', b: 'file2.yml', expected: 'plainYmlExpected.txt' },
  { a: 'file3.json', b: 'file4.json', expected: 'nestedExpected.txt' },
  { a: 'file3.yml', b: 'file4.yml', expected: 'nestedExpected.txt' },
];

test.each(valuesForTests)(
  'Comparing $a and $b',
  ({ a, b, expected }) => {
    const fileExpected = readFile(expected);
    expect(genDiff(a, b)).toEqual(fileExpected);
  },
);
