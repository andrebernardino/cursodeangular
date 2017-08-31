"use strict";
/*
let message: string = "Helpe-me obi wan"
console.log(message);

let episode: number = 4

console.log("This is the episode number " + episode)

episode = episode + 1;
console.log("Next episode is " + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
favoriteDroid = '10'
console.log("My favorite droid is " + favoriteDroid)

let enoughtToBeatMF = function (parsercs: number): boolean {
    return parsercs < 12
}
let distance = 14
console.log(`is distance ${distance} The distance parsercs enought to hit millenium falcon? ${enoughtToBeatMF(distance)?'Sim':'Não'}`)
let call = (name: string) => console.log(`Do you copy, ${name}? `)
call('1')

function inc(speed: number, inc: number=1): number{
return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)

console.log(`inc(5) = ${inc(5)}`)*/
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighter_1 = require("./starfighter");
var _ = require("lodash");
console.log(_.pad("Typescript Events", 40, "="));
var ship = new base_ships_1.Spacecraft("hyperdrive");
ship.jumpIntoHyperspace();
var falcon = new starfighter_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job?" + (goodForTheJob(falcon) ? 'Yes' : 'No'));
