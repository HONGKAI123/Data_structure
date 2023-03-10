// write a function that accept a string and returns counts of each character in the string
function charCount(str) {
  //make object to return at end
  var result = {};
  //loop over string, for each character
  for (var i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }

  //if char is a number/letter and is a key in object , add one to count
  //if char is a number/letter and not a key in object, add it and set value to 1
  // if char is a something else, space, period, dont do anything
  //return object at the end
  return result;
}

console.log(charCount("hello1234123ASD"));
