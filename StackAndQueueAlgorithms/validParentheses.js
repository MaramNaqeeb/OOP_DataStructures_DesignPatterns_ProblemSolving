// function validParentheses(s) {
//   let stack = [];
//   const map = new Map([
//     ['(', ')'],
//     ['{', '}'],
//     ['[', ']'],
//   ]);
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
//       stack.push(s[i]);
//     } else {
//         const closeParenthese = stack.pop();
//       if (s[i] !== map.get(closeParenthese)) {
//         return false;
//       }
     
//     }
//   }
//   return stack.length == 0;
// }
// console.log(validParentheses("(())"));

function validParentheses(s) {
    let stack = [];
    const map = 
      {')': '(',
      '}': '{',
      ']': '[',
      }
    for (let i = 0; i < s.length; i++) {
      if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
        stack.push(s[i]);
      } else if (stack[stack.length-1]==map[s[i]]) {
            stack.pop()
        }else{
        return false;
       
      }
    }
    return stack.length?false:true;
  }
  console.log(validParentheses("(())"));
  
