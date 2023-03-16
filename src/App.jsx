import { useState } from "react";
import Header from "./components/Header";
import iconoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal";

function App() {

  const[presupuesto, setPresupuesto] = useState(0);
  const[isValidPresupuesto, setIsvalidPresupuesto] = useState (false)

  const[modal, setModal ]= useState(false)
  const[animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto =() =>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
  }, 150);
  
  }



  return (
    <div>
      <Header 
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsvalidPresupuesto={setIsvalidPresupuesto}
      />


      {isValidPresupuesto &&(<div className="nuevo-gasto">
      <img src={iconoNuevoGasto} alt="Icono Nuevo Gasto" 
      onClick={handleNuevoGasto}
      />
      

      </div>)}
 
      {modal && <Modal
      
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      
      />}
      
      
    </div>
  );
}

export default App;
