import styles from './Scroll.module.scss';

const Scroll = () => {
  return (
    <div className={styles.Scroll}>
      <span className={styles.Mouse}>
        <span className={styles.Cursor}></span>
      </span>
      <span className={styles.Line}></span>
    </div>
  );
};

export default Scroll;
