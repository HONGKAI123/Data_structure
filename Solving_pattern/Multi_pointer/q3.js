// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (str1.length === 0) {
    return true;
  }
  while (j < str2.length) {
    if (str1[i] == str2[j]) {
      i++; //每次只要有str[i] match str2[j], i就会加一次， 只有match的时候才会加1
    }
    if (i == str1.length) {
      //如果str1 中所有字符都出现了一次， 就对了
      return true;
    }
    j++; //keep character on move,确保顺序
  }
  return false;
}
