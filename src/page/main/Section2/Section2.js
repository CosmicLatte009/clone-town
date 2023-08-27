import styles from './Section2.module.scss';

const Section2 = () => {
  return (
    <section className={styles.MainPage2}>
      <div className={styles.Container}>
        <div className={styles.Wrap}>
          <div className={styles.TextRotate}>
            <span>R</span>
            <span>C</span>
            <span>T</span>
            <span>O</span>
            <span>W</span>
            <span>N</span>
            <span>×</span>
            <span>S</span>
            <span>O</span>
            <span>F</span>
            <span>T</span>
            <span>L</span>
            <span>A</span>
            <span>B</span>
            <span>S</span>
            <span>×</span>
          </div>
          <div className={styles.MainImg2}></div>
          <div className={styles.TextBox}>
            <div className={styles.InnerBox}>
              <p>
                (주)소프트랩스는 급변하는 경영환경과 IT기술의 혁신, 고객 Needs의
                변화 등 여러 시장환경 속에서 고객의 성공적인 비즈니스 파트너가
                되기 위해 웹개발, 앱개발, 유지보수, E-Business 등 다양한 업무를
                수행하는 전문가 그룹입니다.
              </p>
              <button>
                <a href="/about">알씨타운 보러가기</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
