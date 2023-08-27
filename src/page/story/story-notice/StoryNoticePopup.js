import styles from './StoryNoticePopup.module.scss';

const StoryNoticePopup = ({ item, onClose }) => {
  return (
    <section className={styles.Container}>
      <button className={styles.CloseBtn} onClick={onClose}></button>

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
