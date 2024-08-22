function fibonacci(n) {
  let memo = {};
  if (n <= 1) {
    return n;
  } else if (memo[n]) {
    return memo[n]; // if the number is in the memo, return the number without making a calculation
  } else {
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // if the number is not in the memo above, make a calculation
  }
  return memo[n];
}
console.log(fibonacci(3));


