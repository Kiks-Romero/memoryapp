import React from "react";
import "./Carta.css";
import ReactCardFlip from "react-card-flip";

const Carta = (props) => {
  return (
    <div className="carta" onClick={props.cerdo}>
      <ReactCardFlip
        isFlipped={props.estaSiendoComparada || props.fueAdivinada}
      >
        <div className="portada"></div>
        <div className="contenido">
          <i className={`fa ${props.icono} fa-5x`}></i>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Carta;
