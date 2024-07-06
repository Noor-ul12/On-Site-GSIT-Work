function checkWeather():Promise<void> {
    return new Promise((resolve, reject) => {

      console.log("checking the weather");

      setTimeout(() => {

        console.log("weather is ousome!");

        resolve();
        
      }, 500);
    });
}


function preparePizza(): Promise<void>{

    return new Promise((resolve, reject) => {
        
        console.log("prepareing pizza");

     setTimeout(() => {

        console.log("Pizza is ready");

        resolve();
     }, 1500);
    });
}

function packBags(): Promise<void>{

    return new Promise((resolve, reject) => {
        
        console.log("Paking staft like drinks, snakes and water bottles");

     setTimeout(() => {

        console.log("bags are ready");

        resolve();
     }, 2000);
    });
}

function loadCar(): Promise<void>{

    return new Promise((resolve, reject) => {
        
        console.log("loading the car");

     setTimeout(() => {

        console.log("car is loaded");

        resolve();
     }, 1000);
    });
}

/*checkWeather()
     .then(preparePizza)
     .then(packBags)
     .then(loadCar)
     .then(() => { console.log(" ready to go");})
     .catch((error) => { console.log(" Picnic Cencl");

     })*/
     
async function prepareingPicnic() {
    try {
        checkWeather();
        preparePizza();
        packBags();
        loadCar();

        console.log("we are ready to go to picnic");

    } catch (error) { 

        console.log("picnic cncl",error);
        
    }
}

prepareingPicnic();

console.log(" after picnic ");



    
