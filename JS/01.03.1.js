let money = 10 // global
let personalMoney // global

function AddMoney() {
  personalMoney = 1000 // function schope // local schope
  let VerypersonalMoney = 390000
  return money + 10
}

let ans = AddMoney()

console.log(personalMoney)
console.log(money)
console.log(ans)
// console.log(VerypersonalMoney);

// check is voter or NotVoter
let age = 18
if (age >= 18) {
  console.log('yes')
} else {
  console.log('NO')
}
