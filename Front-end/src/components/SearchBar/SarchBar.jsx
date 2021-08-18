import { useState } from "react";
import "./searchbar.css";
//import { Dropdown, Menu,  } from 'semantic-ui-react'
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import PokeList from "../PokeList/PokeList";

const SearchBar = ({ send }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [gen, setGen] = useState("");



  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">
          <form
            className="input-form"
            onSubmit={(event) => {
              event.preventDefault();
              console.log(name);
              //send(name)
            }}
            onBlur={(event)=>{
              setType(event.target.value = "")

            }}
          >
            <input
              className="input-search"
              value={name}
              onChange={(event) => {
                

                //setLink(`/search/${name}`);
                setName(event.target.value);
              
              }}
              type="text"
              id="name"
              placeholder="Search Pokémon by name..."
            />
                        <input
            className="type-search"
              list="types"
              name="type"
              id="type"
              placeholder="Or by type..."
              value={type}
              
              onChange={(event) => {
                setType(event.target.value);
   

              }}

              
            />
            <input
              className="type-search"
              list="generations" 
              value={gen}

              onChange={(event) => {
                setGen(event.target.value);
                setType("")
                setName("")

              }}
              
              id="gen"
              placeholder="Or by gen..."

              
            />


            <datalist id="types">
              <option default value="Normal "/>
              <option value="Fire " />
              <option value="Water " />
              <option value="Grass " />
              <option value="Flying " />
              <option value="Fighter " />
              <option value="Poison " />
              <option value="Electric " />
              <option value="Ground " />
              <option value="Rock " />
              <option value="Psychic " />
              <option value="Ice " />
              <option value="Bug " />
              <option value="Ghost " />
              <option value="Steel " />
              <option value="Dragon " />
              <option value="Dark " />
              <option value="Fairy " />
            </datalist>

            <datalist id="generations">

              <option id="1" value="1" />
              <option id="2" value="2" />
              <option id="3" value="3" />
             
            </datalist>
          </form>
        </h2>
      </div>

      <PokeList url={`/search/${name}`} />
      <PokeList url={`/list/type/${type}`} />
      <PokeList url={`/list/gen/${gen} `} />

      {console.log(`/list/gen/${gen}`)}
    </>
  );
};

export default SearchBar;
