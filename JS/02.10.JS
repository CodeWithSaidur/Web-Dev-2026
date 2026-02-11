// intro object abd its importance

let obj = {
  key1: 'val1',
  key2: 'val2',
  mat: function () {
    return 'Method'
  }
}

console.log(obj['key1'])
console.log(obj.key1)

let stu = {
  first_name: 'Sabed',
  last_name: 'Barbhuiya',
  full_Name: function () {
    return `${this.first_name} ${this.last_name}`
  },
  roll: 1,
  dep: 'BCA',
  paper: ['DSA', 'Web D', 'JAVA', 'DBMS']
}

console.log(stu.full_Name())
console.log(stu.paper[0])

let car = {
  car_name: 'BMW',
  color: 'red',
  whiles: 5,
  speed: '120KPM'
}

console.log(Object.entries(car))

let person = {
  name: 'sabed',
  age: 30,
  city: 'HKD'
}

for (const i in person) {
  const element = person[i]
  console.log(element)
}

// Object Constructor Functions
function Student(first_name, last_name, age, gender) {
  // use class insted constructure
  return (
    (this.first_name = first_name),
    (this.last_name = last_name),
    (this.age = age),
    (this.gender = gender)
  )
}

let stu11 = new Student('sabed', 'barbhuiyua', 25, 'M')

console.log(stu11)

function Student(name, cls, id, gen, fname, lname, fatherN) {
  ;((this.name = name),
    (this.cls = cls),
    (this.id = id),
    (this.gen = gen),
    (this.fname = fname),
    (this.lname = lname),
    (this.fatherN = fatherN))
}

let stu1 = new Student('Tanvir', 10, 1, 'm', 'Tanvir', 'Ahmed', '')
let stu2 = new Student('Sabed', 11, 2, 'm', 'sabdue', 'rohmab', '')

console.log(stu2)

// ---------------------------------------------
// Primitive Copy Example
let a = 10
let b = a // a = 10 and b = 10

b = 20 // b = 20

console.log(a) // 10
console.log(b) // 20

let user = {
  name: 'sabed'
}

let user1 = user
user1.name = 'jabed'

let user3 = user

user3 = {
  name: 'wahid'
}

console.log(user)
console.log(user1)
console.log(user3)
