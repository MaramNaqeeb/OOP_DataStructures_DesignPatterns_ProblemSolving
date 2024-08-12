//recursion
function fibunacci(n) {
  if (n == 0 || n == 1) {
    //stopping condition
    return n;
  }
  return fibunacci(n - 1) + fibunacci(n - 2); //recursion
}
console.log(fibunacci(10));

//iteration
function fibunacci2(n) {
  let arr = [0, 1];//to convert the number into an array
  for (let i = 2; i <= n; i++) {   //iterate 
    arr[i] = arr[i - 1] + arr[i - 2]; // apply fibunacci rule
  }
  return arr[n];
}
console.log(fibunacci2(10));
