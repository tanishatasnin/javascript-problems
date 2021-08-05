function factorial(number){
               let facto=1;
               for( let i=1; i<=number;i++){
                              facto=facto*i;
               }
               return facto;
}
var mynum1=factorial(7);
console.log('The Factorial of 7 is',mynum1);