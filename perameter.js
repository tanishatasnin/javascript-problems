function buyBook(taka){
               console.log('for a book',taka);
console.log('a pen');
var bookprice=100
var bookquantity=taka/bookprice;
return bookquantity;
}

 var book=buyBook(500);
console.log('your Book',book);