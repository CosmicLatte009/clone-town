import styles from './AboutSection.module.scss';

const AboutSection = () => {
  return (
    <section className={styles.AboutSection}>
      <h1 className={styles.Title}>ABOUT RC</h1>
      <span className={styles.SubTitle}>회사소개</span>
    </section>
  );
};

export default AboutSection;
