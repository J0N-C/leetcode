/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const strArr = s.split('');
    let length = 0;
    let testArr = [];
    for (let i = 0; i < strArr.length; i++) {
        const letter = strArr[i];
        if (testArr.indexOf(letter) < 0) {
            testArr.push(letter);
        } else {
            if (testArr.length > length) {
                length = testArr.length;
            }
            testArr = testArr.slice(testArr.indexOf(letter) + 1);
            testArr.push(letter);
        }
    }
    if (testArr.length > length) {
        length = testArr.length;
    }
    return length;
};
