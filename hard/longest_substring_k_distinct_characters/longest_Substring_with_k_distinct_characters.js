/**
 * @param {string} s
 * @param {number} k
 * @returns {string}
 */
function removeFirstDistinctChar(s, k) {
  let currS = '';
  let nDistinct = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (currS.indexOf(s[i]) === -1) {
      nDistinct++;
      if (nDistinct <= k) {
        currS += s[i];
      } else {
        return s.slice(i + 1);
      }
    }
  }
  return s;
}

/**
 * @param {string} s
 * @returns {string}
 */
function longestSubstringWithKDistinctChars(s, k) {
  if (k <= 0) {
    throw 'Number of distinct characters must greater than zero';
  }

  let nDistinct = 0;
  let currS = '';
  let lastS = '';
  for (let i = 0; i < s.length; i++) {
    if (currS.indexOf(s[i]) !== -1) {
      currS += s[i];
    } else {
      nDistinct++;
      if (nDistinct <= k) {
        currS += s[i];
      } else {
        if (currS.length >= lastS.length) {
          lastS = currS;
        }
        currS = removeFirstDistinctChar(currS, k - 1) + s[i];
      }
    }
  }

  return currS.length >= lastS.length ? currS : lastS;
}

/* Test */
console.log(longestSubstringWithKDistinctChars('abcba', 2)); // bcb
console.log(longestSubstringWithKDistinctChars('aaabcba', 2)); // aaab
console.log(longestSubstringWithKDistinctChars('aaabcba', 3)); // aaabcba
console.log(longestSubstringWithKDistinctChars('bbbbzaaabcba', 3)); // bbbbzaaab
console.log(longestSubstringWithKDistinctChars('ab', 3)); // ab
console.log(longestSubstringWithKDistinctChars('ab', 1)); // b
