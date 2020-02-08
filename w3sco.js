// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let arr = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
let times = () => {
  let today = new Date();
  let day = arr[today.getDay()];
  let currentTime = today.toLocaleTimeString();
  console.log("today is : " + day);
  let splitTime = currentTime.toString().split(" ")[1];
  let hour = currentTime.toString().split(":")[0];
  let min = currentTime.toString().split(":")[1];
  let Sec = currentTime
    .toString()
    .split(":")[2]
    .slice(0, 2);
  let format =
    " current time is : " + hour + " " + splitTime + " : " + min + " : " + Sec;
  console.log(format);
};
times();
//2. Write a JavaScript program to print the contents of the current window.
let printCurrentPage = () => {
  //   window.print();
};
//Write a JavaScript program to calculate days left until next Christmas.

today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
var one_day = 1000 * 60 * 60 * 24;
console.log(
  Math.ceil((cmas.getTime() - today.getTime()) / one_day) +
    " days left until Christmas!"
);



