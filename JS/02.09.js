let r1 = 1
let r2 = 2
let r3 = 3
let r4 = 4

let students = ['Tanvir', 'Sakib', 'Arif', 'Samim', 'Rohim', 'Sahira']
console.log(students[5])

let bike = new Array('KTM', 'Palser', 'FZ', 'Supersplander', 'HERO')

// bike.push('Harcolis')
// bike.pop()

console.log(bike)

let a = [12, 23]

a.push(34) // -> Add element at the end
a.pop() // -> Remove last element
a.unshift(1) // -> add element at the beginning returnn length of array
a.shift() // -> Remove first element and return it

let ans1 = a.includes(23) // ->Check is elements Exist

let ans2 = a.indexOf(12) // -> Get the index of the element

console.log(ans1)

let students1 = ['Abed', 'Tanvir', 'Salam', 'Labu', 'Sahira', 'Damand']

ans = students.slice(2, 4) // Returns a copy of a section of an array.

console.log(ans)
console.log(students1)

let arr3 = [10, 20, 30]

arr3.splice(0, 1) // remoive selected elements change the main array

console.log(arr3)


// =============================

let arr = [10, 11, 12, 13, 14, 15, 16, 17, 8]
console.log(arr.slice(13, -1)) // return a new array Dn't mod main arr

console.log(arr.splice(0, 3, 20))
// remove the selected elements from the array
// splice (starting, number of Elements to be Deleted, new elimients to ba added on deleted place)
// reture the deleted elements

console.log(arr)

console.log(
  arr.findIndex(i => {
    return i === 8
  })
)

console.log(arr.map(i => i + 2))

console.log(
  arr.filter(i => {
    return i >= 14
  })
)

console.log(arr)

