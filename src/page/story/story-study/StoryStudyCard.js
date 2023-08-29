import styles from './StoryStudyCard.module.scss';

const StoryStudyCard = ({ index, to, img, date, title }) => {
  return (
    <li className={styles.CardWrap}>
      <a href={to} target="_blank" rel="noopener noreferrer">
        <img src={img} alt="미리보기 이미지" />
        <div>
          <div className={styles.Text} key={index}>
            <span className={styles.Date}>{date}</span>
            <strong className={styles.Title}>{title}</strong>
          </div>
        </div>
      </a>
    </li>
  );
};

export default StoryStudyCard;
