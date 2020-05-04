// Array.reduce()

const numberCount = (...array) => {
  array.reduce((wrapper, currentValues, currentIndex, copyArray) => {
    wrapper + currentValues;
    // console.log(wrapper);
    // console.log(currentValues);
    // console.log(currentIndex);
    // console.log(array);
  }, 0);
};
numberCount(1, 2, 3, 4, 5);
// before the loop the wrapper is the initial-value
// wrapper = 0, currentValue = 1
// first iteration, currentValue = 1, wrapper = 1
// second iteration , currentValue = 2 ,wrapper = 3// 1 + 2 => 3//
// third iteration , currentValue = 3 ,wrapper = 5// 3 + 3 => 6
// fourth iteration , currentValue = 4 ,wrapper = 12// 6 + 4 => 10
// fifth iteration , currentValue = 5 ,wrapper = 15//1o + 5 => 15

const sumNum = (...array) => {
  let count = 0;
  array.forEach(nums => (count += nums));
  console.log(count);
};
sumNum(1, 2, 3, 4, 5);

const findFirstValueOfAnArray = (...array) => {
  let resut = array.reduce((a, b) => a);
  console.log(resut);
};
findFirstValueOfAnArray(1, 2, 3, 4, 5);

let res = [1, 2, 3, 4, 5].reduce((a, b) => b);
console.log(res);
