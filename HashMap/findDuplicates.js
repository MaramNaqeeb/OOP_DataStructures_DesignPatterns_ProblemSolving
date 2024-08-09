function findDuplicates(arr) {
  let dic = {};
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in dic) {
      // or dic[arr[i]]
      dic[arr[i]]++;
    } else {
      dic[arr[i]] = 1;
    }
  }
  for (let key in dic) {
    if (dic[key] > 1) {
      arr2.push(Number(key));
    }
  }
  return arr2;
}
console.log(findDuplicates([1, 3, 2, 1, 4, 3, 5, 2, 5]));
