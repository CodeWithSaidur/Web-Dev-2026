function fn() {
  console.log(10000, 'in side function')

  return 20

  console.log('Hello')
}

console.log(fn() + 'out side function')

// Function Declaration
function Hello(name) {
  console.log(`Hello ${name} How r U`)
}

// Function Expression
let fn = function Hello(name) {
  return `Hello ${name} How r U`
}

let ans = fn('Tanvir')
console.log(ans)

//  Arrow functions
let add = () => {
  return 'Addition'
}
console.log(add())

// Parameters vs arguments
let sub = (a, b) => {
  return a - b
}
console.log(sub(10, 20))

// Default parameters
let mul = (a = 0, b = 1) => {
  return a * b
}
console.log(mul(12, 20))

let user = (name = 'Manus') => {
  return `Hello ${name} How Are You`
}
console.log(user('Tanvir'))

//  Return values

let GetPercentage = (s1 = 30, s2 = 30, s3 = 30, s4 = 30, s5 = 30) => {
  let cal = s1 + s2 + s3 + s4 + s5
  let ans = (cal / 500) * 100
  return ans
}
console.log(GetPercentage(50, 40, 55, 70, 45))

// Pure
function add1(a, b) {
  return a + b
}
console.log(add1(1, 2))

//impure functions

let gst = 500
function calculateTax(amount) {
  return amount - gst
}

console.log(calculateTax(1000))
console.log(calculateTax(10000))
