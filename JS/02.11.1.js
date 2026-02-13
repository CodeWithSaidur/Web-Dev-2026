let arr1 = [1, 23, 45, 6, 87]
let arr2 = [1, 213, 451, 61, 187]

// console.log(...arr1, ...arr2)

let obj1 = { a: 10 }
let obj2 = { b: 20 }

let obj3 = {
  ...obj1,
  ...obj2
}
// console.log(obj3)

function Get_max(a, b, c) {
  if (a > b) {
    return 'A is Grater Then B'
  } else if (b > c) {
    return 'b is Grater Then c'
  } else {
    return ' c is grater'
  }
}
console.log(Get_max(0, 2, 1))

// Rest Parameters
function Get_Maximum(...n) {
  // ....🔥
  return Math.max(...n)
}
console.log(Get_Maximum(1, 3, 45, 6))

// Rest Parameters
function Get_Sum(...n) {
  return n.reduce((pr, cu) => pr + cu, 0)
}
console.log(Get_Sum(12, 4, 29, 437))

let obj4 = {
  a: 10,
  b: 20,
  c: 30
}

let { a, ...res } = obj4
console.log(a, res)

function Get_max_of_100(...n) {
  return n.filter(i => i >= 100)
}
console.log(Get_max_of_100(234, 576, 9, 100))

// .?
let studentDetails = {
  name: 'Swty'
}

console.log(studentDetails.ismerid?.childs)
