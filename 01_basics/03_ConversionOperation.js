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
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log("Boolean after Conversion:",booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "disha" => true