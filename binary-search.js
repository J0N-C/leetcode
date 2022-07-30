var search = function (nums, target) {
  let currentIndex = 0;
  let finalIndex = -1;
  testHalf(nums);

  function testHalf(arr) {
    let half = Math.ceil(arr.length / 2);
    console.log('currentArr', currentIndex, arr)
    if (arr.length === 1) {
      if (arr[0] === target) {
        return finalIndex = currentIndex;
      } else return;
    }
    if (arr[half] <= target) {
      currentIndex += half;
      testHalf(arr.slice(half))
    } else {
      testHalf(arr.slice(0, half))
    }
  }

  return finalIndex;
};
