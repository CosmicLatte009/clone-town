import { useEffect } from 'react';
import StoryHeader from '../components/StoryHeader';
import StoryMain from '../components/StoryMain';
import StoryLetterCard from './StoryLetterCard';
import styles from './StoryLetterPage.module.scss';

const StoryLetterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <StoryHeader>RC LETTER</StoryHeader>
      <StoryMain>
        <h2>
          알씨타운이 전하는
          <br />
          이달의 뉴스레터 입니다
        </h2>
        <p>
          매달 구독자 여러분들께 세상 이슈를 한 발짝 빠르게 전해드리고 있습니다.
        </p>
        <div className={styles.CardList}>
          <StoryLetterCard />
        </div>
      </StoryMain>
    </>
  );
};

export default StoryLetterPage;
