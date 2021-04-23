const factorial = (input) => {
  console.log(input);
  let count = 1;
  for (let i = 0; input >= 1; input--) {
    count *= input;
  }
  return count;
};
console.log(factorial(7));

const getVowelSound = (arr, str) => {
  let splitStr = str.split("");
  //   console.log(splitStr);
  let vowels = splitStr.filter((v) => {
    return arr.includes(v.toLowerCase());
  });
  // console.log(vowels);
};
getVowelSound(["a", "i", "e", "o", "u"], "chibUikE");

const maxString = (string) => {
  let splitStr = string.split(" ");
  length = splitStr.map((v) => v.length);
  let max = Math.max(...length);
  let maxVlaue = splitStr.find((v) => v.length === max);
  // console.log(maxVlaue);
};
maxString("i will be there");

const getIndexOfTwoNumAddedToGetTarget = (array, target) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let c = 0; c < array.length; c++) {
      if (i === c) {
        continue;
      } else {
        if (array[i] + array[c] === target) {
          arr.push(i);
        }
      }
    }
  }
  // console.log(arr);
};
getIndexOfTwoNumAddedToGetTarget([1, 3, 4, 5], 5);

const returnIndexofAtargetedValue = (arr, target) => {
  let index = arr.findIndex((v) => target.includes(v));

  // console.log(index);
};
returnIndexofAtargetedValue([1, 2, 3, 4, 5], "4");

const addOneToTheLastVAlueInTheArray = (arr) => {
  let len = arr.length - 1;
  let result = arr[len];
  return result;
};
// console.log(addOneToTheLastVAlueInTheArray([5, 2, 6, 7, 9]), "this value");

const capitalizeTheFirstLetterInString = (str) => {
  let fist = str.chartAt(0);
};

const fillTexts = (n, str) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  arr.fill(str);
  console.log(arr.fill(str));
};
fillTexts(4, 5);

const highestNumPosition = (arr) => {
  let arrs = [];
  let arrs1 = [];
  for (let value in arr) {
    arrs.push(Math.max(...arr[value]));
    // arrs1.push(arr[value]);
  }
  let maxvalue = Math.max(...arrs);
  let maxRow = arrs.findIndex((v) => v === maxvalue);
  let index = arr[maxRow].findIndex((v) => v === maxvalue);

  return [maxRow, index];
};
// console.log(
//   highestNumPosition([
//     [66, 3, 9],
//     [1, 8, 98],
//     [7, 9, 7],
//   ])
// );
// highestNumPosition([
//   [3, 5, 2],
//   [55, 6, 22],
//   [54, 64, 110]
// ]);
const countTargetInAString = (stri, target) => {
  let cou = 0;
  for (let i = 0; i < stri.length; i++) {
    if (target.includes(stri[i])) {
      cou++;
    }
  }
  // console.log(cou);
};
countTargetInAString("chibuike", "i");
function hash(...arr) {
  let withHash, NotWithHash;
  for (i = 0; i < arr.length; i++) {
    arr[i] = "#";
    withHash = arr.filter((n) => n === "#");
    NotWithHash = arr.filter((n) => n !== "#").fill("-");
    // console.log(withHash.concat(NotWithHash).join(" "));
  }
}
hash(1, 2, 3, 4, 5, 6);

const makeKeyFromArray = (arr) => {
  let res = arr.reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
  let max = Math.max(...Object.values(res));
  let r = Object.keys(res).filter((v) => res[v] === max);
  return r;
};
// console.log(makeKeyFromArray([1, 2, 3, 4]));
// console.log(makeKeyFromArray(["chi", "girl", "chi", "a"]));

const startWithA = (str) => {
  let arr = [];
  let split = str.split(" ");
  // console.log(split);
  for (let i = 0; i < split.length; i++) {
    if (split[i][0] === "a") {
      arr.push(split[i]);
    }
  }
  let res = split.filter((v) => v.startsWith("a"));
  // console.log(res);
  // console.log(arr);
  // console.log(str.startsWith('a'))
};
startWithA("i want to be the way i am, u are ther talking");
var newArrau = Array.from({ length: 4 }, (x) => 4);
console.log(newArrau);

const NumPalindrome = (num) => {
  let stringReversal = num.toString().split("").reverse();
  let arr = "";
  for (let i = 0; i < num; i++) {
    for (let n = 0; n < stringReversal.length; i++)
      if (num[i] === stringReversal[i]) {
        arr += "isPalindrome";
      }
    arr += "NotPalindrome";
  }
  // console.log("arr", arr);
};
// NumPalindrome(22);

const returnProduct = (n1, n2) => {
  // let convertTopureNum1 = n1.toString();
  // let converToPureNum2 = n2.toString();

  let addNums = n1 + n2;
  console.log("addNums", addNums);
  let stringifyNums = addNums.toString().split("");
  let result = parseInt(stringifyNums[0]) * parseInt(stringifyNums[1]);
  let splitResult = result.toString().split("");
  if (splitResult.length === 1) {
    return parseInt(splitResult);
  } else {
    return returnProduct(splitResult[0], splitResult[1]);
  }
};
console.log(returnProduct(16, 28));

const sortArray = (n) => {
  let reducer = n.reduce((ac, cv) => {
    ac.concat(cv);
    return ac;
  }, []);
  // console.log("object", reducer);

  let reducers = n
    .toString()
    .split(",")
    .map((v) => v);
  console.log("redicer", reducers);
};

sortArray([
  [1, 2, 3, 4, "a", "b"],
  [6, "c", 5],
  [7, "d"],
  ["f", "e", 8],
]);
