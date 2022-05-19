var twoSum = function (nums, target) {
  let first;
  let second;
  for (let i = 0; i < nums.length; i++) {
    first = i;
    second = nums.indexOf(target - nums[i], i + 1);
    if (second > 0) {
      break;
    }
  }
  return [first, second];
};
