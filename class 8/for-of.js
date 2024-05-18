// basic syntax of "for of" loop
// for( variable of iterable) {
// statement
// }
// Array is use to store multiple value in a single variable
var girls = ["sana", "samreen", "shagufta", "maryam"];
var index = 1;
// for of is use to iterate over an itrable object ( like, an array or a string)
for (var _i = 0, girls_1 = girls; _i < girls_1.length; _i++) {
    var girl = girls_1[_i];
    console.log("my ".concat(index, " girl friend is ").concat(girl));
    index++;
}
