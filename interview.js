function Factorial(num) {
  let co = 1;
  for (let i = num; num >= 1; num--) {
    co *= num;
  }
  return co;
}
console.log(Factorial(7));

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
  let strSplit = String(string).split(" ");
  let len = strSplit.map(v => v.length);
  let max = Math.max(...len);
  filMax = strSplit.filter(n => n.length == max);
  return filMax;
};
console.log(maxString("I will do it cos am a developer"));

function flatterArrays(array) {
  let arr = array
    .toString()
    .split(" ")
    .map(v => v);
  return arr;
}
console.log(flatterArrays([1, 2, [3, [4, 5]], 6, 7, [8, [9], 10]]));

const getIndexOfNumAddedToGetTarget = (nums, target) => {
  let arr = [];
  for (index = 0; index < nums.length; index++) {
    for (secIndex = 0; secIndex < nums.length; secIndex++) {
      if (index == secIndex) {
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
  console.log(arr);
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
        if (nums[i] + nums[b] + nums[c] == 0) {
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

// const getClosestSumToTheTarget = (nums, target) => {
//   let count = 0;
//   let arr = [];
//   for (values in nums) {
//     for (secValues in nums) {
//       for (thirdValues in nums) {
//         if (values == secValues || values == thirdValues) {
//           count += nums[values];
//           arr.push(count);
//           if (nums[values] + nums[secValues] + nums[thirdValues] === target) {
//             return arr;
//           }
//         }
//       }
//     }
//   }
//   return arr;
// };
// console.log(getClosestSumToTheTarget([-1, 2, 1, -4], 1));
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

// const returnIndexofAtargetedValue = (arr, target) => {
//   let arr2 = [];
//   for (let index in arr) {
//     if (arr[index] == target) {
//       arr2.push(parseInt(index));
//     }
//   }
//   if (arr2.length > 0) {
//     return arr2.join("");
//   } else {
//     let res = arr.concat(target);
//     let sort = res.sort((a, b) => a - b);
//     for (let index in sort) {
//       if (sort[index] === target) {
//         return index;
//       }
//     }
//   }
// };
// console.log(returnIndexofAtargetedValue([1, 3, 5, 6], 4));

// const findContiguousSubStrThatSumUpToGetLargestSum = arr => {};

// findContiguousSubStrThatSumUpToGetLargestSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const addOneToTheLastVAlueInTheArray = arr => {
  let len = arr.length - 1;
  let result;
  result = arr[len];
  let res = arr.map(value => {
    if (result == value) {
      value++;

      if (value % 2 === 0) {
        let c = value
          .toString()
          .split("")
          .map(Number);
        return c;
      }
    }
    return value;
  });
  return res
    .toString()
    .split(",")
    .map(v => parseInt(v));
};
// console.log(addOneToTheLastVAlueInTheArray([5, 2]));

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
      console.log(res);
    }
  }
};
// capitalizeTheFirstLetterInString("he is a very good boy");

const capitalizeTheFirstLetterInStrings = str => {
  let splitStr = str.split(" ");
  let word = [];
  for (let values of splitStr) {
    word.push(values[0].toUpperCase() + values.slice(1));
  }
  return word;
};

console.log(capitalizeTheFirstLetterInStrings("he is a very good boy"));

const IntegerReserver = nums => {
  arr = [];
  let len = nums.length - 1;
  let res = nums.toString().split(" ");
  for (let values of res) {
    let index = values.charAt(0);
    if (index == "-" || index == "+") {
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
// console.log(reverseInt(-32));
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
console.log(arrayChucks([1, 2, 3, 4, 6, 6, 7], 2));
