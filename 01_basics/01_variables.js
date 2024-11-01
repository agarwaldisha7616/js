const accountId=144401
let accountEmail="john@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"


accountEmail="jam@gmail.com"
accountPassword="121212"
accountCity="Bengaluru"

console.log(accountId)
/*
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])