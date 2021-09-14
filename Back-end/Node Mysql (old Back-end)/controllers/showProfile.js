const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demais minúsculas

module.exports = (app) => {


  //Busca pokémons pelo nome (Rota GET):
  app.get("/pokemon/:name", (req, res) => {
    const nameid = req.params.name;

    
    ManipulaDados.exibeNome(nameid, res);
  });

 
};
