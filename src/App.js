import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import Tablero from "./Components/Tablero";
import construirBaraja from "./Components/utils/construirBaraja";
import Victoria from "./Components/Victoria";

function App() {
  const [baraja, setBaraja] = useState(construirBaraja());
  const [parejaSeleccionada, setParejaSeleccionada] = useState([]);
  const [estaComparando, setEstaComparando] = useState(false);
  const [numeroDeIntentos, setNumeroDeIntentos] = useState(0);
  const [ganador, setGanador] = useState(0);

  const cerdo = (carta) => {
    if (
      estaComparando || //revisa si no esta en proceso de comparacion
      parejaSeleccionada.indexOf(carta) > -1 || //revisa que no sea la carta que estas comparando
      carta.fueAdivinada //revisa que no ya este entre las correctas
    ) {
      return;
    }

    const pareja = [...parejaSeleccionada, carta];

    setParejaSeleccionada(pareja);
  };

  function compararPareja() {
    setEstaComparando(true);

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;

      let mazo = baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        mazo = mazo.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }
          return { ...carta, fueAdivinada: true };
        });
        setBaraja(mazo);
        setGanador(ganador + 1);
      }

      setParejaSeleccionada([]);
      setEstaComparando(false);
      setNumeroDeIntentos(numeroDeIntentos + 1);
    }, 1000);
  }

  function resetearPartida() {
    setParejaSeleccionada([]);
    setBaraja(construirBaraja());
    setEstaComparando(false);
    setNumeroDeIntentos(0);
    setGanador(0);
  }

  return (
    <div className="App">
      <Header
        numeroDeIntentos={numeroDeIntentos}
        resetearPartida={() => resetearPartida()}
      />
      {parejaSeleccionada.length === 2 &&
        !estaComparando &&
        compararPareja(parejaSeleccionada)}

      {ganador === 10 ? (
        <Victoria numeroDeIntentos={numeroDeIntentos} />
      ) : (
        <Tablero
          baraja={baraja}
          parejaSeleccionada={parejaSeleccionada}
          cerdo={(carta) => cerdo(carta)}
        />
      )}
    </div>
  );
}

export default App;
