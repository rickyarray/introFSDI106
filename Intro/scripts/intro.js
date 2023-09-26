function sayHello(name){
    console.log("Hello" + name);

    var color = "orange";
}


function sum(num1, num2){
    const res = num1 + num2;
    return res;

    console.log("WILL NEVER BE CALLED"); // wont be executed because of the 'return' 
}


function printNumbers(){
//print numbers 1-10
//except 3 and 7

list = [121,1515,534,115,54,854,9752,3654,21,54,162,158];

for(let i=0; i<list.length;i++)
{
    let num = list[i];
    console.log(num);
}
/**
//      * 1 - print every number
//      * 2 - print the sum of all numbers
//      * 3 - print how many numbers are greater or equal to 200
//      */
let sum = 0;
let count = 0
    for(let i=0; i<list.length; i++){
    let num = list[i];
    console.log(num);
    sum += num;
    if(num >= 200){
        count+=1;
    }
    }
    console.log("The total is:" + sum);
    console.log("Numbers greater than 200:" + count);

for(let i =1; i<=10; i++){
        if (i !==3 & i !==7){
        console.log(i);
    }
}
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

}



window.onload = init;