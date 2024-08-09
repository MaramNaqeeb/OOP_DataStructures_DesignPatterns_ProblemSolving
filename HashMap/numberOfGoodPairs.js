var numIdenticalPairs = function (nums) {
  let dic = {};
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in dic) {
      dic[nums[i]]++;
      counter += dic[nums[i]] - 1;
    } else {
      dic[nums[i]] = 1;
    }
  }

  return counter;
};
console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
