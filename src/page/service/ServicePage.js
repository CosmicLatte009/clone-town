import styles from './ServicePage.module.scss';
import ServiceSection from './components/service-section/ServiceSection';

const ServicePage = () => {
  return (
    <section className={styles.ServiceSection}>
      <ServiceSection />
    </section>
  );
};

export default ServicePage;
