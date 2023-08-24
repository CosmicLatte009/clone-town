import { useEffect, useState } from 'react';
import styles from './WebSection.module.scss';
import ServiceMoreBtn from '../../../../components/ServiceMoreBtn';

const WebSection = () => {
  const items = [1, 2, 3];
  const [select, setSelect] = useState(1);
  const [imageSrc, setImageSrc] = useState(
    '/assets/img/rc_service/service_web1.png',
  );

  const TEXT_BY_ITEM = {
    1: (
      <>
        <h1 className={styles.ItemTitle}>성공적인 비즈니스를 위한 web 제작</h1>
        <li>홈페이지/쇼핑몰/교육/여행 사이트 제작</li>
        <li>크리에이티브한 아이디어로 제작</li>
        <li>브랜드 및 서비스 향상을 위한 기획 지원</li>
      </>
    ),
    2: (
      <>
        <h1 className={styles.ItemTitle}>고객만족을 위한 UI/UX 설계</h1>
        <li>직관적인 인터페이스와 고객이 알아보기 쉬운 콘텐츠 구성</li>
        <li>사용자의 인터랙션에 따라 상호작용하는 웹 제작</li>
        <li>Dynamic Web / Interactive Web 제작</li>
      </>
    ),
    3: (
      <>
        <h1 className={styles.ItemTitle}>
          모든 디바이스에 호환되는 반응형 웹 제작
        </h1>
        <li>다양한 규격의 디바이스를 지원</li>
        <li>동일한 정보와 기능을 안정적으로 제공</li>
        <li>별도의 모바일 전용 홈페이지 추가 개발 불필요</li>
      </>
    ),
  };

  const handleClick = (item) => {
    setSelect(item);
    handleImage(item);
  };

  const handleImage = (item) => {
    if (item == 1) {
      setImageSrc('/assets/img/rc_service/service_web1.png');
    } else if (item == 2) {
      setImageSrc('/assets/img/rc_service/service_web2.png');
    } else if (item == 3) {
      setImageSrc('/assets/img/rc_service/service_web3.png');
    }
  };

  return (
    <section className={styles.Web}>
      <div className={styles.ServiceWeb}>
        <h2 className={styles.Title}>WEB</h2>
        <div className={styles.ServiceIn}>
          <div className={styles.WebImg}>
            <div>
              <img src={imageSrc} alt="웹 서비스" />
            </div>
          </div>

          <div className={styles.WebText}>
            <div className={styles.WebMoreWrap}>
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
                <ServiceMoreBtn url="https://www.rctown.co.kr/web_more.php" />
              </div>
            </div>
            <ul className={styles.WebTextBox}>{TEXT_BY_ITEM[select]}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebSection;
