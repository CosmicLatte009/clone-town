import styles from './IntroduceBox.module.scss';

function IntroduceBox() {
  return (
    <>
      <div className={styles.introduceContainer}>
        <div className={styles.introduce}>
          <h2>CONTACT</h2>
          <div>
            <p className={styles.company}>(주) 소트프랩스 : 알씨타운</p>
            <p>
              <span className={styles.bold}>본사</span>
              서울 강남구 신사동 653-20 4층
            </p>
            <p>
              <span className={styles.bold}>연구소</span>
              서울 금천구 디지털로121 1610호
            </p>
          </div>
          <div className={styles.contact_phone}>
            <div className={styles.contact_phone_in}>
              <ul>
                <li>대표</li>
                <li>CS</li>
                <li>디자인팀</li>
                <li>개발팀</li>
                <li>Fax</li>
                <li>이메일</li>
              </ul>
              <ul>
                <li>02 - 6494 - 2848</li>
                <li>02 - 6494 - 2851</li>
                <li>02 - 6494 - 2850</li>
                <li>02 - 6494 - 2849</li>
                <li>02 - 6494 - 2847</li>
                <li>partner@rctown.co.kr</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroduceBox;
