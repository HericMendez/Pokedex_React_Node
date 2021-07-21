const QuemEhEssePokemon = require('../models/quemEhEssePokemon')

module.exports = (app) => {
const obj = {
    "nome":"Usuário",
    "msg":"Bem-vindo"
}

  app.get('/home', (req, res) => {
    res.send(`${obj.msg}, ${obj.nome}!`);
    res.statusCode = 200;
  });

  app.post('/home', (req, res) => {
    const pokemon = req.body;
    QuemEhEssePokemon.adiciona(pokemon)
    res.send(`Pokémon #${pokemon.numero_pokedex}: ${pokemon.nome}`);
    res.statusCode = 200;
  });
};
