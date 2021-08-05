// let factorial=1;
// for(i=1;i<=5;i++){
//                factorial=factorial*i;
// }
// console.log(factorial);

function factorial(num){
               let fact=1;
               for( let i=1; i<=num;i++){
                              fact=fact*i;
               }
               return fact;

}
var firstNum=factorial(9);
console.log("Factorial of 9 is",firstNum);