//  function declearation
function myInfo() {
    // function body
    console.log("My name is Noor ul huda");
    console.log("I am from Pakistan");
    console.log(" I am a softwear engineer");
}
console.log("------------------");
myInfo(); // invoke function
myInfo();
myInfo();
console.log("--------------");
// function with requried perameters
function myInfoWithPerameter(name, country, job) {
    //function body
    console.log("HI my name is", name); // argument pass
    console.log("I am from ".concat(country)); // templet string
    console.log("I am a " + job); // concatenation
    console.log("-------------");
}
myInfoWithPerameter("NOOR UL HUDA", "INDIA", "forntend developer");
myInfoWithPerameter("Rashid", "China", "Teacher");
myInfoWithPerameter("Altaf sulangi", "Labnan", "palumber");
// function with defult perameter
function myInfoWithDefultValue(name, country, job) {
    if (job === void 0) { job = "Teacher"; }
    //function body
    console.log("My name is ", name);
    console.log("I am from ".concat(country));
    console.log("I am a " + job);
    console.log("-------------------");
}
// invoke function
myInfoWithDefultValue("M Ali", "Pakistan", undefined);
myInfoWithDefultValue("Sunny", "japan", "Sealsman");
// function with optional perameter
function myInfoWithOptinalPeramer(name, country, job) {
    // function body
    console.log("My name is ", name);
    console.log("I am from ".concat(country));
    if (job) {
        console.log("I am a " + job);
    }
    console.log("-------------");
}
// function invoke
myInfoWithOptinalPeramer("Haris", "Pakistan", "Cashier");
myInfoWithOptinalPeramer("Afzal", "India");
// function with return type
function sum(num1, num2, num3) {
    return num1 + num2 - num3;
}
var total = sum(10, 30, 20);
console.log(total);
console.log(sum(50, 50, 50));
// function that hoisted
logDate();
function logDate() {
    var date = new Date();
    console.log(date);
}
console.log("-----------------------");
//function expression
var myInfoWithFunctionExpresion = function () {
    // function body
    console.log(" Hi my name is Noor ul huda");
    console.log("I am from pakistan");
};
myInfoWithFunctionExpresion();
console.log("----------------------");
// self invoke function
(function () {
    // function
    console.log("HI i am Noor from invoke function");
})();
console.log("----------------");
// arrow function
var MultplicationWithArrowFunction = function (n1, n2) { return n1 * n2; };
var result2 = MultplicationWithArrowFunction(10, 2);
console.log(result2);
console.log("----------------------");
//  Before arrow function  function expression is
var beforeArrowFunction = function (num1, num2) {
    return num1 / num2;
};
console.log(beforeArrowFunction(50, 5));
console.log("------------------------");
//  Arrow function with rest perameters
var sumAllNumber = function (massage) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    console.log(numbers);
    console.log(typeof numbers);
    console.log(massage);
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        total += number; // total = total + number
    }
    return total;
};
var result3 = sumAllNumber(" Hellow i am rest perameter function", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result3);
