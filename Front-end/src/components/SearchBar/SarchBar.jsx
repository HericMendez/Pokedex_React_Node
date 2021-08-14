import { useState} from "react";
import "./searchbar.css";
import PokeList from "../PokeList/PokeList";


const SearchBar = ({send}) => {
  const [name, setName] = useState("");


  return (
    <>
    <div className="container">
      <h2 className="titulo-pagina flex--centro">Welcome to the Pokémon Center!</h2>

      <h2 className="titulo-pagina">
      
      <form
      className="input-search"

      onSubmit={(event) => {
        event.preventDefault();
        console.log(name)
        //send(name)
      }}
    >
      <label htmlFor="input-search">
        <span className="visually-hidden"></span>
      </label>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        id="name"
        placeholder="Search Pokémon name..."
        
      />


      
    </form>
       
      </h2>

    </div>
    <PokeList url={`/search/${name}`} />
  </>



  );
};

export default SearchBar;
