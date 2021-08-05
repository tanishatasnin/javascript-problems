// function number(num){
//                num=num+" ";
//                return num.split('').reverse("").join('');

// }
// console.log('Reverse the number',number(32234392));
function number(num){
               //  convart  num to string 
               num=''+num;
               num= num.split('');
               num=num.reverse("");
               num=num.join('');
return num;
}
console.log('Reverse the number',number(32234392));

function wordsReverse(words){
               words=words+"";
               words=words.split('');
               words=words.reverse();
               words=words.join('');

               return words;
}
console.log("after Reverse",wordsReverse('saregamapa'));





