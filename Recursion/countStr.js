//recursion
function countStr(str) {
  if (str == "") {
    return 0;  //stopping condition
  }

  return 1 + countStr(str.substring(1)); //recursion
}

console.log(countStr("hello"));

//iteration
function countStr2(str) {
  str = str.split("");
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
  }
  return count;
}
console.log(countStr2("hello"));
