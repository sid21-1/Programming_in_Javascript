let arr =[1,2,3,5,43,7,98,12];
let ans = arr.reduce((max, el)=>{
    if(el >max){
        return el;
    }
    else{
        return max;
    }
})

console.log(ans);