import _ from 'lodash';

export default (obj1, obj2) => {
  console.log(obj1);
  console.log(obj2);
  const joinKeys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
  const diff = joinKeys.reduce((acc, key) => {
    if (!_.has(obj1, key)) {
      acc[`+ ${key}`] = obj2[key];
    } else if (!_.has(obj2, key)) {
      acc[`- ${key}`] = obj1[key];
    } else if (obj1[key] !== obj2[key]) {
      acc[`- ${key}`] = obj1[key];
      acc[`+ ${key}`] = obj2[key];
    } else {
      acc[`  ${key}`] = obj1[key];
    }
    return acc;
  }, []);

  const formattDiff = Object
    .entries(diff)
    .map(([key, value]) => `  ${key}: ${value}`);

  return [
    '{',
    ...formattDiff,
    '}',
  ].join('\n');
};
