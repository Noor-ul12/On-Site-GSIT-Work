//   Basic syntax
//  function functionname( parm1, param2) {
//  function body
// }
var myFriend = ["Muniba", "Hina"];
var unFriend = [];
//  function declearation with parameters
function addFriend(name) {
    // function body
    // push name to array
    myFriend.push(name);
}
addFriend("Afzal");
addFriend("Rashid");
console.log("---------------------");
//  function with return type
function removeFriend(name) {
    var myNewFriend = [];
    for (var _i = 0, myFriend_1 = myFriend; _i < myFriend_1.length; _i++) {
        var friend = myFriend_1[_i];
        if (friend !== name) {
            myNewFriend.push(friend);
        }
        myFriend = myNewFriend;
    }
    return name;
}
var removedFriend = removeFriend("Hina");
unFriend.push(removedFriend);
console.log("myFriends", myFriend);
console.log("unFriend", unFriend);
