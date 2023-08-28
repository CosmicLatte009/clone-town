import styles from './PortfolioCard.module.scss';
import Button from '../../../components/Button';

const PortfolioCard = ({ portfolioData, index }) => {
  const data = portfolioData;
  return (
    <>
      <div className={styles.container}>
        <div className={styles.portWarpper}>
          <div className={index % 2 == 0 ? styles.port1 : styles.port2}>
            <div className={styles.company_imgWrapper}>
              <div className={styles.company_Img}>
                <img src={process.env.PUBLIC_URL + data.img} />
              </div>
            </div>
            <div className={styles.company_contentWrapper}>
              <ul>
                <li>
                  <p>{data.Summary}</p>
                </li>
                <li>
                  <h5>{data.name}</h5>
                </li>
                <li>
                  <div className={styles.company_colorBox}>
                    <p>COLOR</p>
                    <div className={styles.company_colorPalette}>
                      {data.color.map((color, index) => {
                        return (
                          <span
                            key={'color' + index}
                            style={{ backgroundColor: `${color}` }}
                          ></span>
                        );
                      })}
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.company_urlBtn}>
                    <Button
                      size="small"
                      onClick={(e) => {
                        window.location.href = data.url;
                      }}
                    >
                      URL
                    </Button>
                  </div>
                </li>
              </ul>
              <div className={styles.company_tagWrapper}>
                <div className={styles.company_tag}>
                  <ul>
                    {data.tag.map((item, index) => {
                      return <li key={'tag' + index}>#{item}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
