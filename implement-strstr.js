/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!haystack) {
    return 0;
  }
  const regex = new RegExp(needle);
  const test = haystack.match(regex);
  if (test) {
    return test.index;
  } else {
    return -1;
  }
};
