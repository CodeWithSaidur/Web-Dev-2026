// --------------------------------
let a = 10
let b = a
b = b + 1
console.log('A', a)
console.log('B', b)
//  ------------------------------
let arr1 = [1, 2, 3]
let arr2 = arr1
arr2[0] = 10
console.log('Arr1', arr1)
console.log('Arr2', arr2)
// --------------------------------
let arr3 = [1, 2, 3]
let arr4 = [...arr3]

arr3[0] = 10
console.log('Arr3', arr3)
console.log('Arr4', arr4)
// ---------------------------------
let obj1 = {
  a: 1,
  b: 2,
  c: 3
}
let obj2 = { ...obj1 }
obj2.a = 10
console.log(obj1.a)
console.log(obj2.a)
// ------------------------------------
let obj3 = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    d1: 4,
    d2: 5
  }
}
let obj4 = { ...obj3 } // in case of nasted obj the spread operator (...obj) Doesnot work 
obj4.d.d1 = 0
console.log(obj3.d.d1)
console.log(obj4.d.d1)
// ------------------------------------
let obj5 = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    d1: 4,
    d2: 5
  }
}

let obj6 = structuredClone(obj5)
obj6.d.d1 = 10
console.log('Obj5', obj5)
console.log('Obj6', obj6)
