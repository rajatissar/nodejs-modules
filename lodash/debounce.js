// debounce will call the internalFunction (getSuggestion) only one time at ending (e.g. getSuggestion(4))
// if we called the debouncedFunction (debounceFunction) multiple times in said interval (say 10000ms)

const { debounce } = require('lodash');

const getSuggestion = (value) => {
    console.time(value);
    console.log('List of suggestions', value);
    console.timeEnd(value);
};

const debounceFunction = debounce(getSuggestion, 10000);

// without debounced
console.log('-------------------- WITHOUT DEBOUNCE ------------------------------');
console.time('without debounced');
getSuggestion(1); // List of suggestions
getSuggestion(2); // List of suggestions
getSuggestion(3); // List of suggestions
getSuggestion(4); // List of suggestions
console.timeEnd('without debounced');

// with debounced
console.log('--------------------- WITH DEBOUNCE -------------------------------');
console.time('with debounced');
debounceFunction(1); // does not get called
debounceFunction(2); // does not get called
debounceFunction(3); // does not get called
debounceFunction(4); // List of suggestions
console.timeEnd('with debounced');
