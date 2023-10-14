// function getMin(arr){
//     let min = arr.reduce((min, el) => {
//         if (min < el) {
//           return min;
//         } else {
//           return el;
//         }
//       });
//       return min;
// }

// let arr = [10, 20, 31, 12, 45, 1];

let arr = [10, 20, 31, 12, 45, 1];

let min = arr.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});

console.log(min);