function createAccount(email = "abcemail@example.com", password = "12345", age = 35) {
  let isValid = (email && password) ? true : false;

  return {
    email: email,
    password: password,
    age: age,
    account: isValid
  };
}

var user1 = createAccount("marvi@example.com", "abc123", 22);
var user2 = createAccount("ihunar@example.com", "pass999");   
var user3 = createAccount(undefined, undefined, 40);        
var user4 = createAccount("info@example.com", "mypassword", 50);

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
