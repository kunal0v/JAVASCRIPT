// CALLBACK FUNCTION: A CALLBACK IS A FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION
function greet(name,callback){
    console.log("hi"+" "+name);
    callback();
}
function callme(){
    console.log("I am callback function");
}
greet('name',callme)

const calculate=(a,b,operation)=>{
    return operation(a,b);
}

// method 1
const addition =calculate(3,4,function(num1,num2){
    return num1 + num2;
});
console.log(addition);

// method 2
const subtraction =(a,b)=>a-b;
const subResult=calculate(8,3,subtraction);
console.log(subResult);

// method 3
function multiply(a,b){
    return a*b;
}

const mulResult=calculate(3,2,multiply);
console.log(mulResult);
