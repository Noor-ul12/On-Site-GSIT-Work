// OOP stand for Object Oriented Programming
// OOP is a programming paradigm that uses 
// objects and classes to model real-world entities and their relationships. 
// It is a fundamental paradigm of software development.
// 1. Object no reusability
var car = {
    model: "honda",
    color: " red",
    engine: "800cc",
    wheel: 4
};
var car2 = {
    model: "toyota",
    color: "blue",
    engine: "500cc",
    wheel: 4
};
// 2 class
var Car = /** @class */ (function () {
    // constractor invoke when an object is created with "new" keyword;
    function Car(m, c, e, w) {
        this.model = m;
        this.color = c;
        this.engine = e;
        this.wheel = w;
    }
    Car.prototype.getCarDetail = function () {
        console.log(this.model, this.color, this.engine, this.wheel);
    };
    return Car;
}());
var vehicle1 = new Car("Mehran", "green", "800cc", 4);
var vehicle2 = new Car("Civic", "white", "1000cc", 4);
var vehicle3 = new Car("Hino", "blue", "400cc", 4);
console.log(vehicle2.color, vehicle2.engine);
console.log(vehicle3.model);
console.log(vehicle1.engine);
vehicle1.getCarDetail();
vehicle2.getCarDetail();
vehicle3.getCarDetail();
console.log("--------------------------------------------");
var Animal = /** @class */ (function () {
    function Animal(n, a, c, e, l) {
        this.name = n;
        this.age = a;
        this.color = c;
        this.eat = e;
        this.legs = l;
    }
    Animal.prototype.getAnimalDetail = function () {
        console.log(this.name, this.age, this.color, this.eat, this.legs);
    };
    return Animal;
}());
var Animal1 = new Animal("Dog", 2, "brown", "bones", 4);
var Animal2 = new Animal("cat", 1, "blue", "fish", 4);
// method
Animal1.getAnimalDetail();
console.log(Animal2.color);
console.log(Animal1.legs);
