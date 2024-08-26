let sum = 0;
const arr = [1, "aa", true, "5", 10];

for(let i = 0; i < arr.length; i++){
  if(!isNaN(parseInt(arr[i]))){
    sum += parseInt(arr[i]);
  } else if (typeof arr[i] == 'boolean'){
    sum += arr[i];
  }
}

console.log(sum);

