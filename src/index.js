import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import fileComparisonJSON from './fileComparisonJSON.js';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (fileName) => path.join(__dirname, '..', '__fixtures__', fileName);

export default (file1, file2) => {
  const objFile1 = JSON.parse(fs.readFileSync(getFixturePath(file1), 'utf-8'));
  const objFile2 = JSON.parse(fs.readFileSync(getFixturePath(file2), 'utf-8'));
  const diff = fileComparisonJSON(objFile1, objFile2);
  return diff;
};
