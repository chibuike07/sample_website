var arra = ["chi", "girl", "chi", "a"];
let y = arra.reduce((a, b) => {
  a[b] = a[b] + 1 || 1;
  return a;
}, {});
// console.log(y);

//let arr = [1,2,3,4,2,3,2,1];
var arr = [1, 2, 3, 2, 1, 6, 5];
var obj = {}; //assigning an object
var arr2 = ["chi", "you", "me"];
obj2 = {};
var makeKey = function() {
  // if(arr instanceof Array){
  arr.forEach(function(v, i) {
    //looping each element in the array
    //assigning a condition for each element
    if (!obj[v]) {
      obj[v] = [i]; //pushing element length per each
    } else {
      obj[v].push(i);
    }
  });
  //loop inside the obj to extract the key of the array and making the length of each element its value
  Object.keys(obj).map(function(v) {
    obj[v] = obj[v].length; //
  });

  // console.log(obj);
  arr2.map(function(o, r) {
    obj2[o] = o.length;
  });
  // console.log(obj2);
  // console.log(q);
  //testing the test on different element of array
};
makeKey();

var a = arr.every(function(v, i, a) {
  return v === 7;
});
// console.log(a);
//arr destructuring replacing arr with the des
const destru = ([ball, come, look] = arr);
//destru = arr;
// console.log(ball === 1)
// console.log(ball === 2)

const skip = ([, b, c, , f] = arr);
// console.log(b,c,f);
var skip2 = ([, a, b, ...xd] = arr);
// console.log(a,b, xd)
function filters() {
  var arr = ["a", 1, 2, "1", "a", 1];
  var uniq = arr.filter(function(v, i, a) {
    // console.log(a)
    return a.indexOf(a) === i;
  });
  // console.log(uniq);
}
filters();

var r = destru.reverse();
// console.log(r)
//Array cloning
var fClon = Array.from(destru);
var oClon = Array.of(...destru);
var aClon = [...destru];
var bClon = Array.prototype.slice.call(destru);
// console.log(fClon)
// console.log(oClon)
// console.log(aClon)
// console.log(bClon);

let arrSpre = [..."123456"];
var sprd = arrSpre.map(n => parseInt(n));
// console.log(sprd);

var j = arr.filter(v => v > 3);
// console.log(j);

var filtered = [0, undefined, {}, null, "", true, 5];

var f = filtered.filter(Boolean);
// console.log(f);
function startWithA(str) {
  if (str && str[0].toLowerCase() === "a") {
    return true;
  }
  return false;
}
var str =
  "i love my babay and she worth my mone and a  big applause with still accuse cases some accordinf him it well";
var strLop = str.split(" ");
var wordsStartsWithA = strLop.filter(startWithA);
console.log(wordsStartsWithA);
for (g of wordsStartsWithA) {
  // console.log(g)
}

// console.log(arr)
var p = arr.splice(1, 2);
var pa = arr.splice(2);
// console.log(p)
// console.log(pa)
var d = delete arr[3];
// console.log(arr);

var newArrau = Array.from({ length: 5 }, (_, index) => Math.pow(index, 4));
// console.log(newArrau);

for (y of arr.entries()) {
  // console.log(y);
}
// remove the value of array
var v = arr.filter(val => {
  return val !== 5;
});
// console.log(v);

function length(array) {
  let r = array.filter(function(b) {
    return b % 2 !== 0 && b % 3 !== 0 && b > !15;
  });
  return r;
}
// console.log(length([1, 3, 4, 7, 21, 16, 12, 18, 19]));

var i = "am happy";
// console.log(i);
function isarr(inpu) {
  //var input = document.createElement('input')
  if (Array.isArray(inpu)) {
    // console.log("true");
  } else {
    // console.log("false");
  }
  // console.log(inpu);
}
isarr({});

var arrK = ["name", "state", "age"];
var arrV = ["james", "lagos", "20"];
function merge2ArrayAsKeyValuePair() {
  let r = arrV.reduce(function(result, field, index) {
    // console.log(v)
    result[arrK[index]] = field;
    return result;
  }, {});
  // console.log(r);
}

merge2ArrayAsKeyValuePair();
var objSearch = [
  { name: "pau", age: 23 },
  { name: "james", age: 15 },
  { name: "frank", age: 12 },
  { name: "peter", age: 15 },
  { name: "willy", age: 12 },
  { name: "prince", age: 23 }
];
function searchArray() {
  let r = objSearch.find(function(v) {
    return v.age === 12;
  });
  // console.log(r);
}
searchArray(this);
function filterSearchCriteria() {
  let e = objSearch.filter(function(a, i) {
    // console.log(i)
    return a.age === 23;
  });
  // console.log(e);
}
filterSearchCriteria(this);

function findIndex() {
  let r = objSearch.findIndex(function(a) {
    return a.name === "prince";
  });
  // console.log(r);
}
findIndex(this);

function fndIndx(array, num) {
  let r = array.findIndex(function(a) {
    return num == a;
  });
  // console.log(r);
}
fndIndx([1, 2, 3, 4, 5, 6, 7], 3);
//fndIndx([1,2,3,4,5,6,7,'paul'], 8)
//fndIndx([1,2,3,4,5,6,7,'chi'], 'chi')
/*
var array = Array();
var count = 1;
var para = document.getElementById('para');
function inputValue(){
    form = document.getElementById('form')
    array[count] = document.getElementById('input').value;
alert('element: ' + array[count] + ' added at index ' +  [count])
count++
    input.value = ''
   //array.push(input)
   
   form.reset()
}

function display(){
    for(let a = 1; a <array.length; a++){
   para.innerHTML += ('<li>' + 'element ' + a + ' = ' +  array[a] + ' \n'+ '</li>')
        
    }
}*/

function Arrays_sum(array1, array2) {
  var result = [];
  var ctr = 0;
  var x = 0;

  if (array1.length === 0) return "array1 is empty";
  if (array2.length === 0) return "array2 is empty";

  while (ctr < array1.length && ctr < array2.length) {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

  if (ctr === array1.length) {
    for (x = ctr; x < array2.length; x++) {
      result.push(array2[x]);
    }
  } else {
    for (x = ctr; x < array1.length; x++) {
      result.push(array1[x]);
    }
  }
  return result;
}

// console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

function differenceInArr(array1, array2) {
  var temp = [];
  array1 = String(array1)
    .split(",")
    .map(num => num);
  array2 = String(array2)
    .split(",")
    .map(num => num);

  for (i in array1) {
    if (array2.indexOf(array1[i]) === -1) {
      temp.push(array1[i]);
    }
  }

  for (r in array2) {
    if (array1.indexOf(array2[r]) === -1) {
      temp.push(array2[r]);
    }
  }
  let p = temp.sort(function(a, b) {
    a - b;
  });
  // console.log(p);
}
differenceInArr([1, 2, 3], [100, 2, 10]);
differenceInArr([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]);

const romanFiqure = (romanObject, num) => {
  // declaring of variables
  let lengthOf1StrRomanHolder = "";
  let lengthOf2StrRomanHolder = "";
  let lengthOf3StrRomanHolder = "";
  let numToString = num.toString(); //convert num to string
  let lengthOf2ArrWrapper = [];
  let lengthOf3ArrWrapper = [];
  let lengthOf4ArrWrapper = [];
  let lengthOf4IntStrHolder = "";

  for (let keys in romanObject) {
    //mapping through the RomanObject
    if (numToString.length === 1) {
      //condition if the String num length is 1
      lengthOf1StrRomanHolder = Object.keys(romanObject).filter(
        // getting the keys to the obj and filter the values to get the key that matches the string nums and having a stringWrapper to hold it
        v => romanObject[v] === Number(numToString.substr(0.1))
      );
    } else if (numToString.length === 2) {
      //condition if the String num length is 2
      let res = numToString.split(""); //convert to stringNum to an array
      lengthOf2ArrWrapper.push(res[0] + 0, res[1]); //adding 0 to the first array to be able to get 10, 20 and they kind that will match the ObjectKeys and add the secValue to it for lookup as well
      let pure = lengthOf2ArrWrapper.map(v => parseInt(v)); //converting the strNum Value to an integer bcos the values are to be compared with an integer only
      if (pure.includes(romanObject[keys])) {
        //check if the values of the romanObject includes our nums values
        lengthOf2StrRomanHolder = [...keys, ...lengthOf2StrRomanHolder];
        // return;
      }
    } else if (numToString.length === 3) {
      //if is length of 3 like 500 and 219, 316 and so on
      let res = numToString.split(""); //converting to an array
      lengthOf3ArrWrapper.push(res[0] + 0 + 0, res[1] + 0, res[2]); //adding 00 to the first array to be able to get 100, 200 and they kind that will match the ObjectKeys and add does the same to the secValue and third for look up
      let integ = lengthOf3ArrWrapper.map(v => parseInt(v)); //convert to integer
      if (integ.includes(romanObject[keys])) {
        // checking for ones included in the arrintegerNums
        lengthOf3StrRomanHolder = [...keys, ...lengthOf3StrRomanHolder]; //sprind the keys and adding the spread strHoder
      }
    } else if (numToString.length === 4) {
      let res = numToString.split("");
      lengthOf4ArrWrapper.push(
        res[0] + 0 + 0 + 0,
        res[1] + 0 + 0,
        res[2] + 0,
        res[3]
      );
      let lengthOf4Int = lengthOf4ArrWrapper.map(v => parseInt(v));
      if (lengthOf4Int.includes(romanObject[keys])) {
        lengthOf4IntStrHolder = [...keys, ...lengthOf4IntStrHolder];
      }
    }
  }
  //printing the values to the console
  console.log(...lengthOf1StrRomanHolder);
  console.log(...lengthOf2StrRomanHolder);
  console.log(...lengthOf3StrRomanHolder);
  console.log(...lengthOf4IntStrHolder);
  // console.log();
};

romanFiqure(
  {
    i: 1,
    ii: 2,
    iii: 3,
    iv: 4,
    v: 5,
    vi: 6,
    vii: 7,
    viii: 8,
    ix: 9,
    x: 10,
    xx: 20,
    xxx: 30,
    XL: 40,
    l: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
    k: 2000
  },
  34
);

function romanize(num) {
  var lookup = {
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
      I: 1
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
// romanize()
