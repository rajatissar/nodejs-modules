const { get } = require('lodash');

let obj = {
    name: 'Rajat'
};

const name = get(obj, 'name');
const phone1 = get(obj, 'phone');
const phone2 = get(obj, 'phone', null);

console.log({ name, phone1, phone2 });
