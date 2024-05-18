// simple example of array in typescript
var cart = ["Rice", "wheat", "oil"];
console.log(cart);
console.log("-----------------");
// simple array example typescript different syntax
var myFriends = [
    "Ali",
    "Ammar",
    "Safdar"
];
console.log(myFriends);
console.log("-------------------");
var myTiffinBox = ["Rice", "dal", "chicken"];
console.log("Here is my cart before 3rd element", myTiffinBox[2]); // this syntax get the element myTiffinBox[index]
console.log("befole changing", myTiffinBox);
myTiffinBox[2] = "dal makhni"; // this syntax change the element
myTiffinBox[3] = "dhahi bary"; // this syntax add the elemnt in array
console.log("after changing", myTiffinBox);
console.log("-----------------------------");
console.log("lenth of mytiffinBox =", myTiffinBox.length);
console.log("-----------------------------------");
myTiffinBox.push("Achar ghost"); // this syntax add element is array
console.log(myTiffinBox);
console.log("-------------------------");
myTiffinBox.pop(); //this syntax remove element from array
console.log(myTiffinBox);
console.log("--------------------");
var names = [];
names.push("Ali"); //no erroe
console.log(names);
// names.push(43);  Error:Argument of type 'number' is not assignable to parameter of type 'string'
var myWifes = ["Wife1", "wife2"];
// myWifes.push("Wife3"); // give error
// my Wifes[2] ="Wife3";  // give error
console.log(myWifes);
