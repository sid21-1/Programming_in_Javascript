let arr =[12,1,23,454,52,3]
let largest =0;
for(let i=0;i<arr.length; i++){
    if (largest<arr[i]){
        largest = arr[i];
    }
}
console.log("the largest number in the given array is ", largest);