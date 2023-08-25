import IntroduceBox from './components/IntroduceBox';
import ApplyBox from './components/ApplyBox';
import styles from './ApplyPage.module.scss';
import TextArea from './components/button/TextArea';
import InputButton from './components/button/InputButton';
import CheckBox from './components/button/CheckBox';

function ApplyPage() {
  return (
    <div className={styles.container}>
      <IntroduceBox />
      <ApplyBox />
    </div>
  );
}

export default ApplyPage;
