function sayHello(name){
    console.log("Hello" + name);

    var color = "blue";
}


function sum(num1, num2){
    const res = num1 + num2;
    return res;

    console.log("WILL NEVER BE CALLED"); // wont be executed because of the 'return' 
}


function printNumbers(){
//print numbers 1-20
    for(let i =1; i<=20; i++){
        if (i !==7 & i !==13){
        console.log(i);
    }
}
}


function basicCalculations(){
    let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];
    /**
     * 1 - print every number
     * 2 - print the sum of all numbers
     * 3 - print how many numbers are greater than 500
     */
    let sum = 0;
    let count = 0
    for(let i=0; i<numbers.length; i++){
    let num = numbers[i];
    console.log(num);
    sum += num;
    if(num > 500){
        count+=1;
    }
    }
    console.log("The total is:" + sum); // 10063
    console.log("Numbers greater than 500:" + count); //7
}

/**
 *  ! = not
 *  && = and
 *  || = or
 */



function init(){
    //retrieve data
//hook events

console.log("Whats up!");

sayHello("Ricky");

const x = "Ricky";
sayHello(x, "Array");

const result = sum(21,21);
console.log(result);

printNumbers();
basicCalculations();
}



window.onload = init;