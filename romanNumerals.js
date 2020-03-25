const romanFiqure = (romanObject, num) => {
  // declaring of variables
  let lengthOf1StrRomanHolder = "";
  let lengthOf2StrRomanHolder = "";
  let lengthOf3StrRomanHolder = "";
  let lengthOf2ArrWrapper = [];
  let lengthOf3ArrWrapper = [];
  let lengthOf4ArrWrapper = [];
  let lengthOf4IntStrHolder = "";
  let numToString = num.toString(); //convert num to string
  if (num > 4999) {
    //condition to break code once the nums is above 4999
    return;
  }
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
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
    XX: 20,
    XXX: 30,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CC: 200,
    CCC: 300,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
    MM: 2000,
    MMM: 3000,
    MMMM: 4000
  },
  2005
);
