"use strict"; //treat all JS code as newer version
 
// alert(3+3) // we are using nodejs, not browser


//number=> 2^53
//bigint
//string => ""
//boolean =>True/False
// null =>standalone value
// undefined => 
// symbol => unique


// https://262.ecma-international.org/5.1/#sec-11.4.3
// 1) Primitive Datatypes
// Number => number
// String  => string
// Boolean  => boolean
// null  => object
// undefined  =>  undefined
// Symbol  =>  symbol
// BigInt  =>  bigint

// 2) Non-primitive Datatypes
// Arrays  =>  object
// Function  =>  function
// Object  =>  object



// object

// console.log(typeof null)
// console.log(typeof undefined)




// ------------------------------- Memory ------------------------------------

// Stack(Primitive) ,Heap(Non-Primitive)
// Copy of variable ,Reference of original Value

let myname="disha";
let anothername="simmi";
anothername="laddu"

console.log(anothername);
console.log(myname);


let userone={
    email:"john@gmail.com",
    upi:"user@axl"
}

let usertwo=userone;
usertwo.email="disha@gmail.com";

console.log(userone.email);
console.log(usertwo.email);



