
// intro object abd its importance

let obj = {
  key1: 'val1',
  key2: 'val2',
  mat: function () {
    return 'Method'
  }
}

// console.log(obj['key1'])
// console.log(obj.key1)

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

// console.log(stu.full_Name())
// console.log(stu.paper[0]);

let car = {
  car_name: 'BMW',
  color: 'red',
  whiles: 5,
  speed: '120KPM'
}

console.log(Object.entries(car))

