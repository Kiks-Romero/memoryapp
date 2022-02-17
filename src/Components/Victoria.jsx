import React from "react";
import "./Victoria.css";

const Victoria = (props) => {
  return (
    <div className="Victoria">
      <h2>¡Victoria!</h2>
      <p>Ganaste en {props.numeroDeIntentos} intentos</p>
      <p>Bien Jugado</p>
    </div>
  );
};

export default Victoria;
