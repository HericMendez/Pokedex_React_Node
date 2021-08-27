import React from "react";
import image404 from "../assets/img/404.png";
import "../assets/css/404.css";

const Pagina404 = () => {
  return (
    <main className="container flex flex--centro flex--coluna">
                 <div style={{marginBottom: "100px"}}>
     <br/>
    </div>
      <img className="doguito-imagem" src={image404} alt="erro 404" />
      <p className="naoencontrado-texto">A wild error appeared!</p>
    </main>
  );
};

export default Pagina404