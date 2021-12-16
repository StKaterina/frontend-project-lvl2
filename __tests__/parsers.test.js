import { describe, test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import genDiff from '../src/parsers.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

const readFile = (filePath) => fs.readFileSync(getFixturePath(filePath), 'utf-8');

describe('genDiff json', () => {
  const jsonFile1 = JSON.parse(readFile('file1.json'));
  const jsonFile2 = JSON.parse(readFile('file2.json'));
  const jsonExpectedFile = readFile('jsonExpectedFile.txt');
  test('comparison json files', () => {
    expect(genDiff(jsonFile1, jsonFile2)).toEqual(jsonExpectedFile);
  });
});

describe('genDiff yml', () => {
  const ymlFile1 = yaml.load(readFile('file1.yml'));
  const ymlFile2 = yaml.load(readFile('file2.yml'));
  const ymlExpectedFile = readFile('ymlExpectedFile.txt');
  test('comparison yml files', () => {
    expect(genDiff(ymlFile1, ymlFile2)).toBe(ymlExpectedFile);
  });
});
