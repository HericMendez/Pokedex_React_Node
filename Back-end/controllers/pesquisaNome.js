const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demais minúsculas

module.exports = (app) => {


  //Busca pokémons pelo nome (Rota GET):
  app.get("/pokedex/:name", (req, res) => {
    const name = req.params.name;

    nameCap = primeiraLetraMaiuscula(name);
    ManipulaDados.buscaNome(nameCap, res);
  });

 
};
