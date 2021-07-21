class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.CriarPokeData();
  }

  CriarPokeData() {
    const sql =
      "CREATE TABLE IF NOT EXISTS pokedata (id int NOT NULL AUTO_INCREMENT,number int NOT NULL, name varchar(20) NOT NULL, type varchar(30) NOT NULL, ability varchar(30) strong varchar(100) NOT NULL, weak varchar(100) NOT NULL, description text, PRIMARY KEY(id))";

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.log(erro);
      } else {
        console.log("Tabela 'pokedata' criada com sucesso! ");
      }
    });
  }
}

module.exports = new Tabelas();
