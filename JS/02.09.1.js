let array = [1, 2, 3, 4, 5, 7]

array[0]

console.log(array.find(i => i >= 30))

let i
console.log(
  array.map(function (i) {
    return i * 2
  })
)

let m = array.map(i => i * 2)

console.log(m)

let arr2 = [12, 23, 43, 51, 45, 63, 85]

let x = arr2.filter(ai => ai > 50)
console.log(x)

const num = [1, 2, 3]
console.log(num.some(n => n > 0))

const numbers = [2, 4, 6]
console.log(numbers.every(n => n % 2 === 0))


let arr = [9, 4, 1, 6, 3, 8, 0, 1]

console.log(arr.sort()) // sajanu

let a = [[12, 34], [12], [12, 56]]
console.log(a.flat()); // nasted array ko 1 array may Bodol data ha
// nasted => array in array