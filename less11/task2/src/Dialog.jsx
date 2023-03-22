import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ isOpen, children, title, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <button className="dialog__close-btn" onClick={onClose}>+</button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};


Dialog.PropTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
  onConsole: PropTypes.func.isRequired,
}


export default Dialog;
