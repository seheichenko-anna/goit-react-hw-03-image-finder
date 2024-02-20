import React from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

const Modal = ({ largeImageURL, onClose }) => {
  const checkForCloseModal = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={checkForCloseModal}>
      <ModalWindow>
        <img src={largeImageURL} alt="" />
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;
