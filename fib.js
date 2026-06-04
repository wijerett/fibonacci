#!/usr/bin/env node


function fibs(n) {
  fibSeq = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeq.push(fibSeq[i - 1] + fibSeq[i  - 2]);
  }
  return fibSeq;
}
console.log("Fibonacci(8): " + JSON.stringify(fibs(8)));


function fibsRec(n) {
  if(n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }
  const prev = fibsRec(n - 1);
  prev.push(prev.at(-1) + prev.at(-2));
  return prev;
}
console.log("Fibs(8): " + JSON.stringify(fibsRec(8)));
