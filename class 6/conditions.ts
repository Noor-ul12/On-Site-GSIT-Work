//if else simple example
let classday: string = "tuesday";

if (classday === "wednesday") {
  console.log(" go to class");
} else {
  console.log("Do nothing sleep and have a nice day");
}

//create variable

let homeFood: string = "daalChawal";
let moneyIHave: number = 300; // change this value to 300 for biryani or 350 or greater than 350 for zinger
let zinger: number = 350;

// this is an example of "if, else if, else" condition

if (homeFood === "daalChawal" && moneyIHave === 300) {
  // this code will execute if both condition is ture

  console.log("go to zafaar pakwan and buy plou");
} else if (moneyIHave >= zinger) {
  //this code will execute if above condition is false

  console.log("buy zinger and enjoy");
} else {
  // this code will execute if both condition is false

  console.log(" sorry Eat daalChawal");
}

// switch Example

let monthNumber: number = 13;

switch (monthNumber) {
  case 1:
    console.log("january"); //this code will execute if monthNumber is 1
    break;
  case 2:
    console.log("february"); //this code will execute if monthNumber is 2
    break;
  case 3:
    console.log("March"); //this code will execute if monthNumber is 3
    break;
  case 4:
    console.log("april"); //this code will execute if monthNumber is 4
    break;
  case 5:
    console.log("May"); //this code will execute if monthNumber is 5
    break;
  case 6:
    console.log("June"); //this code will execute if monthNumber is 6
    break;
  case 7:
    console.log("july"); //this code will execute if monthNumber is 7
    break;
  case 8:
    console.log("August"); //this code will execute if monthNumber is 8
    break;
  case 9:
    console.log("September"); //this code will execute if monthNumber is 9
    break;
  case 10:
    console.log("Octuber"); //this code will execute if monthNumber is 10
    break;
  case 11:
    console.log("november"); //this code will execute if monthNumber is 11
    break;
  case 12:
    console.log("December"); //this code will execute if monthNumber is 12
    break;
  default:
    console.log("invalid month"); //this code will execute if monthNumber is not 1 to 12
    break;
}

// Example of logical operators

let isMyBirthDay: Boolean = true;
let amIHappy: boolean = false;

//logic "and &&"

if (isMyBirthDay && amIHappy) {
  console.log("happy birthday");
}

// loogic OR ||

if (isMyBirthDay || amIHappy) {
  console.log("Happy birthday but i am not happy");
}
