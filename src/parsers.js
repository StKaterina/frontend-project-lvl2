import yaml from 'js-yaml';
import stylish from './formatters/stylish.js';

const parsFunction = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export const parserTypeFile = (dataFile, typeFile) => {
  const funcParsers = parsFunction[typeFile];
  return funcParsers(dataFile);
};

const parsFormatter = {
  stylish,
};

export const parserStylish = (diffTree, formatter) => {
  const funcFormatter = parsFormatter[formatter];
  return funcFormatter(diffTree);
};
