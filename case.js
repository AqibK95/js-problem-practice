const userName = 'blackPink';
const userInput = 'blackPinK';
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());

if( userName.toLowerCase() === userInput.toLocaleLowerCase()){
    console.log('valid user');
}
else{
    console.log('invalid user');
}