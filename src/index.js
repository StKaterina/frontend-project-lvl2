import fs from 'fs';
import path from 'path';
import parserTypeFile from './parsers.js';
import parserStylish from './formatters/index.js';
import buildDiffTree from './buildDiffTree.js';

const getParserNameFile = (filePath) => path.parse(filePath).base;
const getParserTypeFile = (filePath) => path.extname(filePath).substring(1);
const getREalPathFile = (filePath) => path.resolve('__fixtures__', getParserNameFile(filePath));

const readFile = (filePath) => {
  const realPath = getREalPathFile(filePath);
  if (!fs.existsSync(realPath)) {
    throw new Error('File does not exist');
  }
  return parserTypeFile(fs.readFileSync(realPath, 'utf-8'), getParserTypeFile(filePath));
};

export default (file1, file2, format = 'stylish') => {
  const objFile1 = readFile(file1);
  const objFile2 = readFile(file2);
  const diffTree = buildDiffTree(objFile1, objFile2);
  return parserStylish(diffTree, format);
};
