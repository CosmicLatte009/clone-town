import React from 'react';
import styles from './ValueBox.module.scss';

const ValueBox = (props) => {
  return (
    <div className={styles.ValueBox}>
      <span className={styles.ValueTitle}>{props.ValueTitle}</span>
      <div className={styles.ValueBoxIn}>
        <div className={styles.Value}>
          <div className={styles.ValueImgBox}>
            <img className={styles.ValueImg} src={props.ValueImg} />
            <p className={styles.ValueSubTitle}>{props.ValueSubTitle}</p>
          </div>

          <div className={styles.ValueTextBox}>
            <p className={styles.ValueText}>{props.ValueText1}</p>
            <p className={styles.ValueText}>{props.ValueText2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValueBox;
