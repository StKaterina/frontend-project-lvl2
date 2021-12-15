import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/comparisonJSON.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const jsonFile1 = JSON.parse(fs.readFileSync(getFixturePath('file1.json'), 'utf-8'));
const jsonFile2 = JSON.parse(fs.readFileSync(getFixturePath('file2.json'), 'utf-8'));
const jsonExpectedFile = fs.readFileSync(getFixturePath('jsonExpectedFile.txt'), 'utf-8');

describe('genDiff', () => {
  test('comparison json fles', () => {
    expect(genDiff(jsonFile1, jsonFile2)).toEqual(jsonExpectedFile);
  });
});
