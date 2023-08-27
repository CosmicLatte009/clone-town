import IntroduceBox from './components/IntroduceBox';
import ApplyBox from './components/ApplyBox';
import styles from './ApplyPage.module.scss';

function ApplyPage() {
  return (
    <div className={styles.container}>
      <IntroduceBox />
      <ApplyBox />
    </div>
  );
}

export default ApplyPage;
