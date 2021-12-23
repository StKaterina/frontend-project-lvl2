import stylish from './stylish.js';
import plain from './plain.js';

const parsFormatter = {
  stylish,
  plain,
};

export default (diffTree, formatter) => {
  const funcFormatter = parsFormatter[formatter];
  return funcFormatter(diffTree);
};
