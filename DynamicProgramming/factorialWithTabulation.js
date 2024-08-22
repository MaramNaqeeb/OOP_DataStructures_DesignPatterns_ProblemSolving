function factorial(n) {
  if (n == 0) {
    return 1;
  }
  let arr = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] * i;
  }
  return arr[n];
}
console.log(factorial(3));
