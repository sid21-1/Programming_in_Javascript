let number = 287152;
let sum =0;
copy = number

while(copy>0)
{
   let digit = copy%10;
    sum = sum +digit;
    copy = Math.floor(copy/10);
}

console.log(sum);