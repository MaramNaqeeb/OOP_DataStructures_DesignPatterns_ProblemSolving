function climbStairs(n) {
  let memo = {};
  if (n < 4) {
    return n;
  } else if (memo[n]) {
    return memo[n]; // if the number is in the memo, return the number without making a calculation
  }
  memo[n] = climbStairs(n - 1) + climbStairs(n - 2); // if the number is not in the memo above, make a calculation
  return memo[n];
}
console.log(climbStairs(8));

