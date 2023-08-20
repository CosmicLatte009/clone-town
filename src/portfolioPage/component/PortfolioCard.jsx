import styles from './PortfolioCard.module.scss';

const PortfolioCard = ({ portfolioData }) => {
  const data = portfolioData.data[0].detail;
  console.log(process.env.PUBLIC_URL + data.img);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.company_imgWrapper}>
          <img src={process.env.PUBLIC_URL + data.img} />
        </div>
        <div className={styles.company_content}>
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
              <div className={styles.company_urlBtn}></div>
            </li>
          </ul>
          <div className={styles.company_tag}>
            <ul>
              {data.tag.map((item, index) => {
                return <li key={'tag' + index}>#{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;
