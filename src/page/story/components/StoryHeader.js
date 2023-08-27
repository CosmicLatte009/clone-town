import StoryNav from './StoryNav';
import styles from './StoryHeader.module.scss';

const StoryHeader = ({ children }) => {
  return (
    <header className={styles.HeaderWrap}>
      <StoryNav />
      <div className={styles.TitleWrap}>
        <h1 className={styles.Title}>RC STORY</h1>
        <span className={styles.Category}>{children}</span>
      </div>
    </header>
  );
};

export default StoryHeader;
