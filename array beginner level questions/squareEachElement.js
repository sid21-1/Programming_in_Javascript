const array=[10, 100, 200, 400]
array.forEach(square)

function square(item,index,arr){
    arr[index]= item* item;
}

console.log(array);