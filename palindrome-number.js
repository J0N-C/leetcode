/**
Try: without converting to string
 */
var isPalindrome = function (x) {
  const strArr = x.toString().split('');
  for (let i = 0; i < (strArr.length / 2); i++) {
    if (strArr[i] != strArr[(strArr.length - 1) - i]) {
      return false;
    }
  }
  return true;
};
