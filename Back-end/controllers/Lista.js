const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demais minúsculas

module.exports = (app) => {


  //exibe todos os pokemons:):
  app.get("/list/", (req, res) => {
    ManipulaDados.lista(res);

    
  });

  app.get("/list/gen/:gen", (req, res) => {
    const gen = req.params.gen;

    ManipulaDados.buscaGen(gen,res);
  });

  app.get("/list/name/:name", (req, res) => {
    const name = req.params.name;

    ManipulaDados.buscaNome(name,res);
  });

  app.get("/list/type/:type", (req, res) => {
    const type = req.params.type;

    ManipulaDados.buscaTipo(type,res);
  });

  

 
};
