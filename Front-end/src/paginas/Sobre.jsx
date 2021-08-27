import '../assets/css/componentes/cartao.css'



const Sobre = () => {
  
  return (
    <main>
           <div style={{marginBottom: "80px"}}>
     <br/>
    </div>
    <div className="container">
        <h2 className="titulo-pagina flex--centro">About the Project</h2>
      </div>
    <section className="container flex flex--centro">
      
        <article className="cartao post">
          <p className="flex flex--centro">

Pokédex-React-Node is a project developed for educational purposes, with the objective of learning and applying the React.js and Node.js technologies.
          </p>
          <br></br>
          <p>
           <a className="red" target='_blank' rel='noreferrer' href='https://github.com/HericMendez/Pokedex_React_Node/tree/save-point'><strong>Link to the Github repository</strong></a>
          </p>
         

        </article>
        
      </section>



    </main>
  )
}

export default Sobre