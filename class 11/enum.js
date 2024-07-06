// by  default numaric based enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Orange"] = 3] = "Orange";
    Color[Color["Black"] = 4] = "Black";
    Color[Color["White"] = 5] = "White";
    Color[Color["Purple"] = 6] = "Purple";
})(Color || (Color = {}));
var myFavColor = Color.Orange;
console.log(myFavColor);
console.log("----------------------------");
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepeted"] = 202] = "Accepeted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.Success); // log 200
console.log(StatusCodes.Accepeted); //  log 202
// food enum
var Food;
(function (Food) {
    Food[Food["pizza"] = 0] = "pizza";
    Food[Food["Burger"] = 1] = "Burger";
    Food[Food["Chips"] = 2] = "Chips";
})(Food || (Food = {}));
var MyFoodOder = Food.pizza;
if (MyFoodOder === Food.pizza) {
    console.log("I Odered Pizza");
}
else if (MyFoodOder === Food.Burger) {
    console.log("I Odered Burger");
}
else {
    console.log("I Odered Chips");
}
