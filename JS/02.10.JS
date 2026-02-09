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
console.log(stu.paper[0]);

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
function Student(first_name, last_name, age, gender) { // use class insted constructure
  return (
    (this.first_name = first_name),
    (this.last_name = last_name),
    (this.age = age),
    (this.gender = gender)
  )
}

let stu1 = new Student('sabed', 'barbhuiyua', 25, 'M')

console.log(stu1)
