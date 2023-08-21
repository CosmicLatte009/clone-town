import styles from './aboutpage.module.scss';
import AboutSection from './components/about-section/AboutSection';
import IntroductionSection from './components/introduction-section/IntroductionSection';

const AboutPage = () => {
  return (
    <section className={styles.AboutSection}>
      <AboutSection />
      <section className={styles.CompanySection}>
        <IntroductionSection />
      </section>
    </section>
  );
};

export default AboutPage;
