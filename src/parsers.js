import yaml from 'js-yaml';

const parsFunction = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (dataFile, typeFile) => {
  const funcParsers = parsFunction[typeFile];
  return funcParsers(dataFile);
};
