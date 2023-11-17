const arr = [12, 3, 54, 1, 7];

function filteringEven(x) {
  // if(x %2 === 0){
  //     return x;
  // }
  return x % 2 === 0;
}

const output = arr.filter(filteringEven);

console.log(output);
