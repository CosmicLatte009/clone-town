import styles from './StoryMain.module.scss';

const StoryMain = ({ children }) => {
  return <main className={styles.MainWrap}>{children}</main>;
};

export default StoryMain;
