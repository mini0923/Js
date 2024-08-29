// Quiz 29
let str = "I have 2 apples and 3 oranges";

let patt = /[0-9]/g;

console.log(str.match(patt));

// Quiz 30
str = "Hello, JavaScript is fun!";

patt = /[aeiou]/g;

console.log(str.match(patt));

// Quiz 31
str = "Welcome to the world of coding";

patt = /coding/g;

console.log( patt.test(str));

// Quiz 32
str = "JavaScript is powerful";

patt = /is/g;

console.log(str.search(patt));

// Quiz 33 
str = "banana";

patt = /a+/g;

console.log(str.match(patt));

// Quiz 34
str = "abc123ABC";

patt = /abc/gi;

console.log(str.match(patt));

// Quiz 35
str = "Hello, World! How are you today";

patt = /[A-Z]/g;

console.log(str.match(patt));

// Quiz 36
str = "2024-08-27";

patt = str.split(",");

let patt2 = str.match(/(\d{4})-(\d{2})-(\d{2})/);

console.log( `[${str}, "${patt}"]`);
console.log(patt2);

// 일만 꺼내세요
console.log(patt2[3]);
