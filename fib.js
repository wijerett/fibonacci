function fibs(num) {
  fibSeq = [];
  let num1 = 0;
  let num2 = 1;
  let sum;
  if (num === 1) {
    return num1;
  } else if (num === 2) {
    return num2;
  } else {
    for (let i = 3; i <= num; i++) {
      console.log(num1, num2, i)
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
    }
    //console.log(num, num1, num2, sum)
    return num2;
  }
}

console.log("Fibonacci(8): " + fibs(8));
console.log("Fibonacci(8): " + fibs(29));








// function fibonacci(n) {
//   if(n < 2) {
//     return [n];
//   } else {
//     return ([fibonacci(n-1)+fibonacci(n-2)]);
//   }
// }

// //console.log(fibonacci([0, 1, 1, 2, 3, 5, 8, 13]))

// console.log(fibonacci(8))