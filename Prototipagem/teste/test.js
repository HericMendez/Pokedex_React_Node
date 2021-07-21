const types = require('./types')

const attributes = (obj) => {
  let newType = {
    name: "",
    type: [],
    strong: [],
    weak: [],
  };

    types.filter((prop) => {
      for (let n in types) {
        if (obj.type[n] == prop.type) {
            newType.name = obj.name
            newType.type.push(obj.type[n]),
            newType.strong.push(...prop.strong)
            newType.weak.push(...prop.weak)
        }
      }
    });


  return newType;
};



const charmander = {
  name: "Charmander",
  type: ["fire"],
};

const bulbassaur = {
  name: "Bulbassaur",
  type: ["grass", "poison"],
};

console.log(attributes(bulbassaur));
console.log(attributes(charmander));




/*
Salvo para referência futura:

//javascript get intersection of two arrays:
function getArraysIntersection(a1,a2){
    return  a1.filter(function(n) { return a2.indexOf(n) !== -1;});
}
var colors1 = ["red","blue","green"];
var colors2 = ["red","yellow","blue"];
var intersectingColors=getArraysIntersection(colors1, colors2); //["red", "blue"]

console.log(intersectingColors)
*/
