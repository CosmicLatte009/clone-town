import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Scroll from '../../../../components/Scroll';
import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
  const { hash } = useLocation();
  const sectionEl = useRef(null);

  useEffect(() => {
    if (sectionEl.current !== null && hash === '#Service') {
      sectionEl.current.scrollIntoView();
    }
  }, [sectionEl.current, hash]);

  return (
    <section ref={sectionEl} id="Service" className={styles.ServiceSection}>
      <h1 className={styles.Title}>RC SERVICE</h1>
      <span className={styles.SubTitle}>서비스소개</span>
      <Scroll />
    </section>
  );
};

export default ServiceSection;
