// throttle will call the internalFunction (getSuggestion) only one time at starting (e.g. getSuggestion(1))
// if we called the throttleFunction (throttleFunction) multiple times in said interval (say 10000ms)

const { throttle } = require('lodash');

const getSuggestion = (value) => {
    console.time(value);
    console.log('List of suggestions', value);
    console.timeEnd(value);
};

const throttleFunction = throttle(getSuggestion, 2000);

// without throttle
console.log('------------------------------- WITHOUT THROTTLE -------------------------------');
console.time('without throttle');
getSuggestion(1); // List of suggestions
getSuggestion(2); // List of suggestions
getSuggestion(3); // List of suggestions
getSuggestion(4); // List of suggestions
console.timeEnd('without throttle');

// with throttle
console.log('------------------------------- WITH THROTTLE -------------------------------');
console.time('with throttle');
throttleFunction(1); // List of suggestions
throttleFunction(2); // does not get called
throttleFunction(3); // does not get called
throttleFunction(4); // does not get called
setTimeout(() => {
    throttleFunction(5); // List of suggestions
}, 100);
setTimeout(() => {
    throttleFunction(6); // List of suggestions
}, 4000);
console.timeEnd('with throttle');
