import _ from 'lodash';

const replacer = '  ';
const nextLevelIndent = (depth) => depth + 1;
const currentIndent = (depth) => replacer.repeat(2 * depth - 1);
const bracketIndent = (depth) => replacer.repeat(2 * depth);

const parseType = {
  hasChildren: '  ',
  added: '+ ',
  removed: '- ',
  notUpdated: '  ',
};

const stringify = (data, depth, parserStylish) => {
  if (!_.isPlainObject(data)) return String(data);

  const linesOfObject = Object
    .entries(data)
    .map(([name, value]) => parserStylish({ type: 'notUpdated', name, value }, nextLevelIndent(depth)));

  return [
    '{',
    ...linesOfObject,
    `${bracketIndent(depth)}}`,
  ].join('\n');
};

const parserStylish = (diffTree, depth = 0) => {
  const formattLine = (type, name, value) => `${currentIndent(depth)}${parseType[type]}${name}: ${stringify(value, depth, parserStylish)}`;

  const { type, name, children } = diffTree;
  if (children) {
    const lineChildren = children.map((node) => parserStylish(node, nextLevelIndent(depth)));
    if (type === 'hasChildren') {
      return `${currentIndent(depth)}${parseType[type]}${name}: {\n${lineChildren.join('\n')}\n${bracketIndent(depth)}}`;
    }
    return `{\n${lineChildren.join('\n')}\n}`;
  }

  if (type === 'updated') {
    const value1 = `${formattLine('removed', name, diffTree.valueDel)}`;
    const value2 = `${formattLine('added', name, diffTree.valueAdd)}`;
    return `${value1}\n${value2}`;
  }
  return formattLine(type, name, diffTree.value);
};

export default parserStylish;
