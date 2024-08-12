//recursion
function reverseArr(arr, start, end) {
  if (start >= end) {
    return arr; // stopping condition
  }
  let temp = arr[start]; //swap
  arr[start] = arr[end];
  arr[end] = temp;

  return reverseArr(arr, start + 1, end - 1); // recursion
}
arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArr(arr1, 0, arr1.length - 1));

//iteration
function reverseArr2(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
}
console.log(reverseArr2([5, 4, 3, 2, 1]));
