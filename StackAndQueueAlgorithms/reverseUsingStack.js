function reverse(arr) {
  let stack = [];
  let curr;
  while ((curr = arr.pop())) {
    stack.push(curr);
  }
  return stack;
}
console.log(reverse([5, 4, 3, 2, 1]));
