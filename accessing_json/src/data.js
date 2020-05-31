const animals= [
    { name: "cat",
      sound: "meow",
      requirements: {
        food: 2,
        water: 3
      }

    },
    {
        name:"dog",
        sound:"bark"
    }
];

function UseAnimals(animals){
  return [
    animals.name,
    function(){
      console.log(animals.sound)
    }
  ];
}


export default animals;
export {UseAnimals};