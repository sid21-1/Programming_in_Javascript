const numbers = [12, 34 ,45,64,11]
let maxelement = numbers[0];
numbers.forEach(max)

function max(item){
    if (item>maxelement)
    {
        maxelement= item;
    }
}

console.log("the maximum value is " + maxelement)

// const numbers = [37, 12, 88, 42, 7, 92];
// let max = numbers[0];

// numbers.forEach(function(item) {
//   if (item > max) {
//     max = item;
//   }
// });

// console.log("The maximum value is: " + max);