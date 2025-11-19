import "./App.css";
import freeCodeCampLogo from "./imgs/freecodecamp-logo.png";
import Boton from "./components/Boton";
import Panatalla from "./components/Panatalla";
import BotonClear from "./components/BotonClear";

import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  //Boton del hook
  const [input, setInput] = useState ('');

  //Boton para agregar el valor
    const agregarInput = (val) => {
    setInput(input + val);
  };

  //Boton para manejar el resultado
  const calcularResultado = () => {
    //condicional para inprevistos al ingresar valores
    if (input){
      setInput (evaluate(input))
    }else{
      alert("Por favor ingrese valores para realizar los calculos");
    }
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
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>

          <div className="fila">
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>

          <div className="fila">
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={agregarInput}>*</Boton>             
          </div>
         
          <div className="fila">
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton>
            <Boton manejarClic={agregarInput}>/</Boton>              
          </div>
          <div className="fila">
            <BotonClear 
             manejarClear={() => setInput('')}
            >
            Clear
            </BotonClear>
          </div>
        </div>
    </>
  );
}

export default App;
