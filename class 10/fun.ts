//  function declearation
function myInfo():void {
    // function body
    console.log("My name is Noor ul huda");
    console.log("I am from Pakistan");
    console.log(" I am a softwear engineer");

}

console.log("------------------");

myInfo()  // invoke function
myInfo()
myInfo()

console.log("--------------");


// function with requried perameters
function myInfoWithPerameter(name:string, country:string , job:string): void {
    //function body
    console.log("HI my name is",name);  // argument pass
    console.log(`I am from ${country}`);  // templet string
    console.log("I am a " + job);          // concatenation

    console.log("-------------");

}

myInfoWithPerameter("NOOR UL HUDA","INDIA","forntend developer");
myInfoWithPerameter("Rashid","China", "Teacher");
myInfoWithPerameter("Altaf sulangi","Labnan","palumber");
 
// function with defult perameter

function myInfoWithDefultValue(name:string, country:string, job:string = "Teacher"): void {
    //function body
    console.log("My name is ", name);
    console.log(`I am from ${country}`);
    console.log("I am a " + job);

    console.log("-------------------");
}

// invoke function
myInfoWithDefultValue("M Ali","Pakistan",undefined);
myInfoWithDefultValue("Sunny","japan","Sealsman");


// function with optional perameter

function myInfoWithOptinalPeramer(name:string, country:string, job?:string): void{
    // function body
     console.log("My name is ", name);
     console.log(`I am from ${country}`);

     if(job) {
        console.log("I am a " + job);
     }
     console.log("-------------");
}

// function invoke

myInfoWithOptinalPeramer("Haris","Pakistan","Cashier");
myInfoWithOptinalPeramer("Afzal","India");

// function with return type

function sum(num1:number, num2:number, num3:number):  number{
    
    return num1 + num2 - num3;
}
const total:number = sum(10,30,20);
console.log(total);

console.log(sum(50,50,50));

// function that hoisted
 
logDate();

function logDate(): void{
    const date: Date = new Date();
    console.log(date);
}
console.log("-----------------------");
//function expression

 const myInfoWithFunctionExpresion = function(): void{
    // function body
     console.log(" Hi my name is Noor ul huda");
     console.log("I am from pakistan");

 }


 myInfoWithFunctionExpresion();

 console.log("----------------------");

 // self invoke function

 ( function() {
    // function
    console.log( "HI i am Noor from invoke function");

 })()

console.log("----------------");

 // arrow function
 const MultplicationWithArrowFunction = (n1:number , n2: number) => n1 * n2;
 const result2 = MultplicationWithArrowFunction( 10, 2);

 console.log(result2);

 console.log ("----------------------");

//  Before arrow function  function expression is

const beforeArrowFunction = function( num1: number, num2: number): number {
    return num1 / num2;
}

console.log(beforeArrowFunction(50,5));

console.log("------------------------");

//  Arrow function with rest perameters

const sumAllNumber =(massage:string, ...numbers:number[]): number | void => {
    console.log(numbers);
    console.log(typeof numbers);

    console.log(massage);

    let total:number = 0;
    for(const number of numbers){
        total+= number;  // total = total + number
    }

    return total;
}

const result3: number | void =sumAllNumber(" Hellow i am rest perameter function", 1,2,3,4,5,6,7,8,9,10,);

console.log(result3);