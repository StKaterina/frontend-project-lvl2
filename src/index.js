import fs from 'fs';
import path from 'path';
import { cwd } from 'process';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import parsers from './parsers.js';

const parserPathExt = (extPath, fileRead) => {
  switch (extPath) {
    case '.json':
      return JSON.parse(fileRead);
    case '.yml':
    case '.yaml':
      return yaml.load(fileRead);
    default:
      throw new TypeError('Error: Invalid file type. Please use the type: .json, .uml or .yaml');
  }
};

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const readFile = (filePath) => {
  const elementsPath = path.parse(filePath);
  let realPath = path.resolve(cwd(), filePath);
  if (!fs.existsSync(realPath)) {
    realPath = path.join(__dirname, '..', '__fixtures__', elementsPath.base);
  }
  return parserPathExt(elementsPath.ext, fs.readFileSync(realPath, 'utf-8'));
};

export default (file1, file2) => {
  const objFile1 = readFile(file1);
  const objFile2 = readFile(file2);
  if (!objFile1 || !objFile2) return 'Error: File does not exist';
  return parsers(objFile1, objFile2);
};
