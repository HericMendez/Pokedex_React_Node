class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.CriarPokeData();
  }

  CriarPokeData() {
    const sql =
      "CREATE TABLE IF NOT EXISTS Pokedata (id int NOT NULL AUTO_INCREMENT, nameid varchar(20) NOT NULL,generation int NOT NULL, number varchar(4) NOT NULL, name varchar(20) NOT NULL, species varchar(30) NOT NULL, type varchar(30) NOT NULL, ability varchar(100) NOT NULL, height varchar(8) NOT NULL, weight varchar (8) NOT NULL, superEffective varchar(100) NOT NULL, notVeryEffective varchar(100) NOT NULL, noEffect varchar(100) NOT NULL, resist varchar(100) NOT NULL, weak varchar(100) NOT NULL, immune varchar(100) NOT NULL,description text, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela 'Pokedata' criada com sucesso! ");
      }
    });
  }
}

module.exports = new Tabelas();
