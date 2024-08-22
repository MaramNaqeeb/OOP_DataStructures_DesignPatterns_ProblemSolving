function climbStairs(n) {
  if (n < 4) {
    return n;
  } else {
    var arr = [1, 1];
    for (let i = 2; i <= n; i++) {
      //this is like a fibonacci sequence 
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[n];
}
console.log(climbStairs(8));
