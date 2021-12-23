import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

export default (diffTree) => {
  const iter = (tree, path) => {
    // eslint-disable-next-line object-curly-newline
    const resultLines = tree
      .filter(({ status }) => status !== 'notUpdated')
      // eslint-disable-next-line object-curly-newline
      .map(({ status, name, value, children, valueDel, valueAdd }) => {
        const pathProperty = [...path, name];
        const correctPath = pathProperty.join('.');
        switch (status) {
          case 'hasChildren':
            return `${iter(children, pathProperty)}`;
          case 'added':
            return `Property '${correctPath}' was ${status} with value: ${stringify(value)}`;
          case 'removed':
            return `Property '${correctPath}' was ${status}`;
          case 'updated':
            return `Property '${correctPath}' was ${status}. From ${stringify(valueDel)} to ${stringify(valueAdd)}`;
          default:
            throw new Error('Status not found');
        }
      });
    return resultLines.join('\n');
  };
  return iter(diffTree, []);
};
