import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/post.css";

import { busca } from "../api/api";




const PokemonProfile = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    busca(`/pokemon/${name}`, setPokemon);
  }, [name]);

  console.log(pokemon);
  return (
    <main className="container flex flex--centro">
      <article className="cartao post fixOverlap">
        <div className="row">
          <h3 className="cartao__titulo">{pokemon.name}</h3>
          <div className="painel flex--centro">
            <div className="col-md-6">
              <img
                className="imageid"
                src={`https://img.pokemondb.net/artwork/${pokemon.nameid}.jpg `}
                alt=""
              />
            </div>
            <div className="col-md-6 painel">
              <table>
                <tr>
                  <th>Pokédex Nº:</th>
                  <td>#{pokemon.number}</td>
                </tr>
                <tr>
                  <th>Generation</th>
                  <td>{pokemon.generation}</td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>{pokemon.type}</td>
                </tr>
                <tr>
                  <th>Species</th>
                  <td>{pokemon.species}</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{pokemon.height}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{pokemon.weight}</td>
                </tr>
                <tr>
                  <th>Ability</th>
                  <td>{pokemon.ability}</td>
                </tr>
              </table>
            </div>
          </div>
          <div>
            <p className="cartao__texto">{pokemon.description}</p>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="painel info-geral">
            <div className="col-md-6 cartao__texto half flex-centro">
              <table>
                <tr>
                  <th>
                    <h6 className="cartao__subtitulo red">Attack Attributes</h6>
                  </th>
                </tr>
                <tr>
                  <th className="center-txt">
                    {pokemon.name} Is super effective against:
                  </th>
                </tr>
                
                <tr>
                  <td className="center-txt">{pokemon.superEffective}</td>
                </tr>
                <br/>
                <tr>
                  <th className="center-txt">
                    {pokemon.name} Is not very effective against:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.notVeryEffective}</td>
                </tr>
                <br/>
                <tr>
                  <th className="center-txt">
                    And has no effect against the types:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.noEffect}</td>
                </tr>
              </table>
            </div>
            <div className="col-md-6 cartao__texto half">
              <table>
                <tr>
                  <th>
                    <h6 className="cartao__subtitulo blue">Defense Attributes</h6>
                  </th>
                </tr>
                <tr>
                  <th className="center-txt">
                    {pokemon.name} Is super effective against:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.resist}</td>
                </tr>
                <br/>
                <tr>
                  <th className="center-txt">
                    {pokemon.name} Is not very effective against:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.weak}</td>
                </tr>
                <br/>
                <tr>
                  <th className="center-txt">
                    And has no effect against the types:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.immune}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};
/*
      <h2 className="cartao__titulo">
          #{pokemon.number}: {pokemon.name}
        </h2>


      <article className="cartao post">
        <h2 className="cartao__titulo">
          #{post.number}: {post.name}
        </h2>
        <p className="cartao__texto">{post.type}</p>
        <p className="cartao__texto">{post.description}</p>
        
      </article>

*/
export default PokemonProfile;
/*
    
       <main>
 <div>
    <h4>Aqui vai o título</h4>
  </div>
  <div className="row">
  <div className="col-md-6">
    <img id="imageid" src="https://img.pokemondb.net/artwork/charmander.jpg" width="200px"alt="" />
  </div> 
  <div className="col-md-6">
    <ul>
      <li>Informações gerais</li>
      <li>Informações gerais</li>
      <li>Informações gerais</li>
      <li>Informações gerais</li>
      <li>Informações gerais</li>
      <li>Informações gerais</li>

    </ul>
  </div> 
</div>
<div className="row">
  <div className="col-md-6">
      <li>Informações defensivas</li> 
      <ul>
      <li>Informações defensivas</li> 
      <li>Informações defensivas</li> 
      <li>Informações defensivas</li> 
      <li>Informações defensivas</li> 
      <li>Informações defensivas</li> 
      <li>Informações defensivas</li> 
      </ul>
  </div> 
  <div className="col-md-6">
    <ul>
      <li>Informações de ataque/habilidade</li>
      <li>Informações de ataque/habilidade</li>
      <li>Informações de ataque/habilidade</li>
      <li>Informações de ataque/habilidade</li>
      <li>Informações de ataque/habilidade</li>
      <li>Informações de ataque/habilidade</li>
    </ul>
      
  </div> 
</div>

    </main>
    
    
    */
