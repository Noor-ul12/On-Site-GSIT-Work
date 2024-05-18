// basic syntax of "for of" loop
// for( variable of iterable) {

    // statement
// }

// Array is use to store multiple value in a single variable

const girls = [ "sana" , "samreen" , "shagufta" , "maryam"];

let index = 1 ;

// for of is use to iterate over an itrable object ( like, an array or a string)

for (let girl of girls) {
     
    console.log(`my ${index} girl friend is ${girl}`);
  index++;
}

