import styles from './aboutpage.module.scss';
import AboutSection from './components/about-section/AboutSection';
import IntroductionSection from './components/introduction-section/IntroductionSection';
import MissionSection from './components/mission-section/MissionSection';

const AboutPage = () => {
  return (
    <section className={styles.AboutSection}>
      <AboutSection />
      <section className={styles.CompanySection}>
        <IntroductionSection />
        <MissionSection />
      </section>
    </section>
  );
};

export default AboutPage;
