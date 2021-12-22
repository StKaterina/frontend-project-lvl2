import _ from 'lodash';

export default (obj1, obj2) => {
  const iter = (node1, node2) => {
    const joinKeys = _.sortBy(_.union(_.keys(node1), _.keys(node2)));
    const diffTree = joinKeys.map((key) => {
      if (_.isObject(node1[key]) && _.isObject(node2[key])) {
        const children = iter(node1[key], node2[key]);
        return {
          status: 'hasChildren',
          name: key,
          children,
        };
      }
      if (!_.has(node1, key)) {
        return { status: 'added', name: key, value: node2[key] };
      }
      if (!_.has(node2, key)) {
        return { status: 'removed', name: key, value: node1[key] };
      }
      if (node1[key] !== node2[key]) {
        return {
          status: 'updated', name: key, valueDel: node1[key], valueAdd: node2[key],
        };
      }
      return { status: 'notUpdated', name: key, value: node1[key] };
    });
    return diffTree;
  };
  return iter(obj1, obj2);
};
