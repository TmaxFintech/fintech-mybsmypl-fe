import React from 'react';
import styles from './Button.module.css';

export default function Button({ onSetIsVisible }) {
  return (
    <div className={styles.button} onClick={() => onSetIsVisible(true)}>
      시작하기
    </div>
  );
}
