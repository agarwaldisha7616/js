// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2">1);
console.log("02">1);

/* The reason is that an equality check == and >,<,>=,<= works differently 
Comparison convert null to a number, treating it as 0
That's why 3rd comparison null>=0 is true and null>0 is false
*/
console.log(null==0);
console.log(null>0);
console.log(null>=0); 


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === : Strict check (Check values + datatypes)
console.log("2"==="2")
