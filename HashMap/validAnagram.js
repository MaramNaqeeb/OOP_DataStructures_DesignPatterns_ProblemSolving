var isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  let dic = {};
  for (let i = 0; i < s.length; i++) {
    if (!dic[s[i]]) {
      dic[s[i]] = 0;
    }
    dic[s[i]]++;
  }
  for (let i = 0; i < t.length; i++) {
    if (!dic[t[i]]) {
      return false;
    }
    dic[t[i]]--;
  }
  return true;
};
console.log(isAnagram("aace", "ccac"));
