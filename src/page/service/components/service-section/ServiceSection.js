import Scroll from '../../../../components/Scroll';
import styles from './ServiceSection.module.scss';

const ServiceSection = () => {
  return (
    <section id="Service" className={styles.ServiceSection}>
      <h1 className={styles.Title}>RC SERVICE</h1>
      <span className={styles.SubTitle}>서비스소개</span>
      <Scroll />
    </section>
  );
};

export default ServiceSection;
