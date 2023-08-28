import { useLocation } from 'react-router-dom';
import StoryNav from './StoryNav';
import Scroll from '../../../components/Scroll';
import styles from './StoryHeader.module.scss';

const StoryHeader = ({ children }) => {
  const location = useLocation();
  const isNoticePage = location.pathname === '/story-notice';
  const isLetterPage = location.pathname === '/story-letter';
  const isStudyPage = location.pathname === '/story-study';

  const headerClass = `${styles.HeaderWrap} ${
    isNoticePage ? styles.NoticePage : ''
  } ${isLetterPage ? styles.LetterPage : ''} ${
    isStudyPage ? styles.StudyPage : ''
  }`;

  return (
    <>
      <header className={headerClass}>
        <div className={styles.TitleWrap}>
          <h1 className={styles.Title}>RC STORY</h1>
          <span className={styles.Category}>{children}</span>
        </div>
        <Scroll />
      </header>
      <StoryNav />
      <span className={styles.MediaQueryTitle}>RC STORY</span>
    </>
  );
};

export default StoryHeader;
