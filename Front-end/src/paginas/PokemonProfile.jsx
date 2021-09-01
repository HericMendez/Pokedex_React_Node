import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../assets/css/post.css";

import { busca } from "../api/api";

const PokemonProfile = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    busca(`/pokemon/${name}`, setPokemon);
  }, [name]);

  const url = `/list/`;

  useEffect(() => {
    busca(url, setList);
  }, [url]);

  var pos = list
    .map(function (e) {
      return e.name;
    })
    .indexOf(pokemon.name);
  let prev = "";
  let next = "";
  let prevLink = "";
  let nextLink = "";

  if (pos != undefined && pos != -1) {
    //console.log(list[pos-1])
    //  console.log(list[pos+1])
    //console.log(list[list.length-1])

    if (pos != 0) {
      prev = list[pos - 1].nameid;
      prevLink = `← ${list[pos - 1].name}`;
    }
    if (pos < list.length - 1) {
      next = list[pos + 1].nameid;
      nextLink = `${list[pos + 1].name} →`;
    }
  }

  return (
    <main className="container flex flex--centro">
      <article className="cartao post fixOverlap">
        <div className="row">
          <div className="profile-title">
            <p>
              <Link to={`/pokemon/${prev}`}>{prevLink}</Link>
            </p>
            <h3 className="cartao__titulo">{pokemon.name}</h3>
            <p>
              <Link to={`/pokemon/${next}`}>{nextLink}</Link>
            </p>
          </div>

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
                <br />
                <tr>
                  <th className="center-txt">
                    {pokemon.name} Is not very effective against:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.notVeryEffective}</td>
                </tr>
                <br />
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
                    <h6 className="cartao__subtitulo blue">
                      Defense Attributes
                    </h6>
                  </th>
                </tr>
                <tr>
                  <th className="center-txt">
                     Those types are not very effective against {pokemon.name}:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.resist}</td>
                </tr>
                <br />
                <tr>
                  <th className="center-txt">
                  Are super-effective against {pokemon.name}:
                  </th>
                </tr>
                <tr>
                  <td className="center-txt">{pokemon.weak}</td>
                </tr>
                <br />
                <tr>
                  <th className="center-txt">
                  And it is immune agains those types:
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


export default PokemonProfile;
