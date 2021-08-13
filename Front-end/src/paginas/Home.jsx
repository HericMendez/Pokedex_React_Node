
import PokeList from "../components/PokeList/PokeList";


import SearchBar from "../components/SearchBar/SarchBar";

function send(dados){



  return dados;

}

const pokemon = "Blastoise"


const Home = () => {

  return (

    /*
        <main>
      <div className="container">
        <h2 className="titulo-pagina">Welcome to the Pokémon Center!</h2>

        <h2 className="titulo-pagina">
        

         
        </h2>

      </div>
      <PokeList url={`/list/${pokemon}`} />
    </main>
    */
    <main>
     <SearchBar />
    </main>
  );
};

console.log(send())

export default Home;
