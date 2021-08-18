const types = require('./typeData')

const attributes = (obj) => {
  let newType = {
    number: 0,
    name: "",
    type: [],
    ability:"",
    height: 0.0,
    weight: 0.0,
    superEffective: [],
    notVeryEffective: [],
    noEffect: [],
    resist: [],
    weak: [],
    immune: []

  };
    

    //Formata o array e o transforma em string
    const format = (variable) =>{
      let formatted;
      
      if(variable == "" || variable.length == 0 ){
        formatted ="None"
        //Se o array for vazio ou undefined, substitui por "None"
      }
      else{
        formatted =  [...new Set(variable)]
        /*Remove os valores duplicados se o tamanho do array for 
        maior ou igual a 1*/

      }

      return formatted.toString().replace(/,/g, ', ')

    }//formata o número da pokédex para o formato "#00x"
    function pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    }
   

    //concatena dois ou mais objetos se possuírem o mesmo prop. value "type":
    
    types.filter((prop) => {
      for (let n in types) {
        if (obj.type[n] == prop.type) {
            if(obj.number!=undefined) newType.number = pad(obj.number, 3);
            newType.name = obj.name;
            
            newType.type.push(obj.type[n])

            newType.ability = obj.ability;
            
            if(obj.height!=undefined) newType.height = obj.height.toFixed(1) + "m";
            if(obj.weight!=undefined)newType.weight = obj.weight.toFixed(1) + "kg"
            
            newType.superEffective.push(...prop.superEffective);
            newType.notVeryEffective.push(...prop.notVeryEffective);
            newType.noEffect.push(...prop.noEffect);
            
            newType.resist.push(...prop.resist);
            newType.weak.push(...prop.weak);
            newType.immune.push(...prop.immune);


            newType.description = obj.description;

        }

      }
    });

    if(newType.name == "" || newType.name == undefined){
      newType.name = "No Name"
    }

    newType.type = format(newType.type);
    newType.ability = format(newType.ability);
    newType.superEffective = format(newType.superEffective);
    newType.notVeryEffective = format(newType.notVeryEffective);
    newType.noEffect = format(newType.noEffect);
    newType.resist = format(newType.resist);
    newType.weak = format(newType.weak);
    newType.immune = format(newType.immune);

    if(newType.description == "" || newType.description == undefined){
      newType.description = "No Description"
    }

  return newType;
};

module.exports = attributes;
/*
const charmander = {
  number: 4,
  name: "Charmander",
  type: ["Fire"],
  height: 0.6,
  weight: 8.5,
  ability:["Blaze", "Solar Power(hidden)"],
  description:"Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
};

const bulbassaur = {
  number: 001,
  name: "Bulbassaur",
  type: ["Grass", "Poison"],
  height: 1.0,
  weight: 13.0,
  ability:["Overgrow", "Chlorophyl(hidden)"],
  description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
};

const squirtle = {
  name: "Squirtle",
  type: ["Water"],
  ability:[""]
};



console.log(attributes(squirtle));

console.log(attributes(charmander));
console.log(attributes(bulbassaur));
*/