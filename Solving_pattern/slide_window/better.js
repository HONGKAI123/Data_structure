//[1,2,4,2,8,1] ，2 //return 10 因为最大的两个数加起来是10
//[1,3,4] ,1      // return 4 因为最大的两个数是4
//[4,2,1,6,2] , 4  // return 13 //最大的四个数加起来是13
//做法！！！！！
// 从第第一位数字开始， 先将前n位数字设置成最大值； 这里按照第一个例子为准
// 首先计算1+2+4， 然后把1去掉，加下一位数字2， 就变成2+4+2； 然后再变成4+2+8；
//然后对比两个数字， 大的就是max

const maxSubarraySum = (arr, n) => {
  let max = 0;
  let temp = 0;
  //add前三位
  for (i = 0; i < n; i++) {
    max += arr[i];
    temp = max; //将目前的temp设置成max
  }
  for (i = n; i < arr.length; i++) {
    //这里i总是被加的那个数字
    temp = temp + arr[i] - arr[i - n]; //delete the first element and add one 删除掉第一个数字， 加上后面的数字
    console.log(temp);
  }

  if (temp > max) {
    temp = max;
  }
};
maxSubarraySum([1, 2, 3, 4, 5], 3);
