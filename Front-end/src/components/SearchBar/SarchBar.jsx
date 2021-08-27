import { useState } from "react";

import "./searchbar.css";

import PokeList from "../PokeList/PokeList";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const [resultMsg1, setResultMsg1] = useState("");
  const [resultMsg2, setResultMsg2] = useState("");

  const [clearBtn, setClearBtn] = useState("");



var hr = '<hr/>'


  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina  flex--centro">
          <form
            className="input-form"
            onChange={(event) => {
              event.preventDefault();
              console.log(event.target.value);
            }}
            onBlur={(event) => {
              setName((event.target.value = ""));
              setType((event.target.value = ""));
            }}
          >
            <input
              className="input-search"
              value={name}
              autoComplete="off"
              onChange={(event) => {
                //setLink(`/search/${name}`);

                setName(event.target.value);
                setClearBtn( <button className="blue" onClick={()=>window.location.reload()}> Clear Results </button>)

                /*
                             if (event.target.value != "") {
                  setResultMsg1(`Showing results for ${event.target.value}`);
                } else {
                  setResultMsg1("");
                }
                */
                if (event.target.value != "") {
                  setResultMsg1(
                    `Showing results for "${event.target.value}"`
                  );
                  
                } else {
                  setResultMsg1("");
                }
   
              }}
              type="text"
              id="name"
              placeholder="Search Pokémon by name..."
            />
            <input
              className="input-search"
              type="input"
              list="types"
              name="type"
              id="type"
              autoComplete={false}
              placeholder="Or by type..."
              value={type}
              onChange={(event) => {
                setType(event.target.value);
                setClearBtn( <button className="blue" onClick={()=>window.location.reload()}> Clear Results </button>)

                if (event.target.value != "") {
                  setResultMsg2(
                    //cartao-post--${firstType(post.type)}`
                    `Showing results for ${event.target.value} type Pokémon`
                  );
                 
                } else {
                  setResultMsg2("");
                }
              }}
            />

            <datalist id="types">
              <option default value="Normal " />
              <option name="fire" value="Fire" />
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
          </form>
          
        </h2>
        <div className="container flex flex--centro" style={{marginTop: "-20px"}}>
           <span className="cartao__texto ">
        {resultMsg1}<br/><hr/>{resultMsg2} <br/>{clearBtn}
      </span>
        </div>
    

      </div>
 
      <PokeList url={`/list/name/${name}`} />
      <br/>
      <br/>
      <br/>
              
      <PokeList url={`/list/type/${type}`} />
      <br/>

    </>
  );
};

export default SearchBar;
