

// + addition
// - minus
// * multiplication
// / division
// % modulo

let num1 = 6;
let num2 = 8;

let sum = num1 + num2;
let product = num1 * num2;
let difference = num1 - num2;
let quotient = num1 / num2;

let remainder = 100 % num1;

console.log(sum, product, difference, quotient, remainder );

// === strict equals
// == equal too
// > greater than
// < less than
// >= greater than or equal too
// <= less than or eqaul too
// !== not equal

if (sum >= difference) {
    console.log("difference is the OG");
}else {
    console.log("sum trumps all");
}

//even or odd checker
if (num2 % 2 === 0) {
    console.log(`${num2} is even`)
}else {
    console.log(`${num2} is odd`)
}

// even checker function
function isEven(num) {
    if (num % 2 === 0) {
        console.log(`${num} is even`)
    }else {
        console.log(`${num} is odd`)
    }
}
isEven(6)

//ternary: easy way to do if else statement  
num1 % 2 ? console.log("even"): console.log("odd");