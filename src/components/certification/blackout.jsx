import React from 'react';
import styles from './Blackout.module.css';

export default function Blackout({ isVisible, onSetIsVisible }) {
  return (
    <>
      <div
        className={isVisible ? styles.blackout : styles.blackoutnone}
        isVisible={isVisible}
        onClick={() => {
          onSetIsVisible(false);
        }}
      ></div>
    </>
  );
}
