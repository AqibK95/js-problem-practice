const result = Math.pow(3, 8);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap =Math.abs (num1 - num2);
if(gap < 5 ){
    console.log('you guys can be friend');
}
else{
    console.log('stay away');
}

// ..................................
// 
// ...................................

const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber);

const result2 = Math.ceil(2.000001);
console.log(result2);

const result3 = Math.floor(456.259);
console.log(result3);


// random

console.log(Math.random());

const random2 = Math.random()*100;
console.log(random2);

const random3 = Math.round(Math.random()*100);
console.log(random3);

for(let i = 0; i < 20; i++){
    const random4 = Math.round(Math.random()*6);
    console.log(random4);
}