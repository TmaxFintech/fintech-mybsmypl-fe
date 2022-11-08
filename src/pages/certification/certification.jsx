import React from 'react';
import styles from './certification.module.css';
import Flow01 from './certificationFlow/flow01';

export default function Certification() {
  return (
    <div className={styles.certification}>
      <Flow01 />
    </div>
  );
}
