import Vision from './Vision';
import styles from './VisionSection.module.scss';

const VisionSection = () => {
  return (
    <section id="Vision" className={styles.VisionSection}>
      <h2 className={styles.Title}>RC VISION</h2>
      <div className={styles.VisionIn}>
        <div className={styles.VisionElement}>
          <Vision vision="Innovation" />
          <div className={styles.VisionText}>
            <p>
              VR, AR, 블록체인, 인공지능, 빅데이터, 스트리밍 기술 분야에서
              기술력을 선도한다.
            </p>
            <p>영상 스트리밍 기술을 확보를 달성한다.</p>
          </div>
        </div>
        <div className={styles.VisionElement}>
          <Vision vision="Best of the Best" />
          <div className={styles.VisionText}>
            <p>
              국내 플랫폼 에이전시 업체를 선도하는 모범적인 회사조직을 구축한다.
            </p>
            <p>업계 10위 내 브랜드 업체로 도약한다.</p>
          </div>
        </div>
        <div className={styles.VisionElement}>
          <Vision vision="Solution" />
          <div className={styles.VisionText}>
            <p>지속적으로 가성비와 가심비 있는 솔루션을 고객에게 제공한다. </p>
            <p>초보개발자에겐 좀 더 쉽게, 경력자에겐 신기술 개발에 집중한다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
