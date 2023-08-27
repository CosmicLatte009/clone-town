import { useState } from 'react';

import styles from './Section3.module.scss';
import Section3Tab from './components/section3/Section3Tab';

const Section3 = () => {
  const [category, setCategory] = useState('0');
  const IMG = 'web_img.jpg';

  const clickTabHandeler = (e) => {
    const seleted = e.target.value;
    setCategory(seleted);
    console.log(category);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.inner}>
            <div className={styles.frame}>
              <div className={styles.computer_wrap}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    `assets/img/main_banner/section3_${category}.jpg`
                  }
                />
                <div className={styles.back_img}>
                  <div className={styles.img_wrap}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.inner}>
            <div className={styles.cont}>
              <div className={styles.top}>
                <h1>
                  알씨타운이 가진 경험과
                  <br />
                  기술력으로
                  <br />
                  최고의 퀄리티를 제공합니다.
                </h1>
              </div>
              <div className={styles.mid}>
                <ul className={styles.tab}>
                  <li
                    value="0"
                    onClick={clickTabHandeler}
                    className={category == '0' ? styles.tab_item : ''}
                  >
                    WEB
                    <span
                      className={category == '0' ? styles.tab_line : ''}
                    ></span>
                  </li>
                  <li
                    value="1"
                    onClick={clickTabHandeler}
                    className={category == '1' ? styles.tab_item : ''}
                  >
                    APP
                    <span
                      className={category == '1' ? styles.tab_line : ''}
                    ></span>
                  </li>
                  <li
                    value="2"
                    onClick={clickTabHandeler}
                    className={category == '2' ? styles.tab_item : ''}
                  >
                    Maintennace
                    <span
                      className={category == '2' ? styles.tab_line : ''}
                    ></span>
                  </li>
                  <li
                    value="3"
                    onClick={clickTabHandeler}
                    className={category == '3' ? styles.tab_item : ''}
                  >
                    E-Besiness
                    <span
                      className={category == '3' ? styles.tab_line : ''}
                    ></span>
                  </li>
                </ul>
              </div>
              <Section3Tab category={category} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
