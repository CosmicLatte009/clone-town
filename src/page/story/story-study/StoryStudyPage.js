import { useEffect } from 'react';
import StoryHeader from '../components/StoryHeader';
import StoryMain from '../components/StoryMain';
import StoryStudyCard from './StoryStudyCard';
import data from '../../../dummy/story-study.json';
import styles from './StoryStudyPage.module.scss';

const StoryLetterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const studyData = data.study;
  return (
    <>
      <StoryHeader>RC STUDY</StoryHeader>
      <StoryMain>
        <h2>
          알씨타운 성장을 위한
          <br />
          고민의 흔적 입니다
        </h2>
        <p>알씨타운 사람들이 다양한 고민을 나누면서 기록한 이야기입니다.</p>
        <div className={styles.CardList}>
          {studyData.reverse().map((item, index) => (
            <StoryStudyCard
              to={item.link}
              index={item.index}
              img={item.img}
              date={item.date}
              title={item.title}
            />
          ))}
        </div>
      </StoryMain>
    </>
  );
};

export default StoryLetterPage;
