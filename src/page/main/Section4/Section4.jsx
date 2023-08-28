import { Link } from 'react-router-dom';

import styles from './Section4.module.scss';
import Carousel from './components/Carousel';

export const SamplePrevArrow = ({ onClick }) => {
  return (
    <div className={styles.left_arrow}>
      <img
        src={process.env.PUBLIC_URL + 'assets/img/main_banner/arrow_left.png'}
        onClick={onClick}
      />
    </div>
  );
};

export const SampleNextArrow = ({ onClick }) => {
  return (
    <div className={styles.right_arrow}>
      <img
        src={process.env.PUBLIC_URL + 'assets/img/main_banner/arrow_right.png'}
        onClick={onClick}
      />
    </div>
  );
};

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
                <Link to="/portfolio">자세히 보러가기</Link>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Section4;
