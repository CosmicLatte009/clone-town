import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './OrganizationSection.module.scss';

const OrganizationSection = () => {
  const { hash } = useLocation();
  const sectionEl = useRef(null);

  useEffect(() => {
    if (sectionEl.current !== null && hash === '#Organization') {
      sectionEl.current.scrollIntoView();
    }
  }, [sectionEl.current, hash]);

  return (
    <section
      ref={sectionEl}
      id="Organization"
      className={styles.OrganizationSection}
    >
      <h2 className={styles.Title}>RC ORGANIZATION</h2>
      <div className={styles.OrganizationIn}>
        <p className={styles.SubTitle}>알씨타운 조직도입니다.</p>
        <img
          className={styles.OrgImg}
          src="assets/img/about_rc/organization.jpg"
          alt="알씨타운 조직도"
        />
      </div>
    </section>
  );
};

export default OrganizationSection;
