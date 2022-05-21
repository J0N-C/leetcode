var romanToInt = function (s) {
  let finalNum = 0;
  const romanArr = s.split('');
  for (let i = 0; i < romanArr.length; i++) {
    if (romanArr[i] === 'M') {
      finalNum += 1000;
    }
    if (romanArr[i] === 'C') {
      if (romanArr[i + 1] === 'M') {
        finalNum += 900;
        i++;
        continue;
      } else if (romanArr[i + 1] === 'D') {
        finalNum += 400;
        i++;
        continue;
      } else {
        finalNum += 100;
      }
    }
    if (romanArr[i] === 'D') {
      finalNum += 500;
    }
    if (romanArr[i] === 'X') {
      if (romanArr[i + 1] === 'C') {
        finalNum += 90;
        i++;
        continue;

      } else if (romanArr[i + 1] === 'L') {
        finalNum += 40;
        i++;
        continue;
      } else {
        finalNum += 10;
      }
    }
    if (romanArr[i] === 'L') {
      finalNum += 50;
    }
    if (romanArr[i] === 'I') {
      if (romanArr[i + 1] === 'X') {
        finalNum += 9;
        i++;
        continue;

      } else if (romanArr[i + 1] === 'V') {
        finalNum += 4;
        i++;
        continue;
      } else {
        finalNum += 1;
      }
    }
    if (romanArr[i] === 'V') {
      finalNum += 5;
    }
  }
  return finalNum;
};
