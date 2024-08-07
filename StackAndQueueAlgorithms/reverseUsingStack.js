function reverse(arr) {
  let stack = [];
  let reversedArr = [];
  let curr;
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }
  while ((curr = stack.pop())) {
    reversedArr.push(curr);
  }
  return reversedArr;
}
console.log(reverse([5, 4, 3, 2, 1]));
