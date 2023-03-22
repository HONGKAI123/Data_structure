//[1,2,4,2,8,1] ，2 //return 10 因为最大的两个数加起来是10
//[1,3,4] ,1      // return 4 因为最大的两个数是4
//[4,2,1,6,2] , 4  // return 13 //最大的四个数加起来是13
//做法！！！！！
// loop 两次 ， 从第一个数字开始， 根据给的需要相加的num数，一次一次加，每次i往前移动一次
// 用第一个例子， 第一次 1+2+4； 第二次2+4+2 ； 第三次 4+2+8； 第四次 2+8+1
//所以i 会停在 倒数n个数字，比如剩下三个数字的时候， 我们不想要最后两位数字也被计算，我们需要倒数第三位数，所以3-1，停留在倒数第三个数
//[1,2,4,(2),8,1], i 会停在括号2里， 停的地方为<length -(n-1)
//设置max， max 为第一次粗存的数字， 之后每次相加的数（temp）如果大于max， 把该temp 设置为max；
const maxSubarraySum = (arr, n) => {
  let max = -Infinity; //将max设置为负的无限大
  for (i = 0; i < arr.length - (n - 1); i++) {
    // let temp = arr[i];
    let temp = 0;
    // for (j = i + 1; j < i + n; j++) {
    //   temp = temp + arr[j];
    // }
    for (j = 0; j < n; j++) {
      temp += arr[i + j]; // 从第一位数加到 设置的最大长度
    }
    if (temp > max) {
      max = temp;
    }
  }
  console.log(max);
};
maxSubarraySum([1, 2, 3, 4, 5], 3);
