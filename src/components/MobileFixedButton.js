import { useEffect, useState } from 'react';
import styles from './MobileFixedButton.module.scss';

const MobileFixedButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [clickHeadPhone, setClickHeadPhone] = useState(false);

  const toggleHeadPhone = () => {
    setClickHeadPhone((clickHeadPhone) => !clickHeadPhone);
  };

  useEffect(() => {
    const showButtons = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', showButtons);
    return () => {
      window.removeEventListener('scroll', showButtons);
    };
  }, []);

  return (
    <>
      <div className={clickHeadPhone ? styles.BlackBg : null}></div>
      <div className={styles.MFixedButtons}>
        <div
          className={`${styles.GoBtn} ${
            clickHeadPhone ? styles.Stretch : null
          }`}
          onClick={() => toggleHeadPhone()}
        >
          <div className={styles.GoPlus}>
            <img
              src={
                clickHeadPhone
                  ? 'assets/img/main_banner/whiteheadphone.png'
                  : 'assets/img/main_banner/pinkheadphone.png'
              }
            />
          </div>
          <div className={styles.GoLink}>
            <ul>
              <li>
                <a href="https://pf.kakao.com/_ZGyxls" target="_blank">
                  <img
                    src="assets/img/main_banner/icon_kakao.svg"
                    alt="카카오채널 바로가기"
                  />
                  <p>카카오문의</p>
                </a>
              </li>

              <li>
                <a
                  href="https://talk.naver.com/ct/wce2sv?ref=http%3A%2F%2Fwww.rctown.co.kr%2F"
                  target="_blank"
                >
                  <img
                    src="assets/img/main_banner/icon_blog.svg"
                    alt="네이버 톡톡"
                  />
                  <p>네이버문의</p>
                </a>
              </li>

              <li>
                <a href="/story#Letter">
                  <img
                    src="assets/img/main_banner/icon_newsletter.svg"
                    alt="뉴스레터 바로가기"
                  />
                  <p>뉴스레터</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFixedButton;
