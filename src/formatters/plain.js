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
      .map(({ status, name, ...node }) => {
        const pathProperty = [...path, name];
        const correctPath = pathProperty.join('.');
        switch (status) {
          case 'hasChildren':
            return `${iter(node.children, pathProperty)}`;
          case 'added':
            return `Property '${correctPath}' was ${status} with value: ${stringify(node.value)}`;
          case 'removed':
            return `Property '${correctPath}' was ${status}`;
          case 'updated':
            return `Property '${correctPath}' was ${status}. From ${stringify(node.valueDel)} to ${stringify(node.valueAdd)}`;
          default:
            throw new Error('Status not found');
        }
      });
    return resultLines.join('\n');
  };
  return iter(diffTree, []);
};
