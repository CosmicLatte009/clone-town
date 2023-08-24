import styles from './Vision.module.scss';

const Vision = (props) => {
  return (
    <div className={styles.container}>
      <span className={styles.BgImg}></span>
      <span>{props.vision}</span>
    </div>
  );
};

export default Vision;
