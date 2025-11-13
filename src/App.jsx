import "./App.css";
import freeCodeCampLogo from "./imgs/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Panatalla from "./components/Panatalla";
import BotonClear from "./components/BotonClear";

import { useState } from "react";

function App() {

  const [input, setInput] = useState ('');

  const agregarInput = (val) => {
    setInput(input + val);
  };

  return (
    <>
        <div className="freecodecamp-logo-contenedor">
          <img 
            src= {freeCodeCampLogo} 
            className="freecodecamp-logo" 
            alt="Logo de freecodecamp" 
            />
        </div>
        <div className="contenedor-calculadora">
          <Panatalla input={input}/>
          <div className="fila">
            <Boton>1</Boton>
            <Boton>2</Boton>
            <Boton>3</Boton>
            <Boton>+</Boton>
          </div>

          <div className="fila">
            <Boton>4</Boton>
            <Boton>5</Boton>
            <Boton>6</Boton>
            <Boton>-</Boton>
          </div>

          <div className="fila">
            <Boton>7</Boton>
            <Boton>8</Boton>
            <Boton>9</Boton>
            <Boton>*</Boton>             
          </div>
         
          <div className="fila">
            <Boton>=</Boton>
            <Boton>0</Boton>
            <Boton>.</Boton>
            <Boton>/</Boton>              
          </div>
          <div className="fila">
            <BotonClear>
              Clear
            </BotonClear>
          </div>
        </div>
    </>
  );
}

export default App;
