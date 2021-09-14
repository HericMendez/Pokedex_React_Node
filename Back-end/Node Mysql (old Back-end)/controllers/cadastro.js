const ManipulaDados = require("../models/manipulaDados");
const attributes = require("../data/attributes");
const primeiraLetraMaiuscula = require("./formataString");

//Torna primeira letra maiúscula e as demais minúsculas

module.exports = (app) => {


  //Cadastra novos pokémons (Rota POST):
  app.post("/register", (req, res) => {
    const pokemon = req.body;
    const atr = attributes(pokemon);
    const obj = { ...pokemon, ...atr };

    ManipulaDados.adiciona(obj, res);

    res.statusCode = 200;
  });

  //Altera os dados da id do pokémon cadastrado (Rota PATCH):
  app.patch("/register/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const values = req.body;
    const patchedValues = attributes(values);
    ManipulaDados.altera(id, patchedValues, res);
  });

  //Apaga os dados da id do pokémon cadastrado (Rota DELETE):
  app.delete("/register/:id", (req, res) => {
    const id = parseInt(req.params.id);
    ManipulaDados.deleta(id, res);
  });
};
