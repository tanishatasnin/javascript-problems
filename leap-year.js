function leapyear(year){
if  ((year % 4 == 0) && (year % 100 != 0) 
|| (year % 400 == 0))  {
return true;
}
return false;
}
const myyear=2100;
const ismyyearleapyear=leapyear(myyear);
console.log("Is my year leap year",ismyyearleapyear);


const heryear=1242;
const isheryearleapyear=leapyear(heryear);
console.log("Is her year leap year",isheryearleapyear);
