/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numSet = new Set(nums);
  const setArr = [...numSet];
  if (setArr.length < nums.length) {
    return true;
  }
  return false;
};
