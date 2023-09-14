const numbers =[12, -34,23,43,-1,-3,2]
negativenumbers(numbers)
function negativenumbers(numbers){
    let count =0;
    numbers.forEach(function(element){
        if (element<0){
            count++;
        }
    })
    return count;
}

// console.log("number of negative numbers " + count);
console.log(`Number of Negative Numbers: ${negativenumbers(numbers)}`);