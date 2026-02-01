function name1() {
  let a = 0

  return function () {
    return a++ // child fun // ter parent fun var yead raka
  }
}

let ans = name1()
console.log(ans())
console.log(ans())
console.log(ans())
console.log(ans())


// String methods
let a = 'Tanvir Ahmed'
console.log(typeof a)
console.log(a.toLocaleUpperCase())
console.log(a.trim())
console.log(a.includes('e'))
console.log(a.indexOf('i'))
console.log(a.indexOf('T'))
console.log(a.endsWith('Ahmed'))
console.log('Hello World'.slice(1, 3))
console.log('Hello India'.replace('India', 'World'))
let num = 'Tanvir'
let lname = 'Ahmed'
console.log(num.concat(lname))
let fullName = `Saidur,Rahman,Barbhuiya`
console.log(fullName.split(','))
console.log('sabed\n'.repeat(10))
