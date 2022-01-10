import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  return typeof value === 'string' ? `'${value}'` : value;
};

export default (diffTree) => {
  const iter = (tree, path) => {
    const resultLines = tree
      .filter(({ type }) => type !== 'notUpdated')
      .map((node) => {
        const { type } = node;
        const pathProperty = [...path, node.name];
        const correctPath = pathProperty.join('.');
        switch (type) {
          case 'hasChildren':
            return `${iter(node.children, pathProperty)}`;
          case 'added':
            return `Property '${correctPath}' was ${type} with value: ${stringify(node.value)}`;
          case 'removed':
            return `Property '${correctPath}' was ${type}`;
          case 'updated':
            return `Property '${correctPath}' was ${type}. From ${stringify(node.valueDel)} to ${stringify(node.valueAdd)}`;
          default:
            throw new Error('Type not found');
        }
      });
    return resultLines.join('\n');
  };
  return iter(diffTree.children, []);
};
