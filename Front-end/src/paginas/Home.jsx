

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
      <div>
       <h1 className="painel-destaque flex--centro">Welcome to the Pokémon Center!</h1>
      </div>
     
      

        
      



    </div>
    <SearchBar />
    </main>
  );
};

console.log(send());

export default Home;
