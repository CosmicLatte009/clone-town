import styles from './IntroductionSection.module.scss';

const IntroductionSection = () => {
  return (
    <section className={styles.IntroductionSection}>
      <div className={styles.TitleSection}>
        <p className={styles.Title}>BEST QUALITY</p>
        <p className={styles.Title2}>SPECIALIZATION</p>
        <p className={styles.Title}>DIFFERENTIATE</p>
      </div>

      <div>
        <p className={styles.SubTitle}>
          젊은 생각이 만드는 IT 세상,
          <br />
          알씨타운
        </p>
      </div>

      <div className={styles.CompanyIntroduction}>
        <p>
          알씨타운은 인터넷 환경의 변화에 대응하기 위해 온라인 마케팅에 최적화된
          웹 사이트의 구축, 운영, ON/OFFLINE 통합 프로모션, 바이럴 마케팅까지
          다양한 기능을 수행하는 전문가 그룹입니다.
        </p>
        <p>
          급변하는 경영환경과 IT기술의 혁신, 고객 Needs의 변화 등 여러 시장 상황
          속에서 기업 가치와 역량을 꾸준히 키워나가고 있습니다.
          <br />
          열정과 전문성, 창조성, 고객만족, 효과적인 커뮤니케이션을 추구하는
          RCTOWN의 역량을 바탕으로 고객을 창출하며, 통한 E-Branding을 통한
          Client들의 가치향상을 통해 서로가 WIN-WIN할 수 있는 비지니스파트너가
          되고자 합니다.
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
