import styles from './ServicePage.module.scss';
import ServiceSection from './components/service-section/ServiceSection';
import WebSection from './components/web-section/WebSection';

const ServicePage = () => {
  return (
    <section className={styles.ServiceSection}>
      <ServiceSection />
      <WebSection />
    </section>
  );
};

export default ServicePage;
