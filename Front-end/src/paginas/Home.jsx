

import SearchBar from "../components/SearchBar/SarchBar";


const Home = () => {
  return (
    <main >
     <div style={{marginBottom: "80px"}}>
     <br/>
    </div>
    <div className="container">
      <div>
       <h1 className="titulo-pagina  flex--centro">Welcome to the Kanto Pokédex!</h1>
      </div>


    </div>
    <SearchBar />
    </main>
  );
};


export default Home;
