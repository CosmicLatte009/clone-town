import IntroduceBox from './components/IntroduceBox';
import RequestBox from './components/RequestBox';
import styles from './RequestPage.module.scss';

function RequestPage() {
  return (
    <div className={styles.container}>
      <IntroduceBox />
      <div className={styles.requestBody}>
        <RequestBox />
      </div>
    </div>
  );
}

export default RequestPage;
