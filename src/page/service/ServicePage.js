import styles from './ServicePage.module.scss';
import ServiceSection from './components/service-section/ServiceSection';
import WebSection from './components/web-section/WebSection';
import AppSection from './components/app-section/AppSection';
import MaintenanceSection from './components/mtn-section/MaintenanceSection';
import EbusiSection from './components/ebusi-section/EbusiSection';

const ServicePage = () => {
  return (
    <section className={styles.ServiceSection}>
      <ServiceSection />
      <WebSection />
      <AppSection />
      <MaintenanceSection />
      <EbusiSection />
    </section>
  );
};

export default ServicePage;
