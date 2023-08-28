import styles from './MainStorySection.module.scss';
import MainStoryCard from './MainStoryCard';

const MainStorySection = () => {
  return (
    <section className={styles.Container}>
      <div className={styles.BackgroundImg}>
        <div className={styles.CardWrap}>
          <MainStoryCard title="RC STUDY" to="/story-study">
            알씨타운 사람들이 다양한 고민을 나누면서 기록한 이야기입니다!
          </MainStoryCard>
          <MainStoryCard title="RC LETTER" to="/story-letter">
            한 달에 한 번 내 메일함으로 날아드는 수상한 녀석!
          </MainStoryCard>
          <MainStoryCard title="NOTICE" to="/story-notice">
            함께 성장할 알씨타운 식구를 구합니다.
          </MainStoryCard>
        </div>
      </div>
    </section>
  );
};
export default MainStorySection;
