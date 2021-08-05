function isodd(num){
if(num%2!=0)
{return true;
}
return false;
}

const number=55;
const isTheNumOdd=isodd(number);
console.log('num is odd',isTheNumOdd);