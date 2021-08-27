const conexao = require("../infraestrutura/conexao");

class ManipulaDados {
  adiciona(pokemon, res) {
    const sql = "INSERT INTO Pokedata SET ?";

    conexao.query(sql, pokemon, (erro, results) => {
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(201).json(pokemon);
        console.log(results);

      }
    });
  }

  multiCadastro(pokemon) {
    const sql = `INSERT INTO Pokedata SET ?`;

    conexao.query(sql, pokemon, (erro, results) => {
      if (erro) {

        console.log(erro);
      } else {

        console.log(results);
        console.log(pokemon);
      }
    });
  }

  lista(res) {
    const sql = "SELECT * FROM Pokedata;";

    conexao.query(sql, (erro, results) => {
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(results);

      }
    });
  }

  buscaId(id, res) {
    const sql = `SELECT * FROM Pokedata WHERE id=${id}`;

    conexao.query(sql, (erro, results) => {
      const pokemonId = results[0];
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(pokemonId);
        console.log(results);
      }
    });
  }

  buscaNumero(number, res) {
    const sql = `SELECT * FROM Pokedata.Pokedata WHERE number = "${number}";`;

    conexao.query(sql, (erro, results) => {
      const num = results[0];
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(num);
        console.log(results);
      }
    });
  }

  buscaGen(gen, res) {
    const sql = `SELECT * FROM Pokedata.Pokedata WHERE generation = "${gen}";`;

    conexao.query(sql, (erro, results) => {
      const gen = results;
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(gen);

      }
    });
  }

  exibeNome(nameid, res) {
    const sql = `SELECT * FROM Pokedata.Pokedata WHERE nameid = "${nameid}";`;

    conexao.query(sql, (erro, results) => {
      const nameid = results[0];
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(nameid);
        console.log(results);
      }
    });
  }


  buscaNome(name, res) {
    const sql = `SELECT * FROM Pokedata.Pokedata WHERE name like "%${name}%";`;

    conexao.query(sql, (erro, results) => {
      const name = results;
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(name);

      }
    });
  }

  buscaTipo(type, res) {
    const sql = `SELECT * FROM Pokedata.Pokedata WHERE type like '%${type}%';`;

    conexao.query(sql, (erro, results) => {
      const type = results;
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(type);

      }
    });
  }

  buscaNomeId(nameid, res) {
    const sql = `SELECT * FROM Pokedata.Pokedata WHERE nameid = "${nameid}";`;

    conexao.query(sql, (erro, results) => {
      const nameid = results;
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json(nameid);
        console.log(results);
      }
    });
  }

  altera(id, values, res) {
    const sql = "UPDATE Pokedata SET ? WHERE id=?";

    conexao.query(sql, [values, id], (erro, results) => {
      if (erro) {
        res.status(400).json(erro);
        console.log(erro);
      } else {
        res.status(200).json({ ...values, id });
        console.log(results);
      }
    });
  }

  deleta(id, res, name) {
    const sql = "DELETE FROM Pokedata WHERE id=?";

    conexao.query(sql, id, (erro, results) => {
      if (erro) {
        res.status(400).json(erro);
      } else {
        res.status(200).json(`Registro ${id} removido do banco de dados!`);
      }
    });
  }
}

module.exports = new ManipulaDados();
