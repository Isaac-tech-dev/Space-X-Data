import React from 'react';

const Modal = ({ isOpen, closeModal, rocket }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-2">{rocket.capsule_serial}</h3>
        <p>Status: {rocket.details}</p>
        <p>Original Launch: {rocket.original_launch_unix}</p>
        <p>Type: {rocket.type}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
