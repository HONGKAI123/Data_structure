//requirement
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1,1,1,1,1,2]) // 2  因为有5个1 都算1一个， 2 算一个
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)
// Space Complexity - O(n)
//[1,1,1,2,3,3,4,4,5,6]
//解题思路1. 把i 放在第一个数， j放在第二个数， 对比i 与j
//2. 当i 与j 对应的数字不同时， i往后面move 一位，并把该index的数字变成j的数字
//直到loop到最后

// approach1
function countUniqueValues(arr) {
  let result = 0;
  if (arr.length === 0) {
    result = 0;
  }

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      //当i 不等于j, i往前进一位，设置arr[i]的数字等于j
      i++;
      arr[i] = arr[j];
    }
    result = i + 1;
  }
  return result;
}
countUniqueValues([1, 2, 3]);

//Kenny 的结果
function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆
  //Write your code here:
  //  let result = []
  // if(n ==1){
  //     result.push(0)
  // }
  // if(n==2){
  //     result.push(0)
  //     result.push(1)
  // }
  // if(n> 2){
  //     result.push(0)
  //     result.push(1)
  //     for (let i = 2; i<n;i++){
  //         result.push(result[result.length-2] + result[result.length-1])
  //     }
  // }
  //  return result ;
  // var fibo = [];
  // if (n >= 1) {
  //   //assume n will not be 0
  //   fibo.push(0);
  // }
  // if (n >= 2) {
  //   fibo.push(1);
  // }
  // if (n > 2) {
  //   var fiboNum = 1;
  //   for (var i = 1; i < n - 1; i++) {
  //     fibo.push(fiboNum);
  //     fiboNum = fiboNum + fibo[i]; //2
  //   }
  // }
  // console.log(fibo);
  //Return an array of fibonacci numbers starting from 0.
  //Do NOT change any of the code below 👇
}
// fibonacciGenerator(2);
