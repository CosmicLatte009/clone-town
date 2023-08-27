import ServiceImg from '../../../../components/ServiceImg';
import ServiceText from '../../../../components/ServiceText';
import styles from './EbusiSection.module.scss';

const EbusiSection = () => {
  return (
    <section className={styles.EbusiSection}>
      <div className={styles.EbusiIn}>
        <h2 className={styles.Title}>e-Business</h2>

        <div className={styles.EbusiContent}>
          <div className={styles.Text}>
            <ServiceText
              url="https://www.rctown.co.kr/ebusi_more.php"
              subtitle="비즈니스 상황을 고려한 앱 제작"
              text1="린 캔버스를 통한 고객지향적인 제품과 서비스 개발"
              text2="데이터/트랜드 분석과 브랜드 아이덴티티 컨설팅"
              text3="컨설팅을 통한 죽음의 계곡을 뛰어넘는 혁신 설계"
            />
          </div>

          <ServiceImg img="/assets/img/rc_service/service_ebusi.png" />
        </div>
      </div>
    </section>
  );
};

export default EbusiSection;
