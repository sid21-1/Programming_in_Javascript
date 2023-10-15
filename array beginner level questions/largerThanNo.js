let arr =[12,3,45,65,4,765,12];
let number = 12;

function getElements(arr,number){
    for(let i=0;i<arr.length; i++){
        if(arr[i]>number){
            console.log(arr[i]);
        }
    }
}

getElements(arr,number);