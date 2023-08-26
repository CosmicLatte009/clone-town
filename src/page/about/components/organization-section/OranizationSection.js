import styles from './OrganizationSection.module.scss';

const OrganizationSection = () => {
  return (
    <section id="Organization" className={styles.OrganizationSection}>
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
