function Factorial(num) {
  let co = 1;
  for (let i = num; num >= 1; num--) {
    co *= num;
  }
  return co;
}
// console.log(Factorial(7));

function getIndex(...arr) {
  let res = arr.map(v => {
    len = arr.length - 1;
  });
  return arr[len];
}
// console.log(getIndex(1, 2, 7, 9, 9));

function getVowelSound(arr, string) {
  let co = 0;
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (string.toLowerCase().includes(arr[i])) {
      co++;
      arr2.push(arr[i]);
    }
  }
  // console.log(arr2);
  // console.log(co);
}
getVowelSound(["a", "e", "i", "o", "u"], "chibuIkE");

const maxString = string => {
  let strSplit = string.split(" ");
  let len = strSplit.map(v => v.length);
  let max = Math.max(...len);
  filMax = strSplit.filter(n => n.length === max);
  return filMax;
};
// console.log(maxString("I will do it cos am a developer"));

function flatterArrays(array) {
  let arr = array
    .toString()
    .split(",")
    .map(v => v);
  return arr;
}
// console.log(flatterArrays([1, 2, [3, [4, 5]], 6, 7, [8, [9], 10]]));

const getIndexOfNumAddedToGetTarget = (nums, target) => {
  let arr = [];
  for (let index = 0; index < nums.length; index++) {
    for (let secIndex = 0; secIndex < nums.length; secIndex++) {
      if (index === secIndex) {
        continue;
      }
      if (nums[index] + nums[secIndex] === target) {
        arr.push(index);
        // console.log(nums[index]);
      }
    }
  }
  // console.log(arr);

  //   nums.map((v, i, c) => {
  //     for (let r in nums) {
  //       if (i == r) {
  //         continue;
  //       }
  //       if (v + nums[r] == target) {
  //         arr.push(i);
  //       }
  //     }
  //   });
  // console.log(arr);
};
getIndexOfNumAddedToGetTarget([3, 2, 4], 6);

const get3sumequaltoZero = nums => {
  let arr = [];
  let arr2 = [];
  for (i = 0; i < nums.length; i++) {
    for (b = 0; b < nums.length; b++) {
      for (c = 0; c < nums.length; c++) {
        if (i == b || 1 == c) {
          continue;
        }
        if (nums[i] + nums[b] + nums[c] === 0) {
          arr.push(nums[i], nums[b], nums[c]);
        }
      }
    }
  }
  if (arr.length === 0) {
    return arr;
  }
  arr.every(v => {
    return v === 0;
  });
  let firstSlice = arr.slice(0, 6);
  let secSlice = firstSlice.splice(3);
  arr2.push(firstSlice, secSlice);
  if (nums.length === 0) {
    return [];
  } else if (nums.length < 3) {
    return [];
  } else if (nums.length === 3 || 4) {
    let res = arr2.slice(0, 1);
    return res;
  }

  return arr2;
};
// console.log(get3sumequaltoZero([1, 2, -2, -1]));
// [-1,0,1,2,-1,-4]

const getClosestSumToTheTarget = (nums, target) => {
  let count = 0;
  let arr = [];
  for (values in nums) {
    for (secValues in nums) {
      for (thirdValues in nums) {
        if (values == secValues || values == thirdValues) {
          count += nums[values];
          arr.push(count);
          if (nums[values] + nums[secValues] + nums[thirdValues] === target) {
            return arr;
          }
        }
      }
    }
  }
  return arr;
};
// // console.log(getClosestSumToTheTarget([-1, 2, 1, -4], 1));
// console.log(getClosestSumToTheTarget([0, 0, 0], 1));
// console.log(getClosestSumToTheTarget([0], 1));

// const RemoveDuplicateFromFilterSorted = (arr, length) => {
//   let nums = arr.sort((a, b) => a - b);
//   let array = [],
//     prev;
//   for (var values = 0; values < nums.length; values++) {
//     if (!(values in nums)) continue;

//     if (nums[values] !== prev || array.length === 0) {
//       array.push(nums[values]);
//       prev = nums[values];
//     }
//   }
//   return array;
// };
// console.log(RemoveDuplicateFromFilterSorted([1, 1, 2]));

const returnIndexofAtargetedValue = (arr, target) => {
  let arr2 = [];
  // for (let index in arr) {
  //   if (arr[index] === target) {
  //     arr2.push(index);
  //   }
  // }
  // if (arr2.length > 0) {
  //   return arr2.join("");
  // }
  // else {
  let res = arr.concat(target);
  let sort = res.sort((a, b) => a - b);
  for (let index in sort) {
    if (sort[index] === target) {
      return index;
    }
    // }
  }
};
// console.log(returnIndexofAtargetedValue([1, 3, 5, 6], 2));

// const findContiguousSubStrThatSumUpToGetLargestSum = arr => {};

// findContiguousSubStrThatSumUpToGetLargestSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

// const addOneToTheLastVAlueInTheArray = arr => {
//   let len = arr.length - 1;
//   let result;
//   result = arr[len];
//   let res = arr.map(value => {
//     if (result == value) {
//       value++;

//       if (value % 2 === 0) {
//         let c = value
//           .toString()
//           .split("")
//           .map(Number);
//         return c;
//       }
//     }
//     return value;
//   });
//   return res
//     .toString()
//     .split(",")
//     .map(v => parseInt(v));
// };
const addOneToTheLastVAlueInTheArray = arr => {
  let len = arr.length - 1;
  let result;
  result = arr[len];

  const arrLen = arr.length;
  return arr.map((item, idx) => {
    let lastItem = [];

    if (arrLen === idx + 1) {
      lastItem = ++item;

      if (lastItem >= 10) {
        lastItem = lastItemArray = [...String(lastItem)];
      }

      return lastItem;
    }

    return [item, ...lastItem];
  });
  // return res
  //   .toString()
  //   .split(",")
  //   .map(v => parseInt(v));
};
// console.log(addOneToTheLastVAlueInTheArray([5, 2, 6, 7, 9]), "this value");

const stringReversal = str => {
  let result = [];
  let length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join(" ");
};
// console.log(stringReversal(["chi", "chioma", "tochi", "ebere"]));

const capitalizeTheFirstLetterInString = str => {
  let splitStr = str.split(" ");
  // console.log(splitStr);
  for (let values in splitStr) {
    if (splitStr[values].charAt(0).toLowerCase()) {
      let res = splitStr[values]
        .charAt(0)
        .toUpperCase()
        .concat(splitStr[values].substring(1));
      // console.log(res);
    }
  }
};
capitalizeTheFirstLetterInString("he is a very good boy");

const capitalizeTheFirstLetterInStrings = str => {
  let splitStr = str.split(" ");
  let word = [];
  for (let values of splitStr) {
    word.push(values[0].toUpperCase() + values.slice(1));
  }
  return word;
};

// console.log(capitalizeTheFirstLetterInStrings("he is a very good boy"));

const IntegerReserver = nums => {
  arr = [];
  let len = nums.length - 1;
  let res = nums.toString().split(" ");
  for (let values of res) {
    let index = values.charAt(0);
    if (index === "-" || index === "+") {
      let rest = values
        .substring(1)
        .split(",")
        .slice(1)
        .reverse()
        .map(v => v)
        .join("");
      let finalResult = index.concat(rest);
      return finalResult;
    } else {
      let withoutAssignment = values
        .toString()
        .split(",")
        .reverse();
      return withoutAssignment;
    }
  }
};
// console.log(IntegerReserver(["-", 1, 2]));

const reverseInt = int => {
  const reverse = int
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(reverse) * Math.sign(int);
};
// console.log(reverseInt(-15));
// return interger and return 0 if the ingeger overflows
var reverse = x => {
  const s = parseInt([...("" + x)].reverse().join(""));
  return s >= 2 ** 31 ? 0 : Math.sign(x) * s;
};
const arrayChucks = (array, num) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    let res = array.splice(i--, num);
    arr.push(res);
    continue;
  }
  if (array.length === 0) {
    return arr;
  }
  arr.push(array);
  return arr;
};
// console.log(arrayChucks([1, 2, 3, 4, 6, 6, 7], 2));

const returnSumOfInput = num => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count += i;
  }
  // console.log(count);
};
returnSumOfInput(4);
//return a function that returns string
function str(str) {
  const returnFunctionThatReturnsStr = () => str;
  // console.log(returnFunctionThatReturnsStr());
}
str("apple");

var re = "000230.000";
var r = "000";

// console.log(Math.round(parseInt(r).toFixed()));
// console.log(Math.round(parseInt(re)));
// console.table(Math.ceil(parseInt(re).toExponential(2)));
let count = 4;
let x = -3;

// const mergeSortedArr = (nums1, m, nums2, n) => {};
// mergeSortedArr([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
const findLuckynume = (...arr) => {
  let res = arr.reduce((a, b, c) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
  let max = Math.max(...Object.values(res));
  let objValues = Object.keys(res).filter(v => res[v] === max);
  if (parseInt(objValues) === max) {
    return parseInt(objValues);
  } else if (parseInt(objValues) !== max) {
    return -1;
  } else if (arr.length === 1) {
    return -1;
  }
};
// console.log(objValues);
// console.log(findLuckynume(2, 2, 3, 4));
// console.log(
//   findLuckynume(
//     19,
//     12,
//     11,
//     14,
//     18,
//     8,
//     6,
//     6,
//     13,
//     9,
//     8,
//     3,
//     10,
//     10,
//     1,
//     10,
//     5,
//     12,
//     13,
//     13,
//     9
//   )
// );
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fimages%2Fbaby-growing-steps-illustration-from-crawling-to-walking%2F178194770&psig=AOvVaw1cyv3SvvsCGvDfvgJ7PVYN&ust=1585583668093000&source=images&cd=vfe&ved=2ahUKEwjyiNTLhcDoAhWKBhoKHaVQD8wQr4kDegUIARDwAQ for reduce-Image
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fbaby%2Bcrawling%2Bsilhouette&psig=AOvVaw1cyv3SvvsCGvDfvgJ7PVYN&ust=1585583668093000&source=images&cd=vfe&ved=2ahUKEwjyiNTLhcDoAhWKBhoKHaVQD8wQr4kDegUIARDyAQ reducer3-image
// It is time to stop crawling! Walkthrough javascript algorithms easily with Array.reduce method. Image by gettyimages.com
// console.log(findLuckynume(1, 2, 2, 3, 3, 3));
// console.log(findLuckynume(2, 2, 2, 3, 3));
// console.log(findLuckynume(5));
// console.log(findLuckynume(7, 7, 7, 7, 7, 7, 7));
// console.log(findLuckynume(2, 2, 3, 3));

let data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];

const getRate = ({ principal, time }) => {
  if (principal >= 2500 && time > 1 && time < 3) return 3;
  if (principal >= 2500 || time >= 3) return 4;
  if (principal < 2500 || time <= 1) return 2;
  return 1;
};
const interestCaculator = arr => {
  let interestData = [];
  arr.forEach(({ principal, time }) => {
    let rate = getRate({ principal, time });
    let interest = (principal * rate * time) / 100;
    interestData.push({ principal, rate, time, interest });
  });
  return interestData;
};
// console.table(interestCaculator(data));

function num(nums) {
  let res = nums
    .sort((a, b) => a - b)
    .reduce((a, b) => {
      if (a.indexOf(b) === -1) {
        a.push(b);
      }
      return a;
    }, []);
  return res.toString().split(/\s+/);
  // .join("=");
}
// console.log(num([1, 1, 2]));

var returnNumberWithOutWordAndWhitespace = function(str) {
  let num = "1234567890";
  let result = [..."", parseInt(str.trim())].every(v => !isNaN(v));
  let trim;
  if (result) {
    trim = str.trim();
    return trim;
  } else {
    let nums = num.split("");

    // return res;
  }
};
// console.log(returnNumberWithOutWordAndWhitespace(" woird -42"));

var searchRange = function(nums, target) {
  let res = nums.sort((a, b) => a - b);
  let arr = [];

  let add = res.filter((v, i) => {
    if (v === target) {
      arr.push(i);
    }
    if (arr.length <= 1 && !target) {
      arr.push(-1, -1);
    }
  });

  return arr;
};
// console.log(searchRange([5, 7, 7, 8, 8, 10], 5));
// console.log(searchRange([1], 0));

var checkRecord = function(s) {
  let splitString = s.split("");
  let count = 0;
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  splitString.map(v => {
    if (v.includes("A")) {
      count++;
      arr.push(count);
    } else if (v.includes("P")) {
      arr.includes(v);
      count++;
      arr2.push(count);
    } else if (v.includes("L")) {
      arr3.push(count);
    }
  });

  if (arr.length < 2 && arr3.length < 4) {
    return true;
  }

  return false;
};
// console.log(checkRecord("PPALLP"));
// console.log(checkRecord("PPALLL"));
// console.log(checkRecord("AA"));
// console.log(checkRecord("LALL"));

const permutations = arr => {
  let emptArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      for (let h = 0; h < arr.length; h++) {
        if (i === j && j === h) {
          continue;
        }
        emptArr.push([arr[i], arr[j], arr[h]]);
      }
    }
  }
  // console.log(emptArr);
};
permutations([1, 2, 3]);
