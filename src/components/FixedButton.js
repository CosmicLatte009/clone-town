import { useEffect, useState } from 'react';
import styles from './FixedButton.module.scss';

const FixedButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [clickPlus, setClickPlus] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const togglePlus = () => {
    setClickPlus((clickPlus) => !clickPlus);
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
      {showButton && (
        <div className={styles.FixedButtons}>
          <div className={styles.TopButton} onClick={scrollToTop}>
            <a href="#">
              <div className={styles.TopUp}>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
          <div
            onClick={togglePlus}
            className={`${styles.QuickButton} ${
              clickPlus ? styles.Stretch : null
            }`}
          >
            <div className={styles.QuickPlus}>
              <div className={styles.PlusWrap}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class={styles.QuickLink}>
              <a href="/contact">문의하기</a>
              <a
                href="https://page.stibee.com/subscriptions/119361"
                target="_blank"
              >
                뉴스구독
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FixedButton;
