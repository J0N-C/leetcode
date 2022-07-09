/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const lefts = [1];
  const rights = [1];
  let i = 0;
  let j = nums.length - 1;
  while (lefts.length < nums.length) {
    lefts.push(lefts[i] * nums[i]);
    rights.unshift(rights[0] * nums[j])
    i++;
    j--;
  }
  return lefts.map((left, i) => left * rights[i]);
};
