console.log("Challenge Number 1: Print odds 1-20");

function oddsNumbers (limit){
    for (let i = 1; i <=limit; i++){
        if( i % 2 != 0 ){
        console.log(i);
        }
    }
}
oddsNumbers(20);

console.log("_____________________________________________");



console.log("Challenge Number 2: Decreasing Multiples of 3");

function multiplesThree (limit){
    for (let i = limit; i >= 1; i--){
        if( i % 3 === 0 ){
        console.log(i);
        }
    }
}
multiplesThree(100);

console.log("_____________________________________________");



console.log("Challenge Number 3: Print the sequence");

console.log("First solution found");

let numbsArray = [4,2.5,1,-0.5,-2,-3.5];

    for (let i = 0; i <= numbsArray.length-1; i++){
        console.log(numbsArray[i]);
        }

console.log("Second solution found");

let x = 4;
let array = [];
for (let i = 0; i < 6; i++){
    array.push(x);
    x = x - 1.5;
}
console.log(array);


console.log("_____________________________________________");



console.log("Challenge Number 4: Sigma");

let num = [""];
let sum = 1;

for (let i = 1; i <= 100; i++){
    num +=i;
    if(i<100){
        num += "+";
    }
    sum = sum + i;
}
num += "=";
num += sum;
console.log(num);
    
console.log("_____________________________________________");


console.log("Challenge Number 5: Factorial");

let factorial = [""];
let product = 1;

for (let i = 1; i <= 12; i++){
    factorial +=i;
    if(i<12){
        factorial += "*";
    }
    product = product * i;
}
factorial += "=";
factorial += product;
console.log(factorial);
    
console.log("_____________________________________________");

