"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function checkWeather() {
    return new Promise((resolve, reject) => {
        console.log("checking the weather");
        setTimeout(() => {
            console.log("weather is ousome!");
            resolve();
        }, 500);
    });
}
function preparePizza() {
    return new Promise((resolve, reject) => {
        console.log("prepareing pizza");
        setTimeout(() => {
            console.log("Pizza is ready");
            resolve();
        }, 1500);
    });
}
function packBags() {
    return new Promise((resolve, reject) => {
        console.log("Paking staft like drinks, snakes and water bottles");
        setTimeout(() => {
            console.log("bags are ready");
            resolve();
        }, 2000);
    });
}
function loadCar() {
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
function prepareingPicnic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            checkWeather();
            preparePizza();
            packBags();
            loadCar();
            console.log("we are ready to go to picnic");
        }
        catch (error) {
            console.log("picnic cncl", error);
        }
    });
}
prepareingPicnic();
console.log(" after picnic ");
