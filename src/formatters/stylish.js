import _ from 'lodash';

const replacer = '  ';
const identSize = (depth) => depth;
const currentIdent = (depth) => replacer.repeat(depth);
const bracketIdent = (depth) => replacer.repeat(identSize(depth) - 1);

const parseStatus = {
  hasChildren: '  ',
  added: '+ ',
  removed: '- ',
  notUpdated: '  ',
};

const stringify = (depth, status, name, value) => {
  const iter = (node, d) => {
    if (!_.isPlainObject(node)) return node;
    const lineRes = Object
      .entries(node)
      .map(([key, val]) => `${currentIdent(d)}${parseStatus.notUpdated}${key}: ${iter(val, d + 2)}`);
    return [
      '{',
      ...lineRes,
      `${bracketIdent(d)}}`,
    ].join('\n');
  };
  return `${currentIdent(depth)}${parseStatus[status]}${name}: ${iter(value, depth + 2)}`;
};

export default (diffTree) => {
  const iter = (tree, depth) => {
    // eslint-disable-next-line object-curly-newline
    const resultLines = tree.map(({ status, value, name, children, valueDel, valueAdd }) => {
      switch (status) {
        case 'hasChildren':
          return stringify(depth, status, name, iter(children, depth + 2));
        case 'updated':
          return `${stringify(depth, 'removed', name, valueDel)}\n${stringify(depth, 'added', name, valueAdd)}`;
        case 'added':
        case 'removed':
        case 'notUpdated':
          return stringify(depth, status, name, value);
        default:
          throw new Error('Status not found');
      }
    });
    return [
      '{',
      ...resultLines,
      `${bracketIdent(depth)}}`,
    ].join('\n');
  };
  return iter(diffTree, 1);
};
