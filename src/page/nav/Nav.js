import React, { useCallback, useState } from 'react';
import { Link } from 'react-scroll';
import Icon from './Icon';
import styles from './Nav.module.scss';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [subMenuStatus, setSubMenuStatus] = useState({
    about: false,
    service: false,
    portfolio: false,
    story: false,
    contact: false,
    partners: false,
    solution: false,
  });

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  const toggleSubMenu = useCallback(
    (subMenuName) => {
      const newSubMenuStatus = { ...subMenuStatus };
      const currentStatus = newSubMenuStatus[subMenuName];
      if (currentStatus === true) {
        newSubMenuStatus[subMenuName] = false;
      } else {
        Object.keys(newSubMenuStatus).forEach(
          (key) => (newSubMenuStatus[key] = false),
        );
        newSubMenuStatus[subMenuName] = true;
      }
      setSubMenuStatus(newSubMenuStatus);
    },
    [subMenuStatus],
  );

  return (
    <header>
      <div
        className={`${styles.HeaderIn} ${menuOpen ? styles.BgHeaderIn : null}`}
      >
        <a href="https://www.rctown.co.kr/">
          <div
            className={`${styles.LogoGroup} ${
              menuOpen ? styles.WhiteLogo : null
            }`}
          >
            <img src="assets/img/main_banner/logo.svg" />
            <img src="assets/img/main_banner/logo_white.svg" />
          </div>
        </a>
        <span
          onClick={() => toggleMenu()}
          className={menuOpen ? styles.CloseHamburger : styles.Hamburger}
        >
          <span></span>
        </span>
        <ul className={styles.Icons}>
          <li>
            <Icon
              url="https://pf.kakao.com/_ZGyxls"
              img="assets/img/main_banner/icon_kakao.svg"
              text="카카오톡 문의하기"
            />
          </li>
          <li>
            <Icon
              url="https://talk.naver.com/ct/wce2sv?ref=http%3A%2F%2Fwww.rctown.co.kr%2F"
              img="assets/img/main_banner/icon_blog.svg"
              text="네이버톡 문의하기"
            />
          </li>
          <li>
            <Icon
              url="https://www.rctown.co.kr/story.php?s_type=NEWS"
              img="assets/img/main_banner/icon_newsletter.svg"
              text="뉴스레터 바로가기"
            />
          </li>
        </ul>
      </div>
      <nav className={menuOpen ? styles.ShowMenu : styles.HideMenu}>
        <div className={styles.NavIn}>
          <div className={styles.NavWrap}>
            <div className={styles.NavLeft}>
              <ul className={styles.Gnb}>
                <li
                  className={subMenuStatus['about'] ? styles.On : ''}
                  onClick={() => toggleSubMenu('about')}
                >
                  ABOUT RC
                  <ul className={styles.GnbIn}>
                    <li>
                      <a
                        target="_self"
                        href="/about#About"
                        onClick={() => toggleMenu()}
                      >
                        ABOUT RC
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/about#Mission"
                        onClick={() => toggleMenu()}
                      >
                        RC MISSION
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/about#Vision"
                        onClick={() => toggleMenu()}
                      >
                        RC VISION
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/about#Value"
                        onClick={() => toggleMenu()}
                      >
                        RC VALUE
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/about#Organization"
                        onClick={() => toggleMenu()}
                      >
                        RC ORGANIZATION
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/about#Visit"
                        onClick={() => toggleMenu()}
                      >
                        RC VISIT
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={subMenuStatus['service'] ? styles.On : ''}
                  onClick={() => toggleSubMenu('service')}
                >
                  RC SERVICE
                  <ul className={styles.GnbIn}>
                    <li>
                      <a
                        target="_self"
                        href="/service#Service"
                        onClick={() => toggleMenu()}
                      >
                        RC SERVICE
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/service#Web"
                        onClick={() => toggleMenu()}
                      >
                        WEB
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/service#App"
                        onClick={() => toggleMenu()}
                      >
                        APP
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/service#Maintenance"
                        onClick={() => toggleMenu()}
                      >
                        MAINTENANCE
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/service#Ebusiness"
                        onClick={() => toggleMenu()}
                      >
                        e-Business
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={subMenuStatus['portfolio'] ? styles.On : ''}
                  onClick={() => toggleSubMenu('portfolio')}
                >
                  PORTFOLIO
                  <ul className={styles.GnbIn}>
                    <li>
                      <a
                        target="_self"
                        href="/portfolio#Portfolio"
                        onClick={() => toggleMenu()}
                      >
                        PORTFOLIO
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={subMenuStatus['story'] ? styles.On : ''}
                  onClick={() => toggleSubMenu('story')}
                >
                  RC STORY
                  <ul className={styles.GnbIn}>
                    <li>
                      <a
                        target="_self"
                        href="/story#Notice"
                        onClick={() => toggleMenu()}
                      >
                        NOTICE
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/story#Letter"
                        onClick={() => toggleMenu()}
                      >
                        RC LETTER
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/story#Study"
                        onClick={() => toggleMenu()}
                      >
                        RC STUDY
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={subMenuStatus['contact'] ? styles.On : ''}
                  onClick={() => toggleSubMenu('contact')}
                >
                  CONTACT
                  <ul className={styles.GnbIn}>
                    <li>
                      <a
                        target="_self"
                        href="/contact#Request"
                        onClick={() => toggleMenu()}
                      >
                        견적문의
                      </a>
                    </li>

                    <li>
                      <a
                        target="_self"
                        href="/contact#Apply"
                        onClick={() => toggleMenu()}
                      >
                        채용문의
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={subMenuStatus['partners'] ? styles.On : ''}
                  onClick={() => toggleSubMenu('partners')}
                >
                  PARTNERS
                  <ul className={styles.GnbIn}>
                    <li>
                      <a
                        target="_self"
                        href="/partners#Partners"
                        onClick={() => toggleMenu()}
                      >
                        PARTNERS
                      </a>
                    </li>
                  </ul>
                </li>

                <li
                  className={subMenuStatus['solution'] ? styles.On : ''}
                  onClick={() => toggleSubMenu('solution')}
                >
                  SOLUTION
                  <ul className={styles.GnbIn}>
                    <li>
                      <a
                        target="_blank"
                        href="https://tao.rctown.co.kr/"
                        onClick={() => toggleMenu()}
                      >
                        타오바오 직구대행 쇼핑몰
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={styles.NavRight}>
              <ul className={styles.NavRightWrap}>
                <li className={styles.NavDownload}>
                  <a
                    href="https://www.rctown.co.kr/theme/rctown/rctown.pdf"
                    target="_blank"
                  >
                    회사소개서 다운로드
                  </a>
                </li>
                <li>
                  <div className={styles.Phone}>
                    <div>
                      <ul className={styles.PhoneName}>
                        <li>점심시간</li>
                      </ul>
                      <ul className={styles.LunchTime}>
                        <li>13:00 ~ 14:00</li>
                      </ul>
                    </div>
                  </div>
                  <div className={styles.Phone}>
                    <p>연락처</p>
                    <div>
                      <ul className={styles.PhoneName}>
                        <li>대표</li>
                        <li>CS</li>
                        <li>개발팀</li>
                        <li>디자인팀</li>
                        <li>FAX</li>
                        <li>이메일</li>
                        <li>대표이사 메일</li>
                      </ul>
                      <ul className={styles.PhoneNum}>
                        <li>02 - 6494 - 2848</li>
                        <li>02 - 6494 - 2851</li>
                        <li>02 - 6494 - 2849</li>
                        <li>02 - 6494 - 2850</li>
                        <li>02 - 6494 - 2847</li>
                        <li>partner@rctown.co.kr</li>
                        <li>host@rctown.co.kr</li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <address>
                    <p>소프트랩스 : 알씨타운</p>
                    <span>
                      <span className={styles.Bold}>본사</span>&nbsp;서울 금천구
                      디지털로121 1610호
                    </span>
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
