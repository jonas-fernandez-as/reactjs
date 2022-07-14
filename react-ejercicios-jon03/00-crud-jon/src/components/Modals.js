import { useModal } from "../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import SongSearch from "./SongSearch";
import ModalPortal from "./ModalPortal";

const Modals = () => {
  //Definimos el contenido de modal, aunque no definamos la prop en en componente.. solo lo llamamos desde Modal
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenContact, openModalContact, closeModalContact] = useModal(false);
  const [isOpenSong, openModalSong, closeModalSong] = useModal(false);
  const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1 </button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido de mi modal 1 </p>
        <img src="https://placeimg.com/400/400/animals" alt="animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2 </button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro modal</h3>
        <p>Hola este es el contenido de modal 2 </p>
        <img src="https://placeimg.com/400/400/tech" alt="tech" />
      </Modal>
      <button onClick={openModalContact}>Modal contacto </button>
      <Modal isOpen={isOpenContact} closeModal={closeModalContact}>
        <ContactForm />
      </Modal>
      <button onClick={openModalSong}>Modal Cancion </button>
      <Modal isOpen={isOpenSong} closeModal={closeModalSong}>
        <SongSearch />
      </Modal>
      <button onClick={openModalPortal}>Modal en Portal </button>
      <ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
        <h3>Modal en portal</h3>
        <p>
          Este es el contenido de un modal que carga en nodo del DOM diferente a
          donde carga nuestra app de React gracias a un react Portal
        </p>
        <img src="https://placeimg.com/400/400/people" alt="people" />
      </ModalPortal>
    </div>
  );
};

export default Modals;
