import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //Entrada / Rodando / Fim
  const [estado, setEstado] = useState("Entrada");
  const [palpite, setPalpite] = useState(50);
  const [numPalpites, setNumPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const IniciarJogo = () => {
    setEstado("Rodando");
    setMin(0);
    setMax(100);
    setNumPalpites(1);
    setPalpite(50);
  };

  const Menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const Maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2 + palpite);
    setPalpite(proxPalpite);
  };

  const Acertou = () => {
    setEstado("Fim");
  };

  if (estado === "Entrada") {
    return (
      <div>
        <p>Pense em Número entre 0 a 100 e aperte o botão abaixo :</p>
        <button onClick={IniciarJogo}>Play</button>
      </div>
    );
  } else if (estado === "Rodando") {
    return (
      <div className="App">
        <p>O seu número é {palpite} ?!</p>
        <button onClick={Menor}>Menor</button>
        <button onClick={Acertou}>Acertou!</button>
        <button onClick={Maior}>Maior</button>
      </div>
    );
  } else if (estado === "Fim") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numPalpites} chutes!
        </p>
        <button onClick={IniciarJogo}> retry </button>
      </div>
    );
  } else {
    <div className="">
      <p> Error 404 </p>
    </div>;
  }

  // 0 => 100
  // palpites da maquina
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
