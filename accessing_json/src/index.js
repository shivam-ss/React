import React from 'react';

import animals, {UseAnimals} from "./data"

//console.log(animals);

const [cat,dog]=animals;

console.log(cat)
console.log(dog)

const {name,sound,requirements: {food,water}}=cat;
console.log(name);
console.log(sound);
console.log(food);
console.log(water)

const {name2= "default", sound2="default"} =dog;
console.log(name2);
console.log(sound2);

const [animal,makesound]=UseAnimals(cat)
console.log(animal)
makesound();


