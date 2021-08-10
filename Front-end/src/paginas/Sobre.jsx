


import '../assets/css/componentes/cartao.css'

const Sobre = () => {

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sobre o Projeto</h2>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao">
          <p>
             O projeto Pokédex-React-Node é um projeto desenvolvido para fins didáticos,
          com o objetivo de aprender e aplicar as tecnologias React.js e Node.js
          </p>
          <br></br>
          <p>
           <a target='_blank' rel='noreferrer' href='https://github.com/HericMendez/Pokedex_React_Node'><strong>Link para o projeto no GitHub</strong></a>
          </p>
         

        </article>
        
      </section>
    </main>
  )
}

export default Sobre
