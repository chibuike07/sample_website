let obj1 = {
  name: "chi",
  age: 9
};
let obj3 = { hair: "long", beard: true };
let obj4 = { age: 25, hair: "long", beard: true };
let obj2 = {
  name: "chi",
  age: 9
};
const compareObjevalues = (obj1, obj2) => {
  for (value in obj1) {
    if (obj1[value] === obj2[value]) {
      return "yes";
      //   return false;
    } else {
      return "no";
    }
  }
};
console.log(
  compareObjevalues(
    { hair: "long", beard: true },
    { age: 25, hair: "long", beard: true }
  )
);
console.log(
  compareObjevalues(
    {
      name: "chi",
      age: 9
    },
    {
      name: "chi",
      age: 9
    }
  )
);

const covertsComaValuesTo2DArr = str => {
  //   for (i = 0; i < str.length; i++) {
  //     if (str[i].includes("\n")) {
  //       res = str[i].split("\n");
  //       console.log(res);
  //     }
  //   }
  //   //   let arr = res;
};
covertsComaValuesTo2DArr("a,b\nc,d");

const levels = {
  level: {
    level2: {
      level3: "some thing"
    }
  }
};
const display = {
  name: "chime",
  greeting: "hi",
  age: 7
};
// Write a JavaScript program to target a given value in a nested JSON object, based on the given key
const targetObjectValueByASpecifiedKey = (data, message) => {
  for (let value in data) {
    if (value.includes(message)) {
      return data[message];
    } else if (typeof data[value] === "object") {
      return targetObjectValueByASpecifiedKey(data[value], message);
    }
  }
};
// console.log(targetObjectValueByASpecifiedKey(display, "name"));
// console.log(targetObjectValueByASpecifiedKey(levels, "level3"));
// Write a JavaScript program to converts a specified number to an array of digits.

const CovertSpecifiedNumToArrOfDigit = num => {
  let splitNum = num.toString().split("");
  let res = splitNum.map(v => parseInt(v));
  return res;
};
// console.log(CovertSpecifiedNumToArrOfDigit(123));
// console.log(CovertSpecifiedNumToArrOfDigit(1230));

// Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.
const filterSpecifiedValue = (array, num) => {
  return array.filter(value => !num.includes(value));
};
// console.log(filterSpecifiedValue([1, 2, 3, 4, 5, 4, 5, 4], 3, 5));
// console.log(filterSpecifiedValue(["a", "b", "c", "a"], "a", "b"));
// Write a JavaScript program to extract out the values at the specified indexes from a specified array
const extractValuesOfASpecifiedIndex = (arr, indexs) => {
  let indexArr = arr.filter((value, index) => indexs.includes(index));
  return indexArr;
};
console.log(extractValuesOfASpecifiedIndex([1, 2, 3, 4, 5], [2]));
console.log(
  extractValuesOfASpecifiedIndex(["a", "b", "c", "d", "e", "f"], [1, 3])
);

// Write a JavaScript program to remove the key-value pairs corresponding to the given keys from an object.
const RemovePropertyCorespondingTotheGivenKey = (obj, key) => {
  // let arrObj = Array.of(obj);
  for (let value in obj) {
    if (key.includes(value)) {
      delete obj[key];
      return obj;
    }
  }
};
console.log(
  RemovePropertyCorespondingTotheGivenKey(
    { name: "chi", age: 7, nick: "nickey" },
    ["name"]
  )
);

//Write a JavaScript program to create an array of key-value pair arrays from a given object
const createArrayOfKeyNdValuePairFromAGivenObject = array => {
  return array.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
};

console.log(
  createArrayOfKeyNdValuePairFromAGivenObject([
    ["a", 1],
    ["b", 2],
    ["c", 3]
  ])
);
// Write a JavaScript program to get a customized coalesce function that returns the first argument that returns true from the provided argument validation function
const returnFirstArgThatReturnTrue = (arr, num) => {
  return arr.find(v => v < num);
};
console.log(returnFirstArgThatReturnTrue([1, 2, 3, 4, 5], 3));

// Write a JavaScript program to remove falsey values from a given array. Go to the editor
const removeFalsey = (arr, target) => {
  return arr.filter(v => v < target);
};
console.log(removeFalsey([1, 2, 3, 4, 5], 3));
const removeFalse = (arr, target) => {
  return arr.filter(Boolean);
};
console.log(
  removeFalse([
    0,
    1,
    false,
    2,
    "",
    3,
    "a",
    "e" * 23,
    NaN,
    "s",
    34,
    { chi: "name" }
  ])
);
