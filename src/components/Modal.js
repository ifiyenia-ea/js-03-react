import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modalTitle">
          <h2>SUBSCRIBE FOR NEWS</h2>
        </div>
        <label for="name">Name: </label>
        <input type="text" />
        <label for="email">Email: </label>
        <input type="email" />
        <button className="btn">Subscribe</button>
        <button className="modal-close btn" onClick={() => closeModal(false)}>
          Close
        </button>
      </div>
    </div>
  );
}
export default Modal;
