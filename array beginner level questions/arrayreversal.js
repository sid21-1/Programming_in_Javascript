let array = [12,13,14,15,16,17]

let newArray = reversedArray(array);

function reversedArray(arr){
    let reserved =[];
    arr.forEach(res)

    function res(element){
        reserved.unshift(element);
    }
    return reserved;
}

console.log(newArray);