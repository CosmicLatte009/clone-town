import styles from './Section4.module.scss';

const Section4 = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.inner}>
            <h1>
              알씨타운
              <br />
              포트폴리오
            </h1>
            <p>
              당신이 상상하는 그 모든 것,
              <br />
              RC TOWN에서 실현시켜드리고 있습니다.
            </p>
            <div className={styles.btn_wrap}>
              <button>
                <a href="https://www.rctown.co.kr/service.php">
                  자세히 보러가기
                </a>
              </button>
            </div>
          </div>
          <ul className={styles.arrow}>
            <li className={styles.left_arrow}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  'assets/img/main_banner/arrow_left.png'
                }
              />
            </li>
            <li className={styles.right_arrow}>
              <img
                src={
                  process.env.PUBLIC_URL +
                  'assets/img/main_banner/arrow_right.png'
                }
              />
            </li>
          </ul>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Section4;
