import "./Modal.css";

const Modal = ({ children,isOpen,closeModal }) => {  //MANDAMOS A LLAMAR EL CONTENIDO DE MODAL CON LA PROP CHILDREN
 const handleModalContainerClick= e=>e.stopPropagation(); 
 
 return (
    
      <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal} >
        <div className="modal-container" onClick={handleModalContainerClick}>
          <button className="modal-close" onClick={closeModal}>X</button>
          <button className="modal-close" onClick={closeModal}></button>
          {children}      
        </div>
      </article>
    
  );
};

export default Modal;
