function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  // compare the length of two strings
  let str1count = {};
  let str2count = {};
  // loop each char
  if (str1.length != str2.length) {
    return false;
  }

  // loop each character of both strings and store it in an object

  for (let char1 of str1) {
    str1count[char1] = ++str1count[char1] || 1;
  }
  console.log(str1count);
  for (let char2 of str2) {
    str2count[char2] = ++str2count[char2] || 1;
  }

  // compare two string to see if they are match
  for (let key in str1count) {
    //loop all st1 key
    if (!(key in str2count)) {
      return false;
    }
    if (str1count[key] !== str2count[key]) {
      return false;
    }
    return true;
  }
}

console.log(validAnagram("asd", "asd"));
