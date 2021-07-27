const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");
const manipulaDados = require("../models/manipulaDados");
//Torna primeira letra maiúscula e as demais minúsculas

module.exports = (app) => {
  //Lista todos os pokémons (Rota GET):
  app.get("/home", (req, res) => {
    ManipulaDados.lista(res);
  });

  //Busca pokémons pelo número da id no banco de dados (Rota GET):
  app.get("/home/:id", (req, res) => {
    const id = parseInt(req.params.id);
    ManipulaDados.buscaId(id, res);
  });

  //Busca pokémons pelo nome (Rota GET):
  app.get("/pokemon/:name", (req, res) => {
    const name = req.params.name;

    nameCap = primeiraLetraMaiuscula(name);
    ManipulaDados.buscaNome(nameCap, res);
  });

  //Busca pokémons pelo número da Pokédex(Rota GET):
  app.get("/number/:number", (req, res) => {
    const number = req.params.number;
    ManipulaDados.buscaNumero(number, res);
  });

  //Cadastra novos pokémons (Rota POST):
  app.post("/home", (req, res) => {
    const pokemon = req.body;
    const atr = attributes(pokemon);
    const obj = { ...pokemon, ...atr };

    ManipulaDados.adiciona(obj, res);

    res.statusCode = 200;
  });

  //Altera os dados da id do pokémon cadastrado (Rota PATCH):
  app.patch("/home/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;
    const patchedValues = attributes(values);
    manipulaDados.altera(id, patchedValues, res);
  });

  //Apafa os dados da id do pokémon cadastrado (Rota DELETE):
  app.delete("/home/:id", (req, res) => {
    const id = parseInt(req.params.id);
    manipulaDados.deleta(id, res);
  });
};
