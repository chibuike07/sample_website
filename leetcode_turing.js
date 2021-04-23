const twoSum = (num, target, result = []) => {
  //passed
  for (let firstLoop = 0; firstLoop <= num.length; firstLoop++) {
    for (let secLoop = 0; secLoop <= num.length; secLoop++) {
      if (firstLoop === secLoop) {
        continue;
      }
      num[firstLoop] + num[secLoop] === target ? result.push(firstLoop) : [];
    }
  }
  return result;
};

// console.log(`twoSum`, twoSum([3, 2, 4], 6));
// console.log(`twoSum`, twoSum([2, 7, 11, 15], 9));

const palindrome = (x) => {
  let reverseX = x.toString().split("").reverse().join("");
  return Number(x) === Number(reverseX) ? true : false;
};

// console.log(`palindrome(121)`, palindrome(121));

function intToRoman(num, numHolder = "") {
  const figures = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let keys;
  for (keys in figures) {
    while (num === figures[keys]) {
      numHolder += [keys];
      num -= figures[keys];
    }
  }
  return numHolder;
}

// console.log(intToRoman(11));

const romanToInt = (s, num = 0) => {
  //passed
  const roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  for (let i = 0; i < s.length; i++) {
    const currentRoman = roman[s[i]];
    const nextRoman = roman[s[i + 1]];
    currentRoman < nextRoman ? (num -= currentRoman) : (num += currentRoman);
  }
  return num;
};

// console.log(romanToInt("XX"));

const loggestPrefix = (strs) => {
  let cloneArray = "";
  for (let i = 0; i < strs.length; i++) {
    for (let a = 0; a < strs.length; a++) {
      if (strs[i].includes(strs[a][i])) {
        console.log(`strs[i]`, strs[i][i]);
        cloneArray += strs[i][i];
      }
    }
  }
  return cloneArray;
};
// console.log(`loggestPrefix`, loggestPrefix(["flower", "flow", "flight"]));
// console.log(`loggestPrefix`, loggestPrefix(["dog", "racecar", "car"]));//failed

const removeDuplicateFromSortedArray = (array, ...nums) => {
  //passed
  let result;
  for (let i = 0; i < nums.length; i++) {
    if (array.indexOf(nums[i]) === -1) {
      result = nums.splice(i, 1);
      console.log(`result`, nums);
    }
  }

  return result;
};

// console.log(
//   `rmoveDuplication`,
//   removeDuplicateFromSortedArray([1], 1, 1, 2, 3, 5)

// );
let arr = [3, 2, 2, 3];
const removeElement = (nums, val) => {
  //passed
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

console.log(`removeelement()`, removeElement(arr, 3));

let len = 0;

const sumProduct = (nums, start = 0) => {
  let sum = 1;
  len = len % nums.length;
  len = len + 1;
  let array = [],
    secArray = [];
  for (let index = start; index < nums.length; index++) {
    if (nums[index] > 0) {
      sum *= nums[index];
    }
  }
  // console.log(`start`, start);

  array.push(sum);
  secArray.push(array);
  if (len < nums.length) {
    // console.log(`len`, len);
    sumProduct(nums, len);
  }

  // console.log(`array`, array);
};

sumProduct([0, 2, 3, 4, 8]);

const duplicationElemen = (nums) => {
  //passed
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums;
};

// console.log(duplicationElemen([0, 1, 2, 1, 2, 3, 4, 2]));

const validParenthesis = (s) => {
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let index = 0; index < s.length; index++) {
    for (const key in obj) {
      if (key === s[index]) {
        if (s[index + 1] === obj[key]) {
          return true;
        } else {
          return false;
        }
      }
    }
  }
};
// validParenthesis("()[]{}");
// validParenthesis("{[]}");
// validParenthesis("([)]");
// console.log(`validParenthesis(([]))`, validParenthesis("()[]{}"));
// console.log(`validParenthesis(([]))`, validParenthesis("([])"));
// console.log(`validParenthesis("{]|})`, validParenthesis("([())]"));

var lengthOfLastWord = function (s) {
  //passed
  let strArray = s.length > 0 ? s.trim().split(" ") : "";
  let lastElem = strArray.length - 1;
  let result = strArray[lastElem]
    ? strArray[lastElem].length
    : /\s/.test(s)
    ? 0
    : "";
  return result;
};

// console.log(lengthOfLastWord("hello world "));

const implementStr = (haystack, needle) => {
  let result;
  if (needle === "") return (result = 0);
  if (needle.length === 1)
    return (result = [...haystack].findIndex((v, i) => v === needle));

  let lookForDuplication = [...needle].reduce((preValue, curValue) => {
    preValue[curValue] = preValue[curValue] + 1 || 1;
    return preValue;
  }, {});

  let checkForDuplicate = Object.values(lookForDuplication).filter(
    (value) => value > 1
  );

  let findKeyOfDuplicate = Object.keys(lookForDuplication).filter(
    (v, i) => lookForDuplication[v] === checkForDuplicate[i]
  );

  return (result = [...haystack].findIndex(
    (v, i) => v === findKeyOfDuplicate[0]
  ));
};
// console.log(`one`, implementStr("hello", "ll"));
// console.log("two", implementStr("aaaa", "bba"));
// console.log(`three`, implementStr("a", "a"));
// console.log(`four`, implementStr("", "a"));
// console.log(`four`, implementStr("abc", "c"));

const maxSubArray = (nums) => {
  let arr = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    let res = nums.splice(index, 4);
    arr.push(res);
  }
  // console.log(`arr`, arr);
};
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

const plusOne = (digits, sum = 1) => {
  //passed
  let lastElem = digits.length - 1;
  for (let i = lastElem; i >= 0; i--) {
    digits[i] = digits[i] + sum;
    if (digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};
// console.log(`one`, plusOne([4, 3, 2, 1]));
// console.log(`two`, plusOne([0]));
// console.log(`three`, plusOne([1, 2, 9]));
// console.log(`four`, plusOne([9, 9]));
// console.log(`five`, plusOne([8, 9, 9, 9]));

const multiplyStrings = (num1, num2, str = "") => {
  return (str += +num1 * +num2);
};

// console.log(`multiplyStrings`, multiplyStrings("123", "456"));
// console.log(`multiplyStrings`, multiplyStrings("123", "111"));
// console.log(`multiplyStrings`, multiplyStrings("123456789", "987654321"));

const longestCommonPrefix = (strs) => {
  //passed
  checker = "";
  if (strs.length === 0) return checker;
  for (let a = 0; a < strs[0].length; a++) {
    const values = strs[0][a];
    for (let b = 0; b < strs.length; b++) {
      if (strs[b][a] !== values) return checker;
    }
    checker += values;
  }

  return checker;
};

// console.log(`one`, longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(`two`, longestCommonPrefix(["dog", "dacecar", "car"]));

const mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};
// console.log(`one`, mySqrt(8));
// console.log(`one`, mySqrt(4));
// console.log(`one`, mySqrt(0));

const arrangingCoins = (n) => {
  console.time(`arrangingCoins`);
  let convertToArray = Array.from({ length: n }, (x, i) => i);
  let co = 0,
    arr = [],
    res;
  for (let i = 0; i < convertToArray.length; i++) {
    co++;
    res = convertToArray.splice(i, co);
    i--;
    arr.push(res);
  }
  // console.log(`arr`, arr);
  console.log(`convertToArray`, convertToArray);

  const result = arr.map((n) => n.length);
  const max = Math.max(...result);
  console.timeEnd(`arrangingCoins`);
  return max;
};
// console.log(`one`, arrangingCoins(5));
// console.log(`two`, arrangingCoins(10));
// console.log(`three`, arrangingCoins(100));

const Average = (salary) => {
  // passed
  // sort the salary array
  let sortSalary = salary.sort((a, b) => a - b);

  // find the min and max salary
  let min = salary[0],
    max = salary[salary.length - 1];

  // remove it from the salary array
  let remainingSalary = salary.filter(
    (value) => [min, max].indexOf(value) === -1
  );

  // add the remaining value and divide by the salary length
  let sum = 0;
  for (let value of remainingSalary) {
    sum += value;
  }

  // return result
  return sum / remainingSalary.length;
};
// console.log(`Average`, Average([4000, 3000, 1000, 2000]));
// console.log(`Average`, Average([3000, 1000, 2000]));
// console.log(`Average`, Average([8000, 9000, 2000, 3000, 6000, 1000]));

const slowestKey = (releaseTimes, keysPressed) => {
  // loop through the releaseTimes
  let delay,
    longestPressedKey = "";

  let result = releaseTimes.map((releaseTime, i) => {
    // passed
    // get the start point
    const start = releaseTimes[i];

    // get the prev point
    const prev = releaseTimes[i - 1];

    // check for the first value of the array
    if (releaseTimes[i] === releaseTimes[0]) {
      // assign release[i] to delay
      delay = releaseTimes[i];
    } else {
      // minus the previous release[i] from the current releaseTime[i]
      // assign the result to delay
      delay = start - prev;
    }

    // push the delay in the longestDelay array
    return delay;
  });

  // get max of the result
  let max = Math.max(...result);

  // loop through loop
  for (let i = 0; i < result.length; i++) {
    const element = result[i];

    // check where element is equal to max
    if (element === max) {
      // return the alphas
      longestPressedKey += keysPressed[i];
    }
  }

  // return the sorted last value if more than one

  // console.log(`[]`, ['ba'].)
  return [...longestPressedKey].sort().reduce((c, v) => v);
};

console.log(`one`, slowestKey([9, 29, 49, 50], "cbcd"));
console.log(`two`, slowestKey([12, 23, 36, 46, 62], "spuda"));
console.log(`two`, slowestKey([1, 2], "ba"));
