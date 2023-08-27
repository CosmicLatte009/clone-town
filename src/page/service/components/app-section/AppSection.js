import { useState } from 'react';
import styles from './AppSection.module.scss';
import ServiceMoreBtn from '../../../../components/ServiceMoreBtn';

const AppSection = () => {
  const items = [1, 2, 3];
  const [select, setSelect] = useState(1);
  const [imageSrc, setImageSrc] = useState(
    '/assets/img/rc_service/service_app1.png',
  );

  const TEXT_BY_ITEM = {
    1: (
      <>
        <h1 className={styles.ItemTitle}>비즈니스 상황을 고려한 앱 제작</h1>
        <li>최적화된 기능으로 빠른 속도의 네이티브 앱 제작</li>
        <li>단기간 적은비용으로 하이브리드 앱 제작</li>
        <li>모든 단말기에 호환되는 모바일 웹/앱 제작</li>
      </>
    ),
    2: (
      <>
        <h1 className={styles.ItemTitle}>
          고객의 요구사항에 대응하는 기능구현
        </h1>
        <li>채팅·푸시·결제·미디어서버·위치기반·SNS 등 기능구현</li>
        <li>업종별 맞춤 서비스 앱 개발</li>
        <li>합리적인 비용으로 앱개발</li>
      </>
    ),
    3: (
      <>
        <h1 className={styles.ItemTitle}>IOT 앱 개발</h1>
        <li>시스템 연동 및 통합 서비스 플랫폼 구축</li>
        <li>블루투스, 와이파이, 3G/4G 네트워크의 활용</li>
        <li>스마트홈, 스마트 오피스, 스마트 팩토리 구현</li>
      </>
    ),
  };

  const handleClick = (item) => {
    setSelect(item);
    handleImage(item);
  };

  const handleImage = (item) => {
    if (item == 1) {
      setImageSrc('/assets/img/rc_service/service_app1.png');
    } else if (item == 2) {
      setImageSrc('/assets/img/rc_service/service_app2.png');
    } else if (item == 3) {
      setImageSrc('/assets/img/rc_service/service_app3.png');
    }
  };

  return (
    <section id="App" className={styles.App}>
      <div className={styles.ServiceApp}>
        <h2 className={styles.Title}>APP</h2>
        <div className={styles.ServiceIn}>
          <div className={styles.AppText}>
            <div className={styles.AppMoreWrap}>
              <ul className={styles.NumBtn}>
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={`${select == item ? styles.Select : ''}`}
                    onClick={() => handleClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className={styles.MoreBtn}>
                <ServiceMoreBtn url="https://www.rctown.co.kr/app_more.php" />
              </div>
            </div>
            <ul className={styles.AppTextBox}>{TEXT_BY_ITEM[select]}</ul>
          </div>

          <div className={styles.AppImg}>
            <div>
              <img src={imageSrc} alt="앱 서비스" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
