import ServiceImg from '../../../../components/ServiceImg';
import ServiceText from '../../../../components/ServiceText';
import styles from './MaintenanceSection.module.scss';

const MaintenanceSection = () => {
  return (
    <section id="Maintenance" className={styles.MtnSection}>
      <div className={styles.MtnIn}>
        <h2 className={styles.Title}>MAINTENANCE</h2>

        <div className={styles.MtnContent}>
          <ServiceImg img="/assets/img/rc_service/service_maintenance.png" />

          <div className={styles.Text}>
            <ServiceText
              url="https://www.rctown.co.kr/main_more.php"
              subtitle="믿고 맡기는 유지 보수 및 시스템 모니터링"
              text1="체계적이고 안정적인 유지관리와 불필요한 유지보수 비용 재고"
              text2="호스팅, 클라우드 서버, 로그분석, 구글 애널리틱스틑 통한 모니터링"
              text3="연단위 유지보수 및 이벤트, 프로모션, 정보변경 등의 비정기 유지관리 서비스"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaintenanceSection;
