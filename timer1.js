// console.log(process.argv);
let newArr = process.argv.slice(2);
newArr.sort(function (a, b) {
  return a - b;
})
// console.log(newArr);

const alarm = function (time) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time)
};

for (let element of newArr) {
  // console.log(element)
  let varNumber = Number(element);
  if (varNumber > 0) {
    // console.log("inside if statement")
    alarm(element * 1000);
  }
};


/*
if (time === null) {
  break;
} else if () {
  skip
 }
*/