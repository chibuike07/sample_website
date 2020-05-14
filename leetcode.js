const badVerion = n => {
  // didn't pass the test case
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
  return count;
};

// console.log(hammingDistance(2, 2));

var canConstruct = function(ransomNote, magazine) {
  // passed some test case
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
// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// console.log(rotate([-1, -100, 3, 99], 2));

var firstUniqChar = function(s) {
  let splitS = s.split("");
  let objectS = splitS.reduce((ac, cv) => {
    ac[cv] = (ac[cv] + 1) | 1;
    return ac;
  }, {});
  // console.log(objectS);
  let keys = Object.keys(objectS).filter(keys => objectS[keys] === 1);
  // console.log(keys);
  let foundValues = splitS.findIndex(
    firstIndexOfvalueEqualToOne => keys[0] === firstIndexOfvalueEqualToOne
  );
  return foundValues;
};
// console.log(firstUniqChar("leetcode"));
// console.log(firstUniqChar("loveleetcode"));

const isCousin = (root, x, y) => {
  let count = 0;
  for (let i = 0; i < root.length; i++) {
    if (x | y) {
      if (root[i + 1]) {
        count++;
      }
    }
  }
  if (count % 2 === 0) {
    return true;
  }
  return false;
};
// console.log(isCousin([1, 2, 3, null, 4, null, 5], 5, 4));
// console.log(isCousin([1, 2, 3, 4], 4, 3));
// console.log(isCousin([1, 2, 3, null, 4], 2, 3));

const transpose = arr => {
  let res = Object.keys(arr[0]).map(c => {
    let secod = arr.map(r => {
      return r[c];
    });
    return secod;
  });

  return res;
};
// console.log(
//   transpose([
//     [1, 2, 3, 4, 5],
//     [5, 4, 3, 2, 1],
//     [3, 2, 5, 3, 1]
//   ])
// );

const secondTranspose = arr => {
  let co = 0;
  let co2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let res = (co += arr[i][i]);
    // console.log(res);
    let b = (co2 += arr.reverse()[i][i]);
    // console.log(b);
    let diagonalDifferent = Math.abs(b - res);
    // console.log(diagonalDifferent);
  }
};

secondTranspose([
  [1, 2, 3],
  [5, 4, 3],
  [3, 2, 5]
]);

var intersect = function(nums1, nums2) {
  let arr = [];

  let res = nums2.filter(v => {
    if (nums1.includes(v)) arr.push(v);
  });
  // if (nums2.length < 2 || nums1.length < 2) {
  //   return arr.filter((a, b, c) => c.indexOf(a) === b);
  // }
  // arr.push(v)

  return arr;
};
// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
// console.log(intersect([1, 2, 2, 1], [2]));
// console.log(intersect([1, 2, 2, 1], [1, 2]));

const perfectSquare = nums => {
  let res = Math.sqrt(nums);
  let dot = ".";
  let string = res.toString();
  if (string.slice(1).includes(dot)) {
    return false;
  }
  return true;
};
// console.log(perfectSquare(16));
// console.log(perfectSquare(14));
// console.log(perfectSquare(100));

const findJudge = (trust, N) => {
  let judge = [];

  for (let c = 0; c < trust.length; c++) {
    if (trust[c][0] !== trust[c][1]) {
      if (trust[c][1] <= N) {
        if (trust.length === N) {
          let same = trust.every(v => v !== trust[0]);
          let answ = same === false ? -1 : N;
          return answ;
        }

        judge.push(trust[c][1]);
      }
    }
  }

  if (judge.length < 1) {
    return N;
  }
  let res = judge.reduce((a, b) => {
    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
  let max = Math.max(...Object.values(res));
  let found = Object.keys(res).filter(v => res[v] === max);

  if (found.length > 1) {
    return -1;
  } else {
    return found;
  }
};
// console.log(findJudge([[1, 2]], 2));
// console.log(
//   findJudge(
//     [
//       [1, 2],
//       [2, 3]
//     ],
//     3
//   )
// );
// console.log(
//   findJudge(
//     [
//       [1, 3],
//       [1, 4],
//       [2, 3],
//       [2, 4],
//       [4, 3]
//     ],
//     4
//   )
// );
// console.log(
//   findJudge(
//     [
//       [1, 3],
//       [2, 3],
//       [3, 1]
//     ],
//     3
//   )
// );
// console.log(findJudge([[]], 3));
// console.log(
//   findJudge(
//     [
//       [1, 2],
//       [3, 2],
//       [1, 3],
//       [4, 1],
//       [2, 1],
//       [2, 3],
//       [4, 2],
//       [3, 4],
//       [2, 4]
//     ],
//     4
//   )//it didnt pass this last one, it was able to pass 50 test cases
// );

const floodFill = (image, sr, sc, newColor) => {
  let arr = [];
  for (let i = 0; i < image.length; i++) {
    image[i].find((v, c) => {
      if (v === sr) {
        if (v === sc) {
          if (image[i][1] !== 0) {
            image[i].splice(c, v, newColor);
          }
          image[i][0] = newColor;
        }
      }
    });

    arr.push(image[i]);
  }

  return arr;
};
// console.log(
//   floodFill(
//     [
//       [1, 1, 1],
//       [1, 1, 0],
//       [1, 0, 1]
//     ],
//     1,
//     1,
//     2
//   )
// );
// console.log(
//   floodFill([
//     [0, 0, 0],
//     [0, 0, 0]
//   ])
// );
const removeKDigits = (num, k) => {
  let numArray = [...num];
  let arr = [];
  let max = Math.max(...numArray);
  let min = numArray.filter(v => v.indexOf(max) === -1);
  for (let i = 0; i < num.length; i++) {
    // console.log(max);
    if (num.length === k) {
      numArray.splice(i, k);
      return String(Math.abs(numArray.join("")));
    }
    if (num.length >= k) {
      if (num[0] >= k) {
        numArray.splice(i, k);
        if (Math.abs(numArray.join("") > num)) {
          return String(Math.abs(min.join("")));
        }
        return String(Math.abs(numArray.join("")));
      } else {
        numArray.splice(i + 1, k);
        return String(Math.abs(numArray.join("")));

        // console.log(String(Math.abs(numArray.join(""))));
      }
    }
  }
};
console.log(removeKDigits("1432219", 3));
console.log(removeKDigits("10200", 1));
console.log(removeKDigits("10", 2));
console.log(removeKDigits("112", 1));
console.log(removeKDigits("1173", 2));
console.log(removeKDigits("5337", 2));
