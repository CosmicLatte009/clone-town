import { useRef, useEffect } from 'react';
import Button from '.././../../components/Button';
import styles from './StoryLetterPopup.module.scss';

const StoryLetterPopup = ({ item, onClose }) => {
  const containerEl = useRef(null);

  useEffect(() => {
    if (containerEl.current !== null) containerEl.current.focus();
  }, []);

  return (
    <section className={styles.Container} ref={containerEl}>
      <button className={styles.CloseBtn} onClick={onClose}>
        <img src="/assets/img/rc-story/icon_close.svg" alt="닫기 아이콘" />
      </button>

      <div className={styles.TitleWrap}>
        <span className={styles.Vol}>
          <img src="/assets/img/rc-story/letter_egg.png" alt="달걀 아이콘" />
          {item.popupVol}
        </span>
        <strong className={styles.Title}>{item.popupTitle}</strong>
        <strong className={styles.Date}>{item.date}</strong>
        <Button size="medium">구독하기</Button>
      </div>
      <div className={styles.DescWrap}>
        <div
          className={styles.Desc}
          dangerouslySetInnerHTML={{ __html: JSON.parse(item.desc).contents }}
        ></div>
      </div>
    </section>
  );
};

export default StoryLetterPopup;
