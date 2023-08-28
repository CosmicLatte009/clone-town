import { Link } from 'react-router-dom';

import styles from './Section3Tab.module.scss';

const Section3Tab = ({ category }) => {
  return (
    <div className={styles.bottom}>
      <div className={styles.wrap}>
        <div className={styles.text_group}>
          <div className={styles.text_wrap}>
            <p class="web" className={category == 0 ? styles.selected : ''}>
              고객의 성공적인 비즈니스를 위한 web 제작을 지원 하며 변화하는 시장
              환경과 다각화 되는 고객에게 모두 대응하기 하기 위해 웹 표준과 웹
              호환성을 준수하여 모든 디바이스에 호환되는 반응형 web제작을
              지원합니다.
              <br />
            </p>
            <p class="app" className={category == 1 ? styles.selected : ''}>
              고객의 비즈니스 상황과 요구사항에 맞는 기능구현을 통해 최소의
              비용으로 최대의 효과를 달성할 수 있도록 native app/hybrid app/web
              app 개발합니다. 모바일 서비스 환경 구축, 시스템 연동 및 통합
              서비스 플랫폼 구축으로 IOT 앱 제작을 지원합니다.
            </p>
            <p
              class="maintain"
              className={category == 2 ? styles.selected : ''}
            >
              체계적이고 안정적인 유지관리로 불필요한 유지보수 비용을 재고하여
              호스팅/클라우드 서버/로그분석/구글 애널리틱스 활용하여 연단위
              유지보수를 기획 및 지원하고, 이벤트, 프로모션, 정보변경 등의
              비정기 유지관리 서비스를 제공 합니다.
            </p>
            <p class="e_busi" className={category == 3 ? styles.selected : ''}>
              린 캔버스를 통한 고객 지향적인 제품과 서비스를 기획하고,
              컨설팅/제작/유지관리/마케팅 등의 서비스 전 과정을 지원합니다.
              블루투스, 와이파이, 3G/4G 네트워크, 프로토콜을 활용하여 스마트
              홈/스마트 오피스/스마트 팩토리를 구현 합니다.
            </p>
          </div>
        </div>
        <div className={styles.btn_wrap}>
          <button>{/* <Link to="/service">더 알아보기</Link> */}</button>
        </div>
      </div>
    </div>
  );
};

export default Section3Tab;
