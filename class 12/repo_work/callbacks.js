function myCallBack(text) {
    console.log("inside myCallBack" + text);
}
// myCallBack("hellow world")
// function that take function as perameter
function callingFunction(initialTExt, callback) {
    console.log("zarori kam sa sojao");
    callback(initialTExt);
}
// invoke function with argument and callback function first way
callingFunction("Hellow  wordl", myCallBack);
//  invoke function with argument second way with arrow function
callingFunction("Hellow world", function (text) {
    console.log("second way with arrow function callback" + text);
});
// invoke function with argument third way with function key word
callingFunction("Hellow world", function (text) {
    console.log("custum callback with function keyword" + text);
});
