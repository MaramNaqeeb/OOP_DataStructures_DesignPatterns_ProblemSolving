function factorial(n) {
  let memo = {};
  if (n == 0) {
    return 1;
  } else if (memo[n]) {
    return memo[n]; // if the number is in the memo, return the number without making a calculation
  } else {
    memo[n] = n * factorial(n - 1, memo); // if the number is not in the memo above, make a calculation
  }
  return memo[n];
}
console.log(factorial(3));
