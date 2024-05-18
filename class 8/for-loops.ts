// basic syntax for loop

// for (initalization; condition; incriment/decrement) {
// statemnt
// }

// initilization means where the loop start
//  condition is used to  check if the loop shuld continue
//  increment or decrement is use to update the value of i

// simlpe for loop to print 0 to 100 number

for (let i = 0; i < 100; i++) {
  console.log(i);
}

console.log("--------------------------------------");

//simple  for loop  that will print "i will come home before 12am" 100 time

for (let i = 0; i < 100; i++) {

    console.log("i will come home before 12am");
}

console.log("------------------------------------");

// for loop that will print table 5

for (let i = 1; i <=10; i++) { 
   let tableNumber: number =5
    console.log(tableNumber, "x" ,i , "=", tableNumber * i);
}

// array is use to store multipule value in singale variable

const cars = [ "BMW" , "toyota" , "ford" , "Hino pak" ,"suzuki"];

let dataLenth = cars.length;

for ( let i = 0; i < dataLenth; i++) {
  console.log("dataLenth" , dataLenth);

  console.log( i, "my cars is" ,cars[i]);
}