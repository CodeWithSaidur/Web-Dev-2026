// premitive data types
let a = 10 // number
let b = 'hello' // string
let c = true // boolean
let d = null // null => Object
let e = undefined // undefined
let f = BigInt(9854684564056430576240597097654950) // bigint
let g = Symbol('w') // symbol

// Variable Naming Conventions
// 1. should not start with number

// let 1a = 10 // invalid
let a1 = 10 // valid

// 2. should not contain space
// let my name = 'Tanvir' // invalid
let myName = 'Tanvir' // valid

// 3. should not be a reserved keyword
// let class = 10 // invalid
let cls = 10 // valid

// 4. use camelCase for naming variables
let myAge = 20

// 5. variable names are case sensitive
let fruit = 'apple'
let Fruit = 'mango'

// 6. use meaningful names
let studentAge = 21

// 7. can start with _ or $
let _name = 'Sahil'
let $name = 'Motu'

// non premitive data types or reference data types

let student = ['Tanvir', 'Sahil', 'Motu', 'Patlu', 10] // array => object
// console.log(student)

let student1 = {
  name: 'Tanbir',
  cls: 11,
  roll: 27,
  gender: 'male',
  isHairRed: false,
  fevSub: ['Physics', 'Maths']
}

// console.log(student1);

console.log(typeof student1)

// --------------------------------------
let f1 = ['cow', 'bird', 'horse', 'snake', 'buffelow']
console.log(f)

let tanvir = {
  name: 'sahil',
  age: 19,
  cls: 11,
  gender: 'male',
  height: 1.6,
  favsub: ['physics', 'maths'],
  ismarrid: false,
  monthlyinc: BigInt(123456)
}

console.log(tanvir)

// ------------------------- function --------------------

if (1 == 2) {
  console.log('yes')
} else {
  console.log('no')
}

function sayhii(o) {
  return 'hello' + o + 'how can i help u'
}

console.log(sayhii('jubair'))

function Add(a, b) {
  return a + b
}

Add(1, 3)

console.log(Add(10, 30))
