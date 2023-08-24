import styles from './ServicePage.module.scss';
import ServiceSection from './components/service-section/ServiceSection';
import WebSection from './components/web-section/WebSection';
import AppSection from './components/app-section/AppSection';

const ServicePage = () => {
  return (
    <section className={styles.ServiceSection}>
      <ServiceSection />
      <WebSection />
      <AppSection />
    </section>
  );
};

export default ServicePage;
