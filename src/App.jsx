import { useState } from "react";
import Header from "./components/Header";
import iconoNuevoGasto from "./img/nuevo-gasto.svg"
import Modal from "./components/Modal";
import { generarId } from "./Helpers";
import ListadoGastos from "./components/ListadoGastos";
import Gasto from "./components/Gasto";
function App() {

  const[presupuesto, setPresupuesto] = useState(0);
  const[isValidPresupuesto, setIsvalidPresupuesto] = useState (false)

  const[modal, setModal ]= useState(false)
  const[animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto =() =>{
    setModal(true)

    setTimeout(() => {
      setAnimarModal(true)
  }, 150);
  
  }
  const guardarGasto = gasto => {
    gasto.id = generarId();
    gasto.fecha = Date.now()
   setGastos([...gastos, gasto])
   setAnimarModal(false);

   setTimeout(() => {
     setModal(false);
   }, 500);   
  }


  return (
    <div>
      <Header 
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
      isValidPresupuesto={isValidPresupuesto}
      setIsvalidPresupuesto={setIsvalidPresupuesto}
      />


      {isValidPresupuesto &&(

        <>
          <main>
            <ListadoGastos
            gastos = {gastos}
            />
          </main>
        <div className="nuevo-gasto">
            <img 
            src={iconoNuevoGasto} 
            alt="Icono Nuevo Gasto" 
            onClick={handleNuevoGasto}
            />
        </div>
      </>
      )}
 
      {modal && <Modal
      
      setModal={setModal}
      animarModal={animarModal}
      setAnimarModal={setAnimarModal}
      guardarGasto ={guardarGasto }
      />}
      
      
    </div>
  );
}

export default App;
