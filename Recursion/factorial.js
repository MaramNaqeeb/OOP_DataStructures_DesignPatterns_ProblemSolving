//recursion
function factorial(n) {
  if (n == 0) {  // stopping condition
    
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(3));

//iteration
function factorial2(n) {
  let f = 1;
  for (let i = n; i >= 1; i--) {
    f *= i;
  }
  return f;
}
console.log(factorial2(3));
