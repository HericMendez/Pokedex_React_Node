const conexao = require('../infraestrutura/conexao');

class QuemEhEssePokemon {
    adiciona(pokemon){
        const sql = 'INSERT INTO Pokedata SET ?';

        conexao.query(sql, pokemon,(erro, results)=>{
            if(erro){
                console.log(erro);
            }else{
                console.log(results);
            }
        });
    };
};

module.exports = new QuemEhEssePokemon;