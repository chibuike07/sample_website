const badVerion = (n) => {
  // didn't pass the test case
  let num = [1, 2, , 4, 5];
  let arr = [];
  let res = num.filter((r) => {
    return String(n).includes(r);
  });
  return res[0];
};

// console.log(badVerion(2));

var numJewelsInStones = function (J, S) {
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
  // console.log(resultStr);
  let count = 0;
  while (resultStr > 0) {
    let res = (resultStr = resultStr & (resultStr - 1));
    count++;
  }
  return count;
};

// console.log(hammingDistance(3, 2));

var canConstruct = function (ransomNote, magazine) {
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

var findComplement = function (num) {
  var result = Math.pow(2, num.toString(2).length) - 1;
  return ~num & result;
};

// console.log(findComplement(5));

var rotate = function (nums, k) {
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

var firstUniqChar = function (s) {
  let splitS = s.split("");
  let objectS = splitS.reduce((ac, cv) => {
    ac[cv] = (ac[cv] + 1) | 1;
    return ac;
  }, {});
  console.log(objectS);
  let keys = Object.keys(objectS).filter((keys) => objectS[keys] === 1);
  let foundValues = splitS.findIndex(
    (firstIndexOfvalueEqualToOne) => firstIndexOfvalueEqualToOne === keys[0]
  );
  // console.log(foundValues);
  return foundValues;
};
// console.log(firstUniqChar("lleetcode"));
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

const transpose = (arr) => {
  // console.log("Object.keys", Object.keys[arr[0]]);
  let res = Object.keys(arr[0]).map((c) => {
    let secod = arr.map((r) => {
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
//     [3, 2, 5, 3, 1],
//   ])
// );

const secondTranspose = (arr) => {
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
  [3, 2, 5],
]);

var intersect = function (nums1, nums2) {
  let arr = [];

  let res = nums2.filter((v) => {
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

const perfectSquare = (nums) => {
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
          let same = trust.every((v) => v !== trust[0]);
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
  let found = Object.keys(res).filter((v) => res[v] === max);

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
  let min = numArray.filter((v) => v.indexOf(max) === -1);
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
// console.log(removeKDigits("1432219", 3));
// console.log(removeKDigits("10200", 1));
// console.log(removeKDigits("10", 2));
// console.log(removeKDigits("112", 1));
// console.log(removeKDigits("1173", 2));
// console.log(removeKDigits("5337", 2));

const maxSubarraySumCircular = (A) => {
  let count = 0;
  let arr = [];
  let len = 4;
  for (let i = 0; i < A.length; i++) {
    let res = A.splice(i--, 2);
    // let secRes = A.splice(i--,3)
    arr.push(res);
    // return A
  }
  // console.log(arr);
};
// console.log(maxSubarraySumCircular([2, -1, 3, -2]));
// maxSubarraySumCircular([5, -3, 5]);
// maxSubarraySumCircular([3, -2, 2, -3]);
// maxSubarraySumCircular([-2,-3,-1]);

let obj = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

let obj2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: [1, 2, 3],
    },
  },
};
// ListNode {
//   val: 1,
//   next:
//    ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } } }
const oddEvenList = (head) => {
  let arr = [];
  let arrWrapEven = [];
  let arrWrapOdd = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      // console.log(i);
      arrWrapEven.push(arr[i]);
    } else {
      arrWrapOdd.push(arr[i]);
    }
    let result = arrWrapEven.concat(arrWrapOdd);
    // console.log(result);
  }
};
// console.log(oddEvenList(obj));
function printList(list) {
  let tmp = list;

  while (tmp) {
    // console.log(tmp.val);
    tmp = tmp.next;
  }
}

printList(obj2);

// console.log(oddEvenList(obj));
const myfun = () => {
  //measuring of the time execution for a function
  let result = [1, 2, 3, 4, 5];
  console.time("object");
  let start = Date.now();
  for (let i in result) {
    console.log(result[i]);
  }
  let end = Date.now();
  let res = end - start;
  console.log(res);
  console.timeEnd("object");
};
// myfun();

let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else {
    // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}
// console.log(sumSalaries(company));

const Anagram = (s, p) => {
  let splitArr = [...s];
  let arr = [];
  console.time("anagram");
  for (let i = 0; i < splitArr.length; i++) {
    let res = splitArr.splice(i--, p.length);
    console.log(res[0]);
    let result = res.sort().filter((a, b, c) => {
      if (p.indexOf(a) === b) {
        return c.join("") === p;
      }
    });
    if (result.length != 0) {
      arr.push(result);
    }
  }

  console.timeEnd("anagram");
  return arr;
};
// console.log(Anagram("cbaebabacd", "abc")); //[0, 6]
// console.log(Anagram("abab", "ab")); ////[0, 1, 2]

const findAnagram = (strOne, strTwo) => {
  let sortA = strOne.split("").sort();
  let sortB = strTwo.split("").sort();
  // console.log("sortA", sortA);
  // console.log("sortB", sortB);
};
findAnagram("LisTen12", "silent");

var checkInclusion = function (s1, s2) {
  let arr = [];
  let sortS1 = [...s1].sort();

  let splitS2 = [...s2];
  let splitS1 = [...s1];
  let reverse = splitS2.reverse();
  for (let i = 0; i < reverse.length; i++) {
    if (s1.indexOf(splitS2[i]) !== -1) {
      let res = splitS2.splice(i, s1.length);
      // console.log(res);
      let result = res.sort().join("") === sortS1.join("");
      return result;
    }
  }
};
// console.log(checkInclusion("ab", "eidbaooo"));
// console.log(checkInclusion("ab", "eidboaoo"));
// console.log(checkInclusion("c", "eidboacoo"));
// console.log(checkInclusion("adc", "dcda"));
// console.log(checkInclusion("a", "ab"));
// console.log(checkInclusion("abc", "cccccbabbbaaaa")); //test case failed

const frequencySort = (string) => {
  let conVerttoArray = [...string];
  let co = 0;
  let obj = {};
  let res = conVerttoArray.reduce((a, b, i) => {
    console.log();

    a[b] = a[b] + 1 || 1;
    return a;
  }, {});
  return res;
};
// console.log(frequencySort("tree"));
// console.log(frequencySort("cccaaa"));
// console.log(frequencySort("cacaca"));

var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime.length === endTime.length) {
      if (startTime.length === 1) {
        if (endTime[i] >= queryTime) {
          count++;
        }
      }
      if (endTime[i] - startTime[i] >= queryTime) {
        count++;
      }
    }
    // let res = endTime[i] - startTime[i] >= queryTime;
    console.log(res);
  }
  return count;
};
// console.log(busyStudent([1, 2, 3], [3, 2, 7], 4));
// console.log(busyStudent([1, 1, 1.1], [1, 3, 2, 4], 7));
// console.log(busyStudent([4], [4], 4));
// console.log(busyStudent([4], [4], 5));
// console.log(busyStudent([17], [86], 39));
// console.log(
//   busyStudent(
//     [9, 8, 7, 6, 5, 4, 3, 2, 1],
//     [10, 10, 10, 10, 10, 10, 10, 10, 10],
//     5
//   )
// );

var arrangeWords = function (text) {
  console.time("word");
  let splitText = text.split(" ");
  let wordWrapper = "";
  let makeUpperCase;
  let sortByLength = splitText.sort((a, b) => a.length - b.length);
  const [first, ...others] = sortByLength;
  if (first[1]) {
    makeUpperCase = first[0].toUpperCase() + first.substr(1);
  } else {
    makeUpperCase = first[0].toUpperCase();
  }
  let makeLowerCase = others.join(" ").toLowerCase();
  wordWrapper += `${makeUpperCase} ${makeLowerCase}`;
  console.timeEnd("word");
  return wordWrapper;
};

// console.log(arrangeWords("To be or not to be"));
// console.log(arrangeWords("Keep calm and code on"));
// console.log(arrangeWords("Leetcode is cool"));
// console.log(arrangeWords("You and i"));
// console.log(arrangeWords("The fox runs"));

const powOfFour = (num) => {
  console.log(Math.pow());
  return Math.log2(num) % 1 === 0;
};
// console.log("powOfFour", powOfFour(2));
