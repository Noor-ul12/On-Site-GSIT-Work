let carName: "Civic";  // simple way of storing data in variable

// simple object

const car = {
// key     : value    

name: "Mercedes",
color: "white",
year: 2020,
engine: 2.0,
price: `$20000`,
Instoke: true,
avalableColor: ["Red","Blue","green"]

}

console.log(car);  // log whole object

console.log("-------------------------------");

const person = {

    name:" Noor ul huda",
    age: 30,
    city: "Karachi",
    country: "Pakistan",
    married: true,
    cars:[" suzuki", "Honda","Hino pak"]
}
 
console.log(person);  // log whole object
console.log(person.city);   // log person properties
console.log( person[`cars`]);  // an other way to get object propeerties
console.log(person.cars[1]);   // log object properties's array index


console.log("--------------------");

const person2= {

    // key : value

    firstName: "Noor ul",
    lastName: "Huda",
    age: 29,
    country: "Pakistan",
    city: "Karachi",
    married: true,
    fullName: function(){
        console.log(`any thing`, this);  // log this object
        console.log(this.firstName+ " " + this.lastName);
    },
    getBirthYear: () =>{   // arraw function will return NaN

        console.log(this);   // log this object

        console.log(`age`, this.age);  // log undefine becouse arraw function

        return 2024 - this.age;  // return NaN

    }
}

//   invoke person2 method

person2.fullName();

//  invoke person2 method

console.log(person2.getBirthYear()); // will return NaN bcz of arrow function

// update person2 properties

person2.age = 25;

console.log(person2);

console.log("------------------------");

const pet: {
    name: string,
    color: string,
    age: number,
    food: string,
    eat:() => void
} ={
   name:"Oreo",
   color:"Black",
   age: 2,
   food: "Milk",
   eat: function(){
    console.log(`I am eating`, this.food);  // log food property
   }
} 

console.log(pet);

console.log("------------------------------");

const pet2: {
    name: string,  // requried property
    color: string,
    age: number,
    food: string,
    eat?: () => void  // optional property
} ={
    name: "Mane",
    color: "white",
    age: 3,
    food: "fish"
}

console.log(pet2.age);  // log age property

console.log("--------------------");

//  define constum object type

type Age = string | number; // costom type for age

 const Age: Age = 24;

 console.log("----------------------------");

 type pet ={
    name: string,  // requried property
    color: string,
    age: number,
    food: string,
    eat?: () =>  void  // optional 
 } 

 const pet3 = {
    name: "Tom",
    color: "gray and white",
    age: 5,
    food: "Jerry"
 }

 console.log(pet3);

 console.log("------------------------------------");

 const pet4 ={
    name: "Jerry",
    color: "Brown",
    age: 4,
    food: "cheese",
    eat: function(){
        console.log(`I am eating`, this.food);  // log food property
    }
 }
  if (pet4){
    pet4.eat();
  }

  interface human {
    name: string,
    age: number,
    sleep: () => void,
    legs: number,
    hands: number
  }

  const jhon: human ={
    name: "jhon",
    age: 24,
    sleep: () => {

        console.log(`I am slpeeing`);
    },
    legs: 2,
    hands: 2

  }
   
  console.log(jhon);

  console.log("----------------------------------");

  interface SuperHero extends human {
    superPower: string,
    heroName: string
  }

   const spiderMan: SuperHero ={
    name: "Peetr Parker",
    age: 30,
    sleep: () => {
        console.log(`I am seeping`);
    },
    legs: 2,
    hands: 2,
    superPower: "Sprider Sense and Web Sense",
    heroName: "Spider Man"
   }

   console.log(spiderMan);
 console.log(spiderMan.heroName);

 
   