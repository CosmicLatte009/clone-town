import Scroll from '../../../../components/Scroll';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
  return (
    <section id="About" className={styles.AboutSection}>
      <h1 className={styles.Title}>ABOUT RC</h1>
      <span className={styles.SubTitle}>회사소개</span>
      <Scroll />
    </section>
  );
};

export default AboutSection;
