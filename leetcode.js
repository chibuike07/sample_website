const badVerion = n => {
  let num = [1, 2, , 4, 5];
  let arr = [];
  let res = num.filter(r => {
    return String(n).includes(r);
  });
  return res[0];
};

// console.log(badVerion(2));

var numJewelsInStones = function(J, S) {
  let arr = [];
  let split = J.split("");
  let split2 = S.split("");
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < split2.length; j++) {
      if (split[i] === split2[j]) {
        arr.push(split[j]);
      }
    }
  }
  return arr.length;
};

// console.log(numJewelsInStones("aA", "aAAbbbbB"));
// console.log(numJewelsInStones("z", "ZZ"));
// console.log(numJewelsInStones("ebd", "bbb"));

const hammingDistance = (x, y) => {
  var resultStr = x ^ y;
  console.log(resultStr);
  let count = 0;
  while (resultStr > 0) {
    let res = (resultStr = resultStr & (resultStr - 1));
    count++;
  }
  console.log(count);
};

// hammingDistance(2, 4);

const ham = (x, y) => {
  let res = x;
  let count = 0;
  if (res > 0) {
    for (let i = 0; i <= res; i++) {
      res = res & (res - 1);
      count++;
    }
  }
  return count;
};
// console.log(ham(2, 3));

var canConstruct = function(ransomNote, magazine) {
  let arr = [];
  let i;
  for (i = 0; i < ransomNote.length; i++) {
    if (magazine.includes(ransomNote)) {
      arr.push(ransomNote[i]);
    }
    if (ransomNote.length >= 3) {
      let res = ransomNote[i];
      for (let i = 0; i < ransomNote.length; i++) {
        if (res.indexOf(ransomNote[i]) !== -1) {
          arr.push(ransomNote[i]);
        }
      }
      // console.log(arr);
      if (arr.length === 1) {
        return false;
      } else {
        return true;
      }
    }
  }
  if (magazine === "") {
    if (ransomNote === "") {
      return true;
    }
  }
  if (magazine.length === 1) {
    if (ransomNote === "") {
      return true;
    }
  }
  if (arr.length) {
    return true;
  } else {
    return false;
  }

  // return arr;
};
// console.log(canConstruct("a", "b"));
// console.log(canConstruct("aa", "ab"));
// console.log(canConstruct("aa", "aab"));
// console.log(
//   canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")
// );
// console.log(canConstruct("fihjjjjei", "hjibagacbhadfaefdjaeaebgi"));
// console.log(canConstruct("fffbfg", "effjfggbffjdgbjjhhdegh"));
// console.log(canConstruct("", ""));
// console.log(canConstruct("", "a"));

var findComplement = function(num) {
  var result = Math.pow(2, num.toString(2).length) - 1;
  return ~num & result;
};
// console.log(findComplement(3));

var rotate = function(nums, k) {
  let resa = nums.reverse();
  for (let i = 0; i <= resa.length; i++) {
    if (k) {
      let res = resa[k - 1];
      let splix = resa.splice(k, res).reverse();
      splix.unshift(...resa.reverse());
      return splix;
    } else {
      continue;
    }
  }
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([-1, -100, 3, 99], 2));

var firstUniqChar = function(s) {
  let splitS = s.split("");
  let objectS = splitS.reduce((ac, cv) => {
    ac[cv] = (ac[cv] + 1) | 1;
    return ac;
  }, {});
  let keys = Object.keys(objectS).filter(keys => objectS[keys] === 1);
  let foundValues = splitS.findIndex(
    firstIndexOfvalueEqualToOne => keys[0] === firstIndexOfvalueEqualToOne
  );
  return foundValues;
};
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
