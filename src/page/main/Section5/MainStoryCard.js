import { Link } from 'react-router-dom';
import styles from './MainStoryCard.module.scss';

const MainStoryCard = ({ title, children, to }) => {
  const cardWrapClass = `${styles.CardWrap} ${
    title === 'RC STUDY' ? styles.StudyImgWrap : ''
  } ${title === 'RC LETTER' ? styles.LetterImgWrap : ''} ${
    title === 'NOTICE' ? styles.NoticeImgWrap : ''
  }`;
  return (
    <li className={styles.ListWrap}>
      <div className={cardWrapClass}>
        <span className={styles.Title}>{title}</span>
        <div className={styles.BottomWrap}>
          <div className={styles.DescWrap}>
            <p className={styles.Desc}>{children}</p>
          </div>
          <button className={styles.Btn}>
            <Link to={to}>자세히 보러가기</Link>
          </button>
        </div>
      </div>
    </li>
  );
};

export default MainStoryCard;
