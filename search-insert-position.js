/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const test = nums.indexOf(target);
  if (test === -1) {
    let newTest = -1;
    let i = 1;
    if (target < nums[0]) {
      return 0;
    }
    while (newTest === -1) {
      newTest = nums.indexOf(target - i)
      i++;
    }
    return newTest + 1;
  }
  return test;
};
