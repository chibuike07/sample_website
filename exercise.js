var i = "am happy";
console.log(i);
// Write a JavaScript function to check whether an `input` is an array or not
function isarr(inpu) {
  //var input = document.createElement('input')
  if (inpu instanceof Array) {
    console.log("true");
  } else {
    console.log("false");
  }
  return inpu;
}
console.log(isarr([5]));
//Write a JavaScript function to clone an array.
var array = [1, 3, 4, 5];
console.log(Array.from(array));
//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
function finde(index) {
  for (let i = 0; i < index.length; i++) {
    return array[0];
  }
  // return index;
}
console.log(finde([[1, 3, 4, 5]]));
console.log(finde([[4, 6, 4, 5]]));

//Write a simple JavaScript program to join all elements of the following array into a string
function joins(array) {
  let ar = array.join("");
  //let r = ar.toString()
  return ar;
}
console.log(joins(["u", "re", "all", "i", "want"]));
console.log(joins(["u", "re", "u", "dy", "ok"]));

function divisible(a) {
  return a % 2 == 0;
}

/*const num=prompt('add number', '025468');
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));*/
//sorting array
function sot(arr) {
  let r = arr.sort((a, b) => {
    return a - b;
  });
  return r;
}
console.log(sot([3, 8, 7, 6, 5, -4, 3, 2, 1]));

//Write a JavaScript program to find the most frequent item of an array
ar = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let g = ar.reduce(function(a, b) {
  a[b] = a[b] + 1 || 1;

  return a;
}, {});
console.log(g);

let max = Math.max(...Object.values(g));
let keyFre = Object.keys(g).filter(k => g[k] === max);
console.log(max);
console.log(keyFre + ": " + max);

//Write a JavaScript program which accept a string as input and swap the case of each character.
//var words = prompt();
/* let str = prompt();
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
      
    for(i =0; i < str.length;i++){
       if(UPPER.indexOf(str[i]) !== -1){
           result.push(str[i].toLowerCase())
       }else if(LOWER.indexOf(str[i]) !== -1){
           result.push(str[i].toUpperCase())
       }
       else result.push(str[i])
    }
console.log(result.join(''))
*/

let myArr = [];
function theArray(arr) {
  myArr = arr.filter(function(a) {
    return a % 2 == 0 && a % 3 == 0;
  });
  return myArr;
}
console.log(theArray([5, 7, 18, 36, 17]));
//Write a JavaScript program which prints the elements of the following array.
var arr = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7]
];
for (let a in arr) {
  console.log("row " + a);
  for (j in arr[a]) {
    console.log(arr[a][j]);
  }
}
//Write a JavaScript program to compute the sum and product of an array of integers.
var arrs = [6, 5, 7, 18, 9, 26, 7, 12];
for (i in arrs) {
  let s = arrs[i] % 2 == 0 && arrs[i] % 3 == 0;
}
console.log(arrs);
function theArray(arr) {
  for (i = 1; i < arr.length; i++) {
    let s = arr[i] % 2 == 0 && arr[i] % 3 == 0;

    console.log(s);
  }
  return arr;
}
theArray([6, 5, 7, 18, 9, 26, 7, 12]);
//Write a JavaScript program to compute the sum and product of an array of integers
function sumProd(arr) {
  var p = 1;
  var s = 0;
  for (let i = 0; i < arr.length; i++) {
    p = p * arr[i];
    s = s + arr[i];
  }
  console.log("sum of the ar is :" + s + " product of the array is: " + p);
}
sumProd([1, 2, 3, 4, 5, 6]);
//Write a JavaScript program to remove duplicate items from an array
function removeDup(array) {
  let dup = array.reduce(function(a, b) {
    if (a.indexOf(b) == -1) {
      a.push(b);
    }
    return a;
  }, []);
  console.log(dup);
}
removeDup([1, 2, 3, 2, 1, 4, 5]);

color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//We have the following arrays
//color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
//Write a JavaScript program to display the colors in the following way :
//"1st choice is Blue ."
//"2nd choice is Green."
//"3rd choice is Red."

function colorPos() {
  for (c = 1; c < color.length; c++) {
    console.log(c + " choice is " + color[c]);
  }
}
colorPos();
function findLeapYear(st_yr, end_yr) {
  var year_range = [];

  for (i = st_yr; i < end_yr.length; i++) {
    year_range.push(i);
  }
  var new_array = [];
  year_range.forEach(function(year) {
    if (test_leap(year)) new_array.push(year);
  });
  return new_array;
}
function test_leap(year) {
  if (
    (year % 4 === 0 && year % 100 !== 0) ||
    (year % 100 === 0 && year % 400 === 0)
  ) {
    return year;
  } else {
    return false;
  }
}

console.log(findLeapYear(2000, 2012));
//Write a JavaScript program to shuffle an array.
function shuffleArr(array) {
  var ctr = array.length;
  var temp, index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;

    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
}
console.log(shuffleArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

var arrCheck = [1, 2, 3, 4, 5, 7, 8, 9];

function searchV() {
  //var form = document.querySelector('form');
  var inp = document.querySelector("input").value;
  for (i = 0; i < arrCheck.length; i++) {
    if (inp.indexOf(arrCheck[i])) {
      console.log(arrCheck[i] + " " + i);
    }
  }
  //console.log(searchAnwser)
}
function flatter(array) {
  let u = array
    .toString()
    .split()
    .map(element => element);
  console.log(u);
  let w = String(array)
    .split(",")
    .map(element => element);
  console.log(w);
}

flatter([1, [2], [3, [[4]]], [5, 6]]);

function computeUnionOfTwoArray(array, array2) {
  let d = array.concat(array2); //merge the two array
  let dup = d.reduce(function(a, b) {
    //remove duplicate values
    if (a.indexOf(b) == -1) a.push(b);
    return a;
  }, []);
  console.log(dup);

  let c = dup.sort(function(a, b) {
    //sort fro low to high
    return a - b;
  });
  console.log(c);

  var r = 0;
  for (v in c) {
    // making the compute
    r += c[v];
  }
  console.log(r);
}
computeUnionOfTwoArray([1, 2, 3], [100, 2, 1, 10]); //array and array2
computeUnionOfTwoArray([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]); //array and array2

function removeNonValueAndZero(array) {
  const a = array.filter(function(r) {
    return (
      r !== 0 &&
      r !== NaN &&
      r !== false &&
      r !== "" &&
      r !== undefined &&
      r !== null
    );
  });

  console.log(a);

  let f = array.filter(Boolean);
  console.log(f);
}
removeNonValueAndZero([NaN, 0, 15, false, -22, "", undefined, 45, null]);

var library = [
  {
    author: "bill gate",
    title: "information technonlog"
  },
  {
    author: "william",
    title: "woman in her pride"
  },
  {
    author: "frankin",
    title: "boxer"
  }
];
function SortByTitleValue(x, y) {
  if (x.title < y.title) return -1;
  if (x.title < y.title) return 1;
  return 0;
}
console.log(library.sort(SortByTitleValue));

function myfun() {
  let r = library.sort(function(a, b) {
    return a - b;
  });
  console.log(r);
}
myfun();
function removeSpecificElement(array) {
  let a = array.indexOf(4);
  b = array.slice(1, 4);

  console.log(b);
}
removeSpecificElement([2, 5, 9, 6], 5);

function findSpecificElement(array, index) {
  let r = array.some(function(a) {
    return a == index;
  });
  console.log(r);
}
findSpecificElement([2, 5, 9, 6], 5);

function getRandomElementFromArray(array) {
  let b = Math.floor(Math.random() * array.length);
  let c = array[b];
  console.log(c);
}
getRandomElementFromArray([1, 2, 3, 4, 5]);

function fillElementIntoArray(num, filledValue) {
  let a = [1, 2, 3, 4, 5, 6];
  let b = a.fill(filledValue, num);
  console.log(b);
}
fillElementIntoArray(2, "pass");

function fillArray(n, val) {
  let r = Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
  console.log(r);
}
fillArray(6, 5);

function fillTextValue(n, val) {
  let r = Array.apply(null, Array(n)).map(String.prototype.valueOf, val);
  console.log(r);
}
fillTextValue(4, "chi");

function fillWithGeneratedInteger(start, end) {
  var arr = new Array(end);
  for (i = 0; i < end; i++, start++) {
    arr[i] = start;
  }
  console.log(arr);
}
fillWithGeneratedInteger(3, 7);
fillWithGeneratedInteger(-6, 4);
fillWithGeneratedInteger(-4, 7);

function highestNumPosition(array) {
  // write you code here...
  var arrayResult = [];
  var i;
  for (i = 0; i < array.length; i++) {
    // console.log(i)
    arrayResult.push(Math.max(...array[i]));
  }
  let rMax = Math.max(...arrayResult);
  let findMaxIndex = arrayResult.indexOf(rMax);
  let findRowIndex = array[findMaxIndex].indexOf(rMax);
  let joinRowPosition = [findMaxIndex, findRowIndex];
  console.log(joinRowPosition);
}
highestNumPosition([
  [66, 3, 9],
  [1, 8, 98],
  [7, 9, 7]
]);
highestNumPosition([
  [3, 5, 2],
  [55, 6, 22],
  [54, 64, 110]
]);

var maxNum = [];
var finalNum = [];
function maxElement(array) {
  if (array.length === 0) {
    return [0, 0];
  }
  for (i = 0; i < array.length; i++) {
    maxNum.push(Math.max(...array[i]));
  }
  let newMax = Math.max(...maxNum);
  let positionOne = maxNum.indexOf(newMax);
  let positionTwo = array[positionOne].indexOf(newMax);
  finalNum.push(positionOne, positionTwo);
  console.log(finalNum);
}
maxElement([
  [66, 3, 9],
  [1, 8, 98],
  [7, 9, 7]
]);

//letterSwitch
var str = "chibuike";
var shuffle = str
  .split("")
  .sort(function() {
    return 0.5 - Math.random();
  })
  .join("");
//console.log(shuffle)

function shuffleString(inputChar, actualChar, changechar) {
  let shuffle = changechar
    .split("")
    .sort(function() {
      return 0.5 - Math.random();
    })
    .join("");
  if (typeof shuffle && inputChar && actualChar !== String()) {
    if (
      shuffle.length > inputChar.length &&
      shuffle.length === actualChar.length &&
      actualChar.indexOf(inputChar) == -1
    ) {
      console.log(shuffle.slice(0, inputChar.length));
    } else {
      console.log((shuffle = -1));
    }
  }
}

shuffleString("we", "wkeap", "mgren");
shuffleString("america", "atvmeprciqz", "mgrenskilop");

function longestString(string) {
  var wrap = "";
  var str = string.split(/\s+/g);
  let result = str.map(n => n.length);
  let maxLen = Math.max(...result);
  let maxValue = str.filter(n => n.length === maxLen);
  for (i = 0; i < maxValue.length; i++) {
    wrap += maxValue[i];
  }
  return wrap;
}

console.log(longestString("i will be there"));
console.log(longestString("web development tutorial"));

function countVowelSound(string) {
  var str = string.split("");
  var vSound = "aoiueAOIUE";
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vSound.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
console.log(countVowelSound("the quick brown fox"));
console.log(countVowelSound("chibuike"));

function primeNum(array) {
  let result = array.filter(n => n % 2 === 1);
  return result;
}
console.log(primeNum([1, 3, 4, 5, 6, 8, 37, 9, 10]));
console.log(primeNum([5, 20, 7, 23, 25, 12, 30]));

function expBase(base, exponential) {
  return Math.floor(Math.pow(base, exponential));
}
console.log(expBase(2, 3));
console.log(expBase(3, 5));

function removeDuplication(string) {
  var emptyString = "";
  for (i = 0; i < string.length; i++) {
    if (emptyString.indexOf(string.charAt(i)) == -1) {
      emptyString += string[i];
    }
  }
  console.log(emptyString);
}
removeDuplication("chimeechibbuike");
removeDuplication("helo i love you o");

function getNonRepeated(string) {
  var result = "";
  var ctr = 0;
  for (i = 0; i < string.length; i++) {
    ctr = 0;
    for (j = 0; j < string.length; j++) {
      if (string[i] === string[j]) {
        ctr += 1;
      }
    }
    if (ctr < 2) {
      result = string[i];
      break;
    }
  }
  console.log(result);
}

getNonRepeated("abacbddec");
getNonRepeated("chibuike");

function randomNum(array) {
  let shuffle = array
    .sort(function() {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(shuffle);
}
randomNum([1, 2, 3, 4, 5]);

function randomString(array) {
  let shuffle = array
    .split("")
    .sort(function() {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(shuffle);
}
randomString("chibuike");

function letterSpring(string, letter) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (letter.indexOf(string[i]) !== -1) {
      //str += string[i]
      count++;
    }
  }
  console.log(count);
}
letterSpring("chibuike", "i");

function sortAlgorithm(array) {
  let result = array.sort(function(a, b) {
    return b - a;
  });
  console.log(result);
}
sortAlgorithm([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

function arri(array) {
  let res = array.filter((a, b, c) => c.indexOf(a) !== b).sort();
  // console.log(res.length);
  if (res.length % 2 == 0) {
    // console.log("the length of dupliate element is an odd number");
    return false;
  }
  // console.log("the length of duplicate number is even");
}
arri([1, 2, 3, 2, 1, 4, 4]);
let counta = {};
function sorta(...array) {
  let sortedArr = array.sort((a, b) => a - b);
  sortedArr.forEach(value => {
    counta[value] = (counta[value] || 0) + 1;
  });
  // console.log(counta);
  let arrOfObj = Array.of(counta);
  console.log(arrOfObj);
  let result = arrOfObj
    .map(object => Object.keys(object).find(value => object[value] % 2 !== 0))
    .join("");
  return result;
}

// console.log(sorta(7, 7, 7, 1, 1, 7, 1, 3, 3, 7, 7, 3, 3, 3));

function pairs(n, ar) {
  let arr = ar.sort();
  let arrPairs = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] === arr[i + 1]) {
      arrPairs.push(arr[i]);
      arr.splice(i, 1);
      n--;
    }
  }
  return arrPairs.length;
  // return arr.length;
}
let a = pairs(14, [8, 2, 3, 5, 4, 5, 4, 3, 1, 1, 1, 1, 1, 1, 4]);
console.log(a);

function hash(...arr) {
  let withHash, NotWithHash;
  for (i = 0; i < arr.length; i++) {
    arr[i] = "#";
    withHash = arr.filter(n => n === "#");
    NotWithHash = arr.filter(n => n !== "#").fill("-");
    // console.log(withHash.concat(NotWithHash).join(" "));
  }
}
hash(1, 2, 3, 4, 5, 6);

function romanFigure(matches, ...array) {
  let str = "i,ii,iii,iv,v,vi,vii,viii,ix,x";
  let strArr = str.split(",");
  for (let i in strArr) {
    if (matches == array[i]) {
      // console.log(strArr[i]);
    }
  }
}
romanFigure(3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function arr(...array) {
//   let res = array.filter((a, b, c) => c.indexOf(a) !== b).sort();
//   // console.log(res.length);
//   if (res.length % 2 == 0) {
//     // console.log("the length of dupliate element is an odd number");
//     return false;
//   }
//   // console.log("the length of duplicate number is even");
// }
// arr(1, 2, 3, 2, 1, 4, 4);
// let counta = {};
// function sorta(...array) {
//   let sortedArr = array.sort((a, b) => a - b);
//   sortedArr.forEach(value => {
//     counta[value] = (counta[value] || 0) + 1;
//   });
//   // console.log(counta);
//   let arrOfObj = Array.of(counta);
//   console.log(arrOfObj);
//   let result = arrOfObj
//     .map(object => Object.keys(object).find(value => object[value] % 2 !== 0))
//     .join("");
//   return result;
// }

// // console.log(sorta(7, 7, 7, 1, 1, 7, 1, 3, 3, 7, 7, 3, 3, 3));

// function pairs(n, ar) {
//   let arr = ar.sort();
//   let arrPairs = [];
//   for (let i = 0; i < n; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arrPairs.push(arr[i]);
//       arr.splice(i, 1);
//       n--;
//     }
//   }
//   return arrPairs.length;
//   // return arr.length;
// }

// let a = pairs(14, [8, 2, 3, 5, 4, 5, 4, 3, 1, 1, 1, 1, 1, 1, 4]);

// function hash(...arr) {
//   let withHash, NotWithHash;
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = "#";
//     withHash = arr.filter(n => n == "#");
//     NotWithHash = arr.filter(n => n !== "#").fill("-");
//     // console.log(withHash.concat(NotWithHash).join(" "));
//   }
// }
// hash(1, 2, 3, 4, 5, 6);

// function num(name) {
//   let arr = [];
//   for (let i = 1; i <= name; i++) {
//     arr.push(i);
//   }
//   // console.log(arr);
//   for (i = 0; i < arr.length; i++) {
//     arr[i] = "#";
//     withHash = arr.filter(n => n == "#");
//     NotWithHash = arr.filter(n => n !== "#");
//     console.log(withHash.join(""));
//   }
// }
// num(5);
// // chyke 08138242433
// function romanFigure(matches, ...array) {
//   let str = "i,ii,iii,iv,v,vi,vii,viii,ix,x";
//   let strArr = str.split(",");
//   for (let i in strArr) {
//     if (matches == array[i]) {
//       // console.log(strArr[i]);
//     }
//   }
// }
// romanFigure(3, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// let sum = 0;
// // function sumTo(num) {
// //   for (let i = 1; i <= num; num--) {
// sum += num;
// }
// console.log(sum);
// }
// sumTo(4);
// function factorial(n) {
// return n != 1 ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(5));

// function fib(n) {
// return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// fib(77); // will be extremely slow!

function primeNum(...arr) {
  let res = arr.filter(n => {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) return false;
    }
    return true;
  });
  return res;
}

function matrix(m, n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push(new Array(m).fill(1));
  }
  return result;
}
// console.log(matrix(3, 3));

function matrixNum(a) {
  let x1 = 0;
  let x2 = 0;
  let aLen = a.length;
  a.map((n, i) => {
    x1 += a[i][i];
    x2 += a.reverse()[i][i];
  });
  let res = Math.abs(x1 - x2);
  // console.log(res);
}
matrixNum([
  [2, 3, 1],
  [3, 4, 7],
  [7, 2, 8]
]);

/* 
  Diagonal Difference Solution.
  sample matrix = [[1,2,3], [4,5,6], [7,8,9]]
*/

function diagonalDifference(matrix) {
  // length of input matrix.
  const length = matrix.length;
  let diagonal1 = 0,
    diagonal2 = 0;
  let a = matrix;
  // Looping through the array and summing the diagonals.
  for (let i = 0; i < length; i++) {
    // Calculating the primary diagonal.
    diagonal1 += matrix[i][i];
    // Reversing the second dimension of array to calculate secondary diagonal.
    diagonal2 += matrix.reverse()[i][i];
    // console.log(matrix.reverse()[i])
  }
  // return absolute difference value.
  // console.log(Math.abs(diagonal1 - diagonal2));
}
diagonalDifference([
  [2, 3, 1],
  [3, 4, 7],
  [7, 2, 8]
]);

// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0

// We calculate the following

// hourglass values:

// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18

// Our highest hourglass value is

// from the hourglass:

// 0 4 3
//   1
// 8 6 6

function fillArr() {
  let res = Array.from({ length: 5 }, x => (x = "chi"));
  console.log(res);
}
fillArr();
