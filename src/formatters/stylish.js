import _ from 'lodash';

const replacer = '  ';
const nextLevelIndent = (depth) => depth + 1;
const currentIndent = (depth) => replacer.repeat(2 * depth - 1);
const bracketIndent = (depth) => replacer.repeat(2 * depth);

const stringify = (data, depth, formatterStylish) => {
  if (!_.isPlainObject(data)) return String(data);

  const linesOfObject = Object
    .entries(data)
    .map(([name, value]) => formatterStylish({ type: 'notUpdated', name, value }, nextLevelIndent(depth)));

  return [
    '{',
    ...linesOfObject,
    `${bracketIndent(depth)}}`,
  ].join('\n');
};

const formatterStylish = (diffTree, depth = 0) => {
  const { type, name, children } = diffTree;
  switch (type) {
    case 'root': {
      const lineChildren = children.map((node) => formatterStylish(node, nextLevelIndent(depth)));
      return `{\n${lineChildren.join('\n')}\n}`;
    }
    case 'hasChildren': {
      const lineChildren = children.map((node) => formatterStylish(node, nextLevelIndent(depth)));
      return `${currentIndent(depth)}  ${name}: {\n${lineChildren.join('\n')}\n${bracketIndent(depth)}}`;
    }
    case 'added':
      return `${currentIndent(depth)}+ ${name}: ${stringify(diffTree.value, depth, formatterStylish)}`;
    case 'removed':
      return `${currentIndent(depth)}- ${name}: ${stringify(diffTree.value, depth, formatterStylish)}`;
    case 'updated': {
      const value1 = `${currentIndent(depth)}- ${name}: ${stringify(diffTree.valueDel, depth, formatterStylish)}`;
      const value2 = `${currentIndent(depth)}+ ${name}: ${stringify(diffTree.valueAdd, depth, formatterStylish)}`;
      return `${value1}\n${value2}`;
    }
    case 'notUpdated':
      return `${currentIndent(depth)}  ${name}: ${stringify(diffTree.value, depth, formatterStylish)}`;
    default:
      return '';
  }
};

export default formatterStylish;
