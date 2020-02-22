// alert('hello world')
/*var name = 'dog';
name === 'do' ? console.log('is true'): console.log( 'is not')
name === 'dog' ? console.log('is true'): console.log( 'is not')//returns the param u set 

console.log(name === 'dog')//returns a booleen object
var foo = '', bar = 2
alert(foo ? (bar ? 1:2) : 3)

var value = 2;
switch(value){
  case 1: console.log('am her');
  break;
  case 2: console.log('am second');
  break;
}
//switch



function animalSale(){
let animal = prompt('select animal', 'goat')
switch(animal){
  case 'dog': console.log('i will not run');
  break;
  case 'goat':console.log('this one i will kill it');
  break;
  case 'chicken': console.log('it good to eat');
  break;
  default: console.log('is not what am looking for')
}
}
animalSale()


function arrayLike(){
  const array = {0: 'value 0', 1: 'vaalue 1', length: 2 }
  var realArray = Array.from(array)
  console.log(realArray)
realArray.forEach( (value)=>{
console.log(value)
})
// array spreading
console.log([...realArray])
}
arrayLike(this)

// slice call
*/
// array reduce method
/*
var arr = [1,3,5,2];
const reducer = (a,b) => a + b
var c = arr.reduce(reducer)
 var ar = arr.reduce(function(a,b){
  console.log(a)
  return a + b
})
console.log(ar)

//aray flatter of objects into a single object
var arrObj = [
  {
    key: 'step 1', value: 1,
  },
  {
    key: 'step 2', value: 2,
  },
  {
    key: 'step 3', value: 3,
  }
];
var box = arrObj.reduce(function(obj, current)  {
obj[current.key] = current.value; 
return obj;
},{});
console.log(box)
//console.log(c)

var arrAssig = arrObj.reduce((obj, current) =>  
Object.assign(obj,{[current.key] : current.value})
,{});
console.log(arrAssig)

var usingSprd = arrObj.reduce((obj, current) =>  ({...obj,
[current.key] : current.value})
,{});
console.log(usingSprd)

var arr = [1,3,5,2, -10];
//get the array element mutiply it's self using forEach method
var double = arr.forEach(element => {
 // console.log(element)
  var r =  element * element;

console.log(r)

})
//get the array element mutiply it's self using Array.from method
var mutiply = Array.from(arr, x => x*x)
console.log(mutiply)

//console.log(Math.min.apply(Math, arr))
//console.log(Math.min(Math, arr))
var max = arr.reduce(function(a,b) {
return a > b ? a:b;
})
console.log(max)

var uniqueNum = [1,2,3,2,4,5];
var result = uniqueNum.reduce( (prev, number) =>{
  if(prev.indexOf(number) === -1){
    prev.push(number)
  }
  return prev;
},[])
console.log(result)


// moving into mapping of array
var aMapArray = ['boy', 'hello', 'world', 'manner', 'easy']
var ArrOfNum = [12,35,24,4,7,2,10]
const  mapping = function (){
let valueLength = aMapArray.map(function(value, index, arr){
  //console.log(value)
  //console.log(index)
  //console.log(arr)
  return value.length;
  
})
console.log(valueLength)
//loops tru the arrary and filter values that when divided by 2 still have remind
const filter = () => {
let fil = ArrOfNum.filter(function(n){
  return n % 2 !==0}) 
  
console.log(fil)
};
// returns obj values > than 1
var obj = arrObj.filter((values) =>{
return values.value > 1
})
console.log(obj)
filter();

var sort = () =>{
  var arr = ['a','c','e','b','d'];
  var arr2 = ['a','c','1','5','3','6','2','W','T','f','g','A','e','b','d'];
  var arr3 = ['i','me','you','head','group'];
  var arr4 = [2,7,9,10,5,23,25,0,4];
  var arrange = arr.sort();
 // console.log(arrange);
var locaCompare = arr2.sort((a, b) =>{
//console.log(b)
return a.localeCompare(b)//returns num > lowacase upacase(a,A,b,B,c,d,f,g,G,h)
})
console.log(locaCompare)
console.log(arr2.sort());//returns num > uppercas lower case

var srt4rmshortest = arr3.sort((a, b) => {// sort lowest string
  return a.length - b.length
})
console.log(srt4rmshortest);

var oddNumSort = arr4.sort((a,b) => {
  return (a & 1) - (b & 1) || a - b
})
console.log(oddNumSort)

var srt4rmHighest = arr3.sort((a, b) => {//sort from highest string
  return b.length - a.length
})
console.log(srt4rmHighest);

var numSort = arr4.sort((a,b) => {
  return b - a ;//reverse if u wahat to sort from lowest
})
console.log(numSort);

// Iteration array
}
sort()
}
mapping()

const arrIterator = () =>{

  var arr = [1,2,3,4,5];
  for(let i = arr.length -1; i > -1; i--){
    console.log(arr[i]);
  };
  var i = 0, length = arr.length;;
  for(; i < length;){
  console.log(arr[i])
  }
}
arrIterator()*/

function getConsonants(array, string1) {
  let arr = [];
  let strArr = string1.split("");
  array.map(v => {
    if (string1.toLowerCase().includes(v)) {
      arr.push(v);
    }
  });
  let res = strArr.filter(v => {
    return !arr.includes(v.toLowerCase());
  });
  console.log(res);
}
getConsonants(["a", "e", "i", "o", "u"], "chibUikE");

function Dog(name, color) {
  this.name = name;
  this.color = color;
}

Dog.prototype.bark = function() {
  console.log("whoo whoo");
};
let dog1 = new Dog("chikwakwa", "red");
let dog2 = new Dog("chikwakwa", "red");
// let dog3 = dog1.bark();
// console.log(dog1);
// console.log(dog2);
// console.log(dog3);
