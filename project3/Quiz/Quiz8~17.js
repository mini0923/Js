// Quiz 8

function Q8(x , y) {
  return x - y;
}

const result = Q8(5, 3);
console.log("Quiz8의 답은 : " + result);

// Quiz 9
let sum = 0;

function Q9(x,y){
  for(let i = x; i <= y; i++){
    sum = sum + i;
  }
  return sum;
}

const result2 = Q9(3,5);
console.log("Quiz9의 답은 : "+result2);

// Quiz 10
const intArr = [-1, 5, 10, -3];

function Q10(x){
  let max = x[0];

  for (let i = 0; i < x.length; i++){
    if(x[i] > max){
      max = x[i];
    }
  }
  return max;

}
console.log("Quiz10의 답은 : " + Q10(intArr));

// Quiz 11
const arr = ["a", "b", "c"];

function Q11(x) {
  for (let i = 0; i < x.length; i++){
    if (typeof x[i] === 'string'){
      continue;
    } else {
      return false;
    }
  } return true;
}
const result4 = Q11(arr);
console.log("Quiz11의 답은 : " + result4);

// Quiz 12
const arr2 = ["apple", "banana","cherry"];
const test = "banana";

function Q12(arr, y) {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === y){
      return true;
    }
  }
  return false;
}

const result5 = Q12(["apple", "banana", "cherry"], "banana");
console.log("Quiz12의 답은 : " + result5);

// function func(arr, value){
//   return arr.includes(value);
// }
// console.log(func(["apple", "banana", "cherry"], "banana"));
// console.log(func(["apple", "banana", "cherry"], "melon"));




// Quiz 13
let sum2 = 0;
console.log("Quiz13의 답은 : ");

function Q13(x){
  for(let i = 1; i <= 9; i++){
    sum2 = x * i;
    console.log(x + " * " + i + " = "+ sum2);
  }
}
Q13(2);


// Quiz 14
const arr3 = [1, "apple", true, "banana", 42, "cherry"];

let arr4 = [];

function Q14(x){
  for (let i = 0; i <= x.length; i++){
    if (typeof x[i] === 'string'){
      arr4.push(x[i]);
    }
  }
  return arr4;
}
console.log("Quiz 14번의 답은 : ");
console.log(Q14(arr3));

// Quiz 15
function Q15(x) {
  if(x < 0){
    return false;
  }else if (x == 0){
    return true;
  }else{
    return (x * Q15(x - 1));
  }
}

console.log("Quiz 15번의 답은 : " + Q15(5));

// Quiz 16
const students = [
  { name: "둘리", math: 90, english: 85},
  { name: "또치", math: 80, english: 95},
  { name: "도우너", math: 70, english: 75},
];

let sum4 = 0;

function Q16(x, y){
  for (let i = 0; i < x.length; i++){
      sum4 += x[i][y];
  }
  return sum4 / x.length ;
}
const avg = Q16(students, 'math')

console.log("Quiz 16번의 값은 : " +avg);

// Quiz 17

const employees = [
  { name: "짱구", position: "부장", salary: 500},
  { name: "철수", position: "차장", salary: 380},
  { name: "훈이", position: "사원", salary: 260},
  { name: "맹구", position: "차장", salary: 420},
  { name: "유리", position: "사원", salary: 220},
];

function Q17(x, y){
  let sum5 = 0;
  let count = 0;

  for(let i = 0; i < x.length; i++){
    if(x[i].position === y){
      sum5 += x[i].salary;
      count++;
    }
  }
  return count === 0 ? 0 : sum5 / count;
}

let avg2 = Q17(employees, '사원');
console.log("Quiz 17번의 값은 : " + avg2);
