//   Basic syntax
//  function functionname( parm1, param2) {
    //  function body
// }


let myFriend: string[] = ["Muniba", "Hina"];

const unFriend: string[] = [];

//  function declearation with parameters

function addFriend(name: string): void{
    // function body
    // push name to array

    myFriend.push(name);
}

addFriend("Afzal");
addFriend("Rashid");

console.log("---------------------");

//  function with return type

function removeFriend(name: string): string {
    let myNewFriend: string[] =[];

    for (const friend of myFriend) {
        if (friend !== name) {
            myNewFriend.push(friend)
        }
        myFriend = myNewFriend;
    }
    return name;
}

const removedFriend = removeFriend("Hina");
unFriend.push(removedFriend);

console.log("myFriends" , myFriend);
console.log("unFriend" , unFriend);