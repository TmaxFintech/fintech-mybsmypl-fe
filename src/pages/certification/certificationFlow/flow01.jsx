import React, { useState } from 'react';
import Button from '../../../components/certification/button';
import styles from './flow01.module.css';
import back from '../../../assets/images/icons/back.png';
import increase from '../../../assets/images/icons/increase.png';
import Blackout from '../../../components/certification/blackout';
import Modal from '../../../components/certification/modal';

export default function Flow01() {
  const [isVisible, setIsVisible] = useState(false);
  const onSetIsVisible = (active) => {
    setIsVisible(active);
  };
  return (
    <>
      <div className={styles.flow01}>
        <Blackout isVisible={isVisible} onSetIsVisible={onSetIsVisible} />
        <Modal isVisible={isVisible} onSetIsVisible={onSetIsVisible} />
        <div className={styles.flow01Content}>
          <nav className={styles.navbar}>
            <img className={styles.back} src={back} alt="뒤로" />
            <div className={styles.navbarText}>자산 추가</div>
            <div className={styles.hamburger}>.</div>
          </nav>
          <div className={styles.content}>
            <div className={styles.contentTitle}>
              내 계좌, 카드를 한번에 모아 <br />
              My Bank에서 관리해보세요.
            </div>
            <img className={styles.increase} src={increase} alt="increase" />
            <div className={styles.contentText}>
              1분 만에, <br />
              계좌와 카드를 찾아 드려요
            </div>
          </div>
        </div>
        <Button onSetIsVisible={onSetIsVisible} />
      </div>
    </>
  );
}
