import { useState } from "react";
import aos from "aos";
import { useAos } from "../useAos";
import Modal from "react-modal/lib/components/Modal";

Modal.setAppElement("#root");

export const ShowProduct = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { aosSetting } = useAos();
  aos.init(aosSetting);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {product.map((singleProduct) => (
        <div className="product" key={singleProduct.id} data-aos="flip-left">
          <div className="img">
            <img
              src={require(`../../images/${singleProduct.image}`)}
              alt="imagen1"
              className="img-1"
              onClick={openModal}
            />
          </div>
          <p>{singleProduct.description}</p>
        </div>
      ))}
      <Modal
        className="modal-styles"
        overlayClassName="overlay"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="This is a Modal"
      >
        <div className="content-img-modal">
          {product.map((image) => (
            <div key={image.id}>
              <img
                src={require(`../../images/${image.image}`)}
                alt="imagen1"
                className="img-modal"
              />
            </div>
          ))}
          <span onClick={closeModal} className="close-modal">
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
      </Modal>
    </>
  );
};
