import { useLocation } from 'react-router-dom';
import styles from './StoryMain.module.scss';

const StoryMain = ({ children }) => {
  const location = useLocation();
  const isNoticePage = location.pathname === '/story-notice';
  const isLetterPage = location.pathname === '/story-letter';
  const isStudyPage = location.pathname === '/story-study';

  const mainWrapClass = `${styles.MainWrap} ${
    isNoticePage ? styles.NoticePage : ''
  } ${isLetterPage ? styles.LetterPage : ''} ${
    isStudyPage ? styles.StudyPage : ''
  }`;

  return (
    <main className={mainWrapClass}>
      <div>{children}</div>
    </main>
  );
};

export default StoryMain;
