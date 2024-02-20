import { Overlay, ModalWindow } from './Modal.styled';
import React, { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.onClose();
    }
  };

  checkForCloseModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.checkForCloseModal}>
        <ModalWindow>
          <img src={this.props.largeImageURL} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
}
