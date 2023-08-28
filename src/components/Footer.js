import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.FooterWrap}>
      <div>
        <div className={styles.LogoWrap}>
          <img
            className={styles.SoftLabsLogo}
            src="/assets/img/main_banner/softlabs_logo_gw.svg"
            alt="소프트랩스 로고"
          />
          <a
            href="https://blog.naver.com/prologue/PrologueList.naver?blogId=ideavillage&directAccess=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.NaverBlogLogo}
              src="/assets/img/main_banner/naver_blog1.svg"
              alt="네이버 블로그 로그"
            />
          </a>
        </div>
        <div className={styles.Locate}>
          <p>(주)소프트랩스 알씨타운</p>
          <p>
            본사 서울 금천구 디지털로121 1610호
            <a
              href="https://map.kakao.com/?map_type=TYPE_MAP&q=%EC%84%9C%EC%9A%B8+%EA%B8%88%EC%B2%9C%EA%B5%AC+%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C+121&urlLevel=2&urlX=473485&urlY=1104656"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/img/main_banner/icon_locate.svg"
                alt="지도 아이콘"
              />
            </a>
          </p>
        </div>
      </div>
      <div className={styles.ContactWrap}>
        <ul className={styles.ContactLeft}>
          <li>
            <span>대표</span>
            <span>02 - 6494 - 2848</span>
          </li>
          <li>
            <span>CS</span>
            <span>02 - 6494 - 2851</span>
          </li>
          <li>
            <span>디자인팀</span>
            <span>02 - 6494 - 2850</span>
          </li>
        </ul>
        <ul className={styles.ContactRight}>
          <li>
            <span>개발팀</span>
            <span>02 - 6494 - 2849</span>
          </li>
          <li>
            <span>Fax</span>
            <span>02 - 6494 - 2847</span>
          </li>
          <li>
            <span>이메일</span>
            <span>partner@rctown.co.kr</span>
          </li>
          <li>
            <span>대표이사 메일</span>
            <span>host@rctown.co.kr</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
