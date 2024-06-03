const accountId = 145422
let accountEmail = "Tarun@gamil.com"
var accountPassword = "45562"
accountCity = "Pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "jdchwjd@gmail.com"
accountPassword = "524228"
accountCity = " fvv"

console.log(accountId);

/*
Prefer not to use Var 
because of issue  in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])