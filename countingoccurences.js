const numbers=[12,23,543,12,45,6]
const targetNumber = 12;

const result = countOccurences(numbers,targetNumber);

function countOccurences(arr , target){
    let count =0;
    arr.forEach(functionCount)

    function functionCount(element){
        if (element === target){
            count++;
        }
    }
    return count;
}

console.log("Occurences of " + targetNumber  + " is "+result);