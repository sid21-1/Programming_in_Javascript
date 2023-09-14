const array =["banana" , "apple" , "mango" , "dragonfruit" , "watermelon"]
searchAndReplace(array, "dragonfruit" , "orange")

function searchAndReplace(arr,searchValue, ReplaceValue){
    arr.forEach(callarray)

    function callarray(element,index){
        if(element === searchValue){
            arr[index]= ReplaceValue;
        }
    }
}
console.log(array)