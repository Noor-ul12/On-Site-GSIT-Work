// by  default numaric based enum

enum Color {           // Default index is 0
 Red,
 Green,
 Blue,
 Orange,
 Black,
 White,
 Purple

}

const myFavColor: Color = Color.Orange;
console.log(myFavColor);


console.log("----------------------------");

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepeted = 202,
    BadRequest = 400
}

console.log(StatusCodes.Success);  // log 200

console.log(StatusCodes.Accepeted);  //  log 202

// food enum

enum Food {
    pizza,
    Burger,
    Chips
}

const MyFoodOder: Food = Food.pizza;

if ( MyFoodOder === Food.pizza) {

    console.log(`I Odered Pizza`);

} else if( MyFoodOder === Food.Burger) {

    console.log(`I Odered Burger`);

}else{

    console.log(`I Odered Chips`);
}

// Enum strings  -  Fully intialized

enum OderStatus {
    placed = " your oder has been placed",
    processing ="your oder is being processed",
    shiping = "your oder has been shipped",
    Delivered =" your"
}