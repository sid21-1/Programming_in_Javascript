const numbers = [12,40,67,54,61]
const targetNumber = 67;

const result = findIndex(numbers, targetNumber)

function findIndex(arr, target){
    let foundIndex = -1;
    arr.forEach(function (element,index){
        if(element === target && foundIndex ===-1)
        {
            foundIndex = index;
        }
    });
    return foundIndex;
}

console.log(result)