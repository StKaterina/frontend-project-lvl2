import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const parsFormatter = {
  stylish,
  plain,
  json,
};

export default (diffTree, formatter) => {
  const funcFormatter = parsFormatter[formatter];
  return funcFormatter(diffTree);
};
