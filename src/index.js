import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import formatter from './formatters/index.js';
import buildDiffTree from './buildDiffTree.js';

const getParserTypeFile = (filePath) => path.extname(filePath).substring(1);

const readFile = (filePath) => {
  const absolutePath = path.resolve(filePath);
  if (!fs.existsSync(absolutePath)) {
    throw new Error('File does not exist');
  }
  return parser(fs.readFileSync(absolutePath, 'utf-8'), getParserTypeFile(filePath));
};

export default (file1, file2, format = 'stylish') => {
  const objFile1 = readFile(file1);
  const objFile2 = readFile(file2);
  const diffTree = buildDiffTree(objFile1, objFile2);
  return formatter(diffTree, format);
};
