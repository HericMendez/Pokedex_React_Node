import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { busca } from "../../api/api";


const PokeList = ({ url }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    busca(url, setPosts);
  }, [url]);

  const firstType = (str) => {
    let type = str.split(/[ ,]+/);

    return type[0];
  };

  if (!Array.isArray(posts)) {
    console.log("deu ruim");

    console.log(posts);
  }

  return (

      <section className="posts container" id="scrollableDiv">
        {posts.map((post, index) => (
          <Link
            className={`cartao-post cartao-post--${firstType(post.type)}`}
            to={`/pokemon/${post.nameid}`}
          >
            <div className="toTheLeft">
              <img
                className="cartao__img"
                src={`https://img.pokemondb.net/artwork/${post.nameid}.jpg`}
                alt="Faiô"
              ></img>
            </div>

            <div className="toTheRight">
              <article key={index}>
                <h4 className="cartao-post__titulo">
                  #{post.number}
                  <br></br> {post.name}
                </h4>
                <p className="cartao-post__meta">{post.species}</p>

                <p className="cartao-post__meta">Type: {post.type}</p>
              </article>
            </div>
          </Link>
        ))}
      </section>

  );
};

export default PokeList;
