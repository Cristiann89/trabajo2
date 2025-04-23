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
      </div>
    </div>
  )
}
export default App