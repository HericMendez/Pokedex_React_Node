import PokeList from "../components/PokeList/PokeList";

import SearchBar from "../components/SearchBar/SarchBar";

function send(dados) {
  return dados;
}


const Home = () => {
  return (
    <main >
     <div style={{marginBottom: "100px"}}>
     <br/>
    </div>
    <div className="container">
      <h2 className="titulo-pagina flex--centro">Welcome to the Pokémon Center!</h2>


    </div>
    <SearchBar />
    </main>
  );
};

console.log(send());

export default Home;
