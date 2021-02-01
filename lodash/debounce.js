// debounce will call the user defined function (getSuggestion)
// only one time which (e.g. getSuggestion(4)) will be called after specific delay (2000 ms)
// not all times in the specific time range (2000 ms)
// if we called the debounceFunction (debounceFunction) multiple times in said interval (2000 ms)

const { debounce } = require('lodash');

const getSuggestion = (value, type) => {
    console.time(value);
    type && console.time(type);
    console.log('List of suggestions', value);
    console.timeEnd(value);
    type && console.timeEnd(type);
};

const debounceFunction = debounce(getSuggestion, 2000);

// without debounce
console.log('------------------------------- WITHOUT DEBOUNCE -------------------------------');
console.time('without debounce');
getSuggestion(1); // List of suggestions
getSuggestion(2); // List of suggestions
getSuggestion(3); // List of suggestions
getSuggestion(4); // List of suggestions
console.timeEnd('without debounce');

// with debounce
console.log('------------------------------- WITH DEBOUNCE -------------------------------');
console.time('with debounce');
debounceFunction(1, 'debounce'); // does not get called
debounceFunction(2, 'debounce'); // does not get called
debounceFunction(3, 'debounce'); // does not get called
debounceFunction(4, 'debounce'); // List of suggestions
setTimeout(() => {
    debounceFunction(5, 'debounce');
}, 100);
setTimeout(() => {
    debounceFunction(6, 'debounce');
}, 2000);
setTimeout(() => {
    debounceFunction(7, 'debounce');
}, 3000);
setTimeout(() => {
    debounceFunction(8, 'debounce');
}, 4000);
setTimeout(() => {
    debounceFunction(9, 'debounce');
}, 5000);
console.timeEnd('with debounce');
