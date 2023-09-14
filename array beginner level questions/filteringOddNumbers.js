let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

numbers.forEach(oddNumbers)

function oddNumbers(item){
    if (item%2===1){
        console.log(item)
    }
    else{
        return 0;
    }
}

// console.log(numbers)