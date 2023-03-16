import cerrarbtn from "../img/cerrar.svg";



const Modal = ({setModal}) => {

    const ocultarModal =() =>{

        setModal(false)
        
        
        }
    
  return (
    <div className="modal">
      <div className="cerrar-modal">

        <img src={cerrarbtn} alt="Cerrar boton"
        onClick={ocultarModal}
        />


      </div>
    </div>
  );
};

export default Modal;
