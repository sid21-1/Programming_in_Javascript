let number = 28176;
let count = 0;
let copy = number;

while(copy>0){
    count++;
    copy =Math.floor(copy/10) ;
}

console.log(count);