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
  // To convert element to number, defined the variable convToNumber
  let convToNumber = Number(element);
  if (convToNumber > 0) {
    // console.log("inside if statement")
    alarm(element * 1000);
  }
};


// The last block code is writte in a way that it only takes numbers
// so we don't need to include if (time === null)
