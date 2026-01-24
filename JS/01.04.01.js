// logical oparetars 
let a = true
let b = false
console.log(a && b) //false

console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false
console.log(false && false);// false

console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true
console.log(false || false);// false

console.log('Ans 1', !true); // false
console.log('Ans 2', !false); // true

// logical operators
console.log(!-2); // F
console.log(!-1); // F
console.log(!-0); // T
console.log(!0); // T
console.log(!1); // F
console.log(!2); // F
console.log(!NaN); // T
console.log(!0n); // T

let a1 = "Tanvir"
console.log(+a1);      // convert to Number // NaN
console.log(typeof + a1); // "naumber"

console.log(+true);
console.log(typeof +{});

// Ternary operator
let old = 18
console.log(old >= 14 ? "you can use mobile" : "you can't use mobile ");
