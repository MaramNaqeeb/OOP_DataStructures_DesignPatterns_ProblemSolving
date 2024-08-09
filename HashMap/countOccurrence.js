function countOccurrence(arr) {
  let dic = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in dic) {
      dic[arr[i]]++;
    } else {
      dic[arr[i]] = 1;
    }
  }
  return dic;
}
console.log(countOccurrence([1, 3, 2, 3, 5, 1, 3]));
