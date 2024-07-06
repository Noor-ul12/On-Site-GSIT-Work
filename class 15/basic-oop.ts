// OOP stand for Object Oriented Programming
// OOP is a programming paradigm that uses 
// objects and classes to model real-world entities and their relationships. 
// It is a fundamental paradigm of software development.

// 1. Object no reusability
const car ={
    model: "honda",
    color: " red",
    engine: "800cc",
    wheel: 4
};

const car2 = {
    model: "toyota",
    color: "blue",
    engine: "500cc",
    wheel: 4
};

// 2 class

class Car {
    model;  // property or atributes
    color;
    engine;
    wheel;

    // constractor invoke when an object is created with "new" keyword;
    constructor(m,c,e,w) {
        this.model = m;
        this.color = c;
        this.engine = e;
        this.wheel = w;
    }

    getCarDetail(){
        console.log(this.model, this.color,this.engine, this.wheel );
    }
}

const vehicle1 = new Car("Mehran", "green", "800cc", 4);
const vehicle2 = new Car("Civic", "white", "1000cc", 4);
const vehicle3 = new Car("Hino", "blue", "400cc", 4);
console.log(vehicle2.color, vehicle2.engine);
console.log(vehicle3.model);
console.log(vehicle1.engine);

vehicle1.getCarDetail();
vehicle2.getCarDetail();
vehicle3.getCarDetail();

console.log("--------------------------------------------");


class Animal {
    name;
    age;
    color;
    private eat;
    legs;

    constructor(
     n: string,
     a: number,
     c: string,
     e: string,
     l: number
    ) {
        this.name = n;
        this.age = a;
        this.color = c;
        this.eat = e;
        this.legs = l;
    }

    getAnimalDetail(){
        console.log(this.name, this.age, this.color, this.eat, this.legs);}
    }


const Animal1 = new Animal("Dog", 2, "brown", "bones",4);
const Animal2 = new Animal("cat", 1, "blue", "fish", 4);

// method

Animal1.getAnimalDetail();
console.log(Animal2.color);
console.log(Animal1.legs);