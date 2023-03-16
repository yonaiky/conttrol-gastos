import cerrarbtn from "../img/cerrar.svg";



const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const ocultarModal =() =>{

        setModal(false)
        setAnimarModal(false)
        

       
        }
    
  return (
    <div className="modal">
      <div className="cerrar-modal">

        <img src={cerrarbtn} alt="Cerrar boton"
        onClick={ocultarModal}
        />


      </div>
        <form className={`formulario ${animarModal ? "animar" :'' }`}>

            <legend>Nuevo Gasto</legend>
        </form>

    
    </div>
  );
};

export default Modal;
