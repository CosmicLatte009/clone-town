import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Scroll from '../../../../components/Scroll';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
  const { hash } = useLocation();
  const sectionEl = useRef(null);

  useEffect(() => {
    if (sectionEl.current !== null && hash === '#About') {
      sectionEl.current.scrollIntoView();
    }
  }, [sectionEl.current, hash]);

  return (
    <section ref={sectionEl} id="About" className={styles.AboutSection}>
      <h1 className={styles.Title}>ABOUT RC</h1>
      <span className={styles.SubTitle}>회사소개</span>
      <Scroll />
    </section>
  );
};

export default AboutSection;
