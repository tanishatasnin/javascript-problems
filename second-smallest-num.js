function secondSmallest(arr){
             arr2 = [];
               arr.sort(function(a,b){
               return a-b;
               })
               arr2.push(arr[1]);
               return arr2;
               }
var mynum=secondSmallest([12,12,12,32,25,50,41]);
console.log("the num is" ,mynum);