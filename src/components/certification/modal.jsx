import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ isVisible, onSetIsVisible }) {
  return (
    <>
      <div
        className={isVisible ? styles.modal : styles.modalnone}
        isVisible={isVisible}
        onClick={() => {
          onSetIsVisible(false);
        }}
      ></div>
    </>
  );
}
