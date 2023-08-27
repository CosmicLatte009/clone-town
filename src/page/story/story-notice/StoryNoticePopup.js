import { useRef, useEffect } from 'react';
import styles from './StoryNoticePopup.module.scss';

const StoryNoticePopup = ({ item, onClose }) => {
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
        <div className={styles.Date}>
          <strong>{item.dd}</strong>
          <span>{item.yymm}</span>
        </div>
        <div className={styles.Title}>
          <span>{item.title}</span>
        </div>
      </div>
      <div
        className={styles.Desc}
        dangerouslySetInnerHTML={{ __html: JSON.parse(item.desc).contents }}
      />
    </section>
  );
};

export default StoryNoticePopup;
