/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0;
  let currentNum;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === currentNum) {
      nums.splice(i, 1);
      i--;
    } else {
      currentNum = nums[i];
      count++;
    }
  }
  return count;
};
