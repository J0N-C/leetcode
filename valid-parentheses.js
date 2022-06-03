/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let test = s[i];
    if (test === '(' || test === '{' || test === '[') {
      stack.unshift(test);
    } else if (test === ')' && stack[0] === '(' || test === '}' && stack[0] === '{' || test === ']' && stack[0] === '[') {
      stack.shift();
    } else return false;

  }
  if (stack.length === 0) {
    return true;
  } else return false;
};
