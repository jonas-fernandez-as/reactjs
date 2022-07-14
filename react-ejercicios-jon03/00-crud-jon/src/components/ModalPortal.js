import  ReactDOM  from "react-dom";
import "./Modal.css";

const ModalPortal = ({ children,isOpen,closeModal }) => {  //MANDAMOS A LLAMAR EL CONTENIDO DE MODAL CON LA PROP CHILDREN
 const handleModalContainerClick= e=>e.stopPropagation(); 
 
 return ReactDOM.createPortal(
    
      <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal} >
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button className="modal-close" onClick={closeModal}>X</button>
          <button className="modal-close" onClick={closeModal}></button>
          {children}      
        </div>
      </article>,
    document.getElementById("modal")
  );
};

export default ModalPortal;
