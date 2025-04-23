import "./App.css";

import Boton from "./components/Boton";

function App(){

  const manejarClickNumeros = (e)=> {
    console.log(e.target.textContext)
  }

  return (
    <div className="contenedor">
      <div className="pad">
      <Boton 
      texto="1"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
    texto="2"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="3"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="+"
      operacion="manejarClickNumeros" 
      tipo = "operacion"
      />


      <Boton 
      texto="4"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
    texto="5"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="6"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="-"
      operacion="manejarClickNumeros" 
      tipo = "operacion"
      />


     <Boton 
      texto="7"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
    texto="8"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="9"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="*"
      operacion="manejarClickNumeros" 
      tipo = "operacion"
      />

      <Boton 
      texto="="
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="0"
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="."
      operacion="manejarClickNumeros" 
      tipo = "normal"
      />
      <Boton 
      texto="/"
      operacion="manejarClickNumeros" 
      tipo = "operacion"
      />
      </div>
    </div>
  )
}
export default App