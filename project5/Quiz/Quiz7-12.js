// Quiz 7
const add = (a,b) => a + b;
console.log("Quiz 7 : " + add(5,6));

// Quiz 8
const greet = () => "Hello, World!";
console.log("Quiz 8 : " + greet());

// Quiz 9
const logSum = (a, b) => console.log();
console.log("Quiz 9 : ");
logSum(5,6);

// Quiz 10
const multiplyAndAdd = (a,b,c) =>{
  const temp = a * b;
  const result = temp + c;
  return result;
};

console.log("Quiz 10 : " + multiplyAndAdd(2,3,4)); 

// Quiz 11
const numbers = [1,2,3,4,5];
const doubled = numbers.map(number => number * 2);

console.log(`Quiz 11 : ${doubled}`);

// Quiz 12
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = arr.filter(number => number % 2 == 0);

console.log(`Quiz 12 : ${evenNumber}`);


