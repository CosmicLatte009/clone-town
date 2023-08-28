import { useState } from 'react';
import styles from './MainBannerSection.module.scss';
import datas from '../../../dummy/main-data/main-banner.json';

const MainBannerTitle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerData = datas.data;
  const currentItem = bannerData[currentIndex];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${currentItem.imgURL}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <div className={styles.Container} style={backgroundImageStyle}>
      <div className={styles.TitleWrap}>
        <span className={styles.NumTxt}>{currentItem.projectNum}</span>
        <p className={styles.SubTxt}>{currentItem.subTitle}</p>
        <h1 className={styles.Title}>{currentItem.title}</h1>
      </div>
      <div className={styles.BottomContainer}>
        <strong className={styles.ProgressNum}>
          <span>
            {currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}
          </span>
          / 07
        </strong>
        <div className={styles.ProgressBar}>
          <span className={styles.BarWrap}>
            <span className={styles.BarColor}></span>
          </span>
        </div>
        <div className={styles.BtnWrap}>
          <button onClick={handlePrevClick}>
            <img
              src="/assets/img/main_banner/icon_arrow_left.svg"
              alt="왼쪽 화살표"
            />
          </button>
          <button onClick={handleNextClick}>
            <img
              src="/assets/img/main_banner/icon_arrow_right.svg"
              alt="오른쪽 화살표"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainBannerTitle;
