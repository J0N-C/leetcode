var isAnagram = function (s, t) {
  if (t.length !== s.length) return false;
  letterStacks = {};
  for (let i = 0; i < s.length; i++) {
    if (!letterStacks[s[i]]) {
      letterStacks[s[i]] = 0;
    }
    if (!letterStacks[t[i]]) {
      letterStacks[t[i]] = 0;
    }
    letterStacks[s[i]]++;
    letterStacks[t[i]]--;
  }
  for (const [key, value] of Object.entries(letterStacks)) {
    if (value !== 0) return false;
  }
  return true;
};

var isAnagramBruteForce = function (s, t) {
  if (t.length !== s.length) return false;
  let splitT = t.split('');
  for (let i = 0; i < s.length; i++) {
    let tIndex = splitT.indexOf(s[i])
    if (tIndex > -1) {
      splitT[tIndex] = 0;
    } else return false;
  }
  return true;
};
