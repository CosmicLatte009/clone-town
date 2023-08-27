import ValueBox from './ValueBox';
import styles from './ValueSection.module.scss';

const ValueSection = () => {
  return (
    <section id="Value" className={styles.ValueSection}>
      <h2 className={styles.Title}>RC VALUE</h2>
      <div className={styles.ValueIn}>
        <div className={styles.ValueBox}>
          <div>
            <ValueBox
              ValueTitle="R"
              ValueImg="assets/img/about_rc/icon_Relationship.png"
              ValueSubTitle="Relationship"
              ValueText1="사람과 사람간의"
              ValueText2="관계를 중시하다"
            />
          </div>

          <div className={styles.VB}>
            <ValueBox
              ValueTitle="S"
              ValueImg="assets/img/about_rc/icon_specialization.png"
              ValueSubTitle="Specialization"
              ValueText1="전문화, 분업화된"
              ValueText2="개발 프로세스"
            />
          </div>
        </div>
        <div className={styles.ValueBox}>
          <div>
            <ValueBox
              ValueTitle="Q"
              ValueImg="assets/img/about_rc/icon_quality.png"
              ValueSubTitle="Quality"
              ValueText1="RC가 가진 기술력으로"
              ValueText2="최상의 퀄리티 제공"
            />
          </div>

          <div className={styles.VB}>
            <ValueBox
              ValueTitle="C"
              ValueImg="assets/img/about_rc/icon_creative.png"
              ValueSubTitle="Creative"
              ValueText1="변화에 안주하지 않고"
              ValueText2="끊임없이 창의적인 생각"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
