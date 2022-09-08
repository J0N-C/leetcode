function solution(inputString) {
  const sortedString = inputString.split('').sort();
  console.log(sortedString);
  let prevCount = null;
  let currItem = sortedString[0];
  let currCount = 1;
  for (let i = 1; i < sortedString.length; i++) {
    if (sortedString[i] === currItem) {
      currCount++;
    } else {
      prevCount = currCount;
      currCount = 1;
      currItem = sortedString[i];
    }
    if (prevCount !== null && currCount > prevCount) {
      return false;
    }
    console.log(i, sortedString[i], prevCount, currCount);
  }
  return true;
}
//problem: needs to include all prior strings. i.e. 'aaz' is false because 'b' = 0.
