const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demais minúsculas

module.exports = (app) => {


  //Busca pokémons pelo nome (Rota GET):
  app.get("/list/", (req, res) => {
    ManipulaDados.lista(res);
  });

  //Busca pokémons pelo número da id no banco de dados (Rota GET):
  app.get("/list/:name", (req, res) => {
    const id = parseInt(req.params.id);
    ManipulaDados.buscaId(id, res);
  });

 
};
