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
