import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'react-bootstrap';

import { ImageModal as ImageModalClass } from '../../styles/app.scss';

const ImageModal = ({title, imgSrc, show, toggle}) => {
  return (
    <Modal bsSize="large" show={show} onHide={toggle} dialogClassName={ImageModalClass}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={imgSrc}/>
      </Modal.Body>
    </Modal>
  );
};

ImageModal.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default ImageModal;
