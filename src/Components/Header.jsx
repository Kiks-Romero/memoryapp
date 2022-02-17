import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <header>
      <div className="titulo">Memory Game</div>
      <div>
        <button className="button-reiniciar" onClick={props.resetearPartida}>
          Reiniciar
        </button>
      </div>

      <div className="titulo">Intentos:{props.numeroDeIntentos}</div>
    </header>
  );
};

export default Header;
