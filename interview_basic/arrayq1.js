// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//[1,2] =>[[1,2]]
// [1,2,3,4,5] => [[1,2],[3,4]]
function some(arr) {
  let result = [];
  if (arr.length == 0) {
    return false;
  }
  for (element of arr) {
    // console.log(index)
    index = element - 1;
    if (index % 2 == 0) {
      if (index + 1 < arr.length) {
        result.push([arr[index], arr[index + 1]]);
      }
    }
  }
  return result;
}

// console.log(some([]))
console.log(some([1, 2, 3, 4, 5, 6, 7, 8, 9]));
