var arra = ["chi", "girl", "chi", "a"];
let y = arra.reduce((a, b) => {
  a[b] = a[b] + 1 || 1;
  return a;
}, {});
console.log(y);

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

  console.log(obj);
  arr2.map(function(o, r) {
    obj2[o] = o.length;
  });
  console.log(obj2);
  // console.log(q)
  //testing the test on different element of array
};
makeKey();

var a = arr.every(function(v, i, a) {
  return v === 7;
});
console.log(a);
//arr destructuring replacing arr with the des
const destru = ([ball, come, look] = arr);
//destru = arr;
//console.log(ball === 1)
//console.log(ball === 2)

const skip = ([, b, c, , f] = arr);
//console.log(b,c,f);
var skip2 = ([, a, b, ...xd] = arr);
//console.log(a,b, xd)
function filters() {
  var arr = ["a", 1, 2, "1", "a", 1];
  var uniq = arr.filter(function(v, i, a) {
    // console.log(a)
    return a.indexOf(a) === i;
  });
  console.log(uniq);
}
filters();

var r = destru.reverse();
//console.log(r)
//Array cloning
var fClon = Array.from(destru);
var oClon = Array.of(...destru);
var aClon = [...destru];
var bClon = Array.prototype.slice.call(destru);
//console.log(fClon)
//console.log(oClon)
//console.log(aClon)
console.log(bClon);

let arrSpre = [..."123456"];
var sprd = arrSpre.map(n => parseInt(n));
console.log(sprd);

var j = arr.filter(v => v > 3);
console.log(j);

var filtered = [0, undefined, {}, null, "", true, 5];

var f = filtered.filter(Boolean);
console.log(f);
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
//console.log(wordsStartsWithA)
for (g of wordsStartsWithA) {
  //console.log(g)
}

//console.log(arr)
var p = arr.splice(1, 2);
var pa = arr.splice(2);
//console.log(p)
//console.log(pa)
var d = delete arr[3];
console.log(arr);

var newArrau = Array.from({ length: 5 }, (_, index) => Math.pow(index, 4));
console.log(newArrau);

for (y of arr.entries()) {
  console.log(y);
}
// remove the value of array
var v = arr.filter(val => {
  return val !== 5;
});
console.log(v);

function length(array) {
  let r = array.filter(function(b) {
    return b % 2 !== 0 && b % 3 !== 0 && b > !15;
  });
  return r;
}
console.log(length([1, 3, 4, 7, 21, 16, 12, 18, 19]));

var i = "am happy";
console.log(i);
function isarr(inpu) {
  //var input = document.createElement('input')
  if (Array.isArray(inpu)) {
    console.log("true");
  } else {
    console.log("false");
  }
  console.log(inpu);
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
  console.log(r);
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
  console.log(r);
}
searchArray(this);
function filterSearchCriteria() {
  let e = objSearch.filter(function(a, i) {
    //console.log(i)
    return a.age === 23;
  });
  console.log(e);
}
filterSearchCriteria(this);

function findIndex() {
  let r = objSearch.findIndex(function(a) {
    return a.name === "prince";
  });
  console.log(r);
}
findIndex(this);

function fndIndx(array, num) {
  let r = array.findIndex(function(a) {
    return num == a;
  });
  console.log(r);
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

console.log(Arrays_sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

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
  console.log(p);
}
differenceInArr([1, 2, 3], [100, 2, 10]);
differenceInArr([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]);
