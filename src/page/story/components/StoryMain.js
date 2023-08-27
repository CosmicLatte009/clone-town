import styles from './StoryMain.module.scss';

const StoryMain = ({ children }) => {
  return (
    <main className={styles.MainWrap}>
      <div>{children}</div>
    </main>
  );
};

export default StoryMain;
