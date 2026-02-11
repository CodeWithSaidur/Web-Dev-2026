// Without Destructuring
const numbers = [10, 20, 30]
const first = numbers[0]
const second = numbers[1]

let arr = [12, 23, 34, 546, 67]
let [a, b] = arr // Array Destructuring
console.log(a)
console.log(b)

// Without Destructuring
let obj = {
  name: 'Tanvir Ahmed',
  age: 76
}
let TanvirName = obj.name
let TanvirAge = obj.age
console.log(TanvirName)
console.log(TanvirAge)

// Obj Destructuring
let stu = {
  name: 'Tanvir Ahmed',
  age: 76
}

let { name: TanvirName1, age } = stu

console.log(TanvirName1)
console.log(age)

// ----------------------------

// Nested Destructuring
let student = {
  name: 'Tanvir',
  age: 21,
  address: {
    vill: 'Vatisanjurai',
    pin: 788150
  }
}

let { address: { pin: p }} = student

console.log(p)

function Hello(name, age) { 
  return `Hello ${name} Age is ${age}`
}
let ans1 = Hello('Tanvir', 23)
console.log(ans1)
//  ======================
// object Destructuring
function Hello({name, age}) {
  return `Hello ${name} Age is ${age}`
}
let ans2 = Hello({name : 'Tanvir', age : 23})
console.log(ans2)
