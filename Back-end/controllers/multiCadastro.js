const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demaiss minúsculas

module.exports = (app) => {

  const gen1 = [ 

      ]

gen1.forEach((pokemon)=>{

    const atr = attributes(pokemon);
    //console.log(atr)
    
    console.log("Nº de pokémons cadastrados: " + gen1.length)
    const obj = { ...pokemon, ...atr };
    //console.log(obj)
    //ManipulaDados.multiCadastro(obj);

})


};
