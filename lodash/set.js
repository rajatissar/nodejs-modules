const { get, set } = require('lodash');

let obj1 = {
  key11: 'value11',
  key12: undefined
};
let obj2 = {
  key21: 'value21',
  key22: undefined
};

set(obj2, 'key23', get(obj1, 'key11'));
set(obj2, 'key24', get(obj1, 'key21'));

console.log('obj1', obj1);
console.log('obj2', obj2);
