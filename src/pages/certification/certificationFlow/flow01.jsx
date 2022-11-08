import React from 'react';
import Button from '../../../components/certification/button';
import styles from './flow01.module.css';

export default function Flow01() {
  return (
    <div className={styles.flow01}>
      <div className={styles.flow01Content}>
        <nav className={styles.navbar}>자산 추가</nav>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            내 계좌, 카드를 한번에 모아 <br />
            My Bank에서 관리해보세요.
          </div>
          <div className={styles.contentText}>
            1분 만에, <br />
            계좌와 카드를 찾아 드려요
          </div>
        </div>
      </div>
      <Button />
    </div>
  );
}
