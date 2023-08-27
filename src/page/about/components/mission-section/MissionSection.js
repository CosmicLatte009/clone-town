import styles from './MissionSection.module.scss';
const MissionSection = () => {
  return (
    <section id="Mission" className={styles.MissionSection}>
      <span className={styles.Blind}></span>
      <div className={styles.MissionIn}>
        <h2 className={styles.Title}>RC MISSION</h2>
        <span className={styles.Content}>
          4차 산업혁명 시대에
          <br />
          정보기술로 미래산업을 선도한다
        </span>
      </div>
    </section>
  );
};

export default MissionSection;
