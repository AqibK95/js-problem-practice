let first = 5;
let second = 7;
console.log(first, second);


// approach 1
const tempo = first;
first = second;
second = tempo;
console.log(first, second);

// approach 2
let first1 = 8;
let second2 = 9;
[first1, second2] = [second2, first1];
console.log(first1, second2);
