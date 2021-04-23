const { wrap } = require("module");

let array = [1, 2, 3, 4, 5, 3, 2];

const red = (arr) => {
  return arr.reduce((acum, currentValue, index, array) => {
    return acum + currentValue;
  }, 0);
};
// console.log(red(array));
const addingObjectValues = (arr) => {
  return arr.reduce((acum, currentValue, index, array) => {
    return acum + currentValue.item;
  }, 0);
};
// console.log(addingObjectValues([{ item: 1 }, { item: 2 }, { item: 3 }]));
const flatterArr = (arr) => {
  let result = arr.reduce((acum, currentValue, index, array) => {
    return acum.concat(currentValue);
  }, []);
  return result;
};
console.log(
  flatterArr([
    [0, 1],
    [1, 3],
    [4, 5],
  ])
);
const removeDup = (arr) => {
  return arr.reduce((acum, cur) => {
    if (acum.indexOf(cur) === -1) {
      acum.push(cur);
    }
    return acum;
  }, []);
};
// console.log(removeDup(["1", "2", "3", "2", "1", "5", "6", "2"]));

const sumTarget = (arr, target) => {
  let arrs = [];
  let removeArr = arr.filter((a, b, c) => c.indexOf(a) === b);
  for (let a = 0; a < removeArr.length; a++) {
    for (let b = 0; b < removeArr.length; b++) {
      for (let c = 0; c < removeArr.length; c++) {
        if (a === b && a === c) {
          continue;
        }
        if (removeArr[a] + removeArr[b] + removeArr[c] === target) {
          arrs.push([removeArr[a], removeArr[b], removeArr[c]]);
        }
        if (removeArr[a] + removeArr[b] === target) {
          arrs.push([removeArr[a], removeArr[b]]);
        }
        break;
      }
    }
  }
  if (removeArr.includes(target)) {
    arrs.push([target]);
  }
  return arrs;
};
// console.log(sumTarget([1, 2, 3, 4, 5, 6, 7], 7));

const makeKeyAndValueWithReduce = (array) => {
  let res = array.reduce((wrapper, currentValue, currentIndex) => {
    // currentValue - wrapper;
    wrapper + currentValue;
    return wrapper;
  });
  return res;
};
// console.log(makeKeyAndValueWithReduce(["1", "2", "3", "4", "5", "6", "7"]));
