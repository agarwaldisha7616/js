let score="33abc";
let valueInNumber = Number(score);
console.log("Value of score:", valueInNumber);
console.log("Type of score:",typeof(score));
console.log("After Conversion of score:",valueInNumber);



let z = null;
let zValueConversion = Number(z);
console.log("Value of z:",z);
console.log("Type of z:",typeof(z));
console.log("After Conversion of z:",zValueConversion);


// "33" => 33
// "33abc" => NaN. (Not a Number)
//  true => 1; false => 0


let isLoggedIn = "disha"
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log("Boolean after Conversion:",booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "disha" => true

let someNumber=33;
let StringNumber=String(someNumber);
console.log("Type of StringNumber:",typeof(StringNumber));
console.log("SomeNumber to String conversion:",StringNumber);



// *********************** Operations **************************

let value=3;
let negval=-value;
console.log("Negative Value:",negval);

// console.log(2+2);    addition
// console.log(2-2);    subtraction
// console.log(2*2);    multiplication
// console.log(2**3);   power
// console.log(2/3);    division
// console.log(2%3);    remainder


let str1="hello";
let str2=" World";
let str3=str1+str2;
console.log("String Addition:",str3);


console.log("1"+2); 1   //12
console.log(1+"2");     //12

console.log("1"+2+2);   //122
console.log(1+2+"2");   //32


console.log(true);      //true  
console.log(+true);     //1
console.log(+"");       //0


let num1,num2,num3;
num1=num2=num3=2+2     //num1=4,num2=4,num3=4


let gameCounter1=100;
console.log(gameCounter1++);   //100


let gameCounter2=100;
console.log(++gameCounter2);  //101