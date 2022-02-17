import React from "react";
import Carta from "./Carta";
import "./Tablero.css";

const Tablero = (props) => {
  return (
    <div className="tablero">
      {props.baraja.map((carta, i) => {
        const estaSiendoComparada =
          props.parejaSeleccionada.indexOf(carta) > -1;
        return (
          <Carta
            key={i}
            icono={carta.icono}
            estaSiendoComparada={estaSiendoComparada}
            selccionarCarta={() => props.seleccionarCarta(carta)}
            fueAdivinada={carta.fueAdivinada}
            cerdo={() => props.cerdo(carta)}
          />
        );
      })}
    </div>
  );
};

export default Tablero;
