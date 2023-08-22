import { useEffect, useState } from 'react';

import styles from './portfolioPage.module.scss';
import PortfolioCard from './component/PortfolioCard';
import ALLData from './portfolioData/portfolioALL.json';

// import WEBData from './portfolioData/portfolioWeb.json';
// import MALLData from './portfolioData/portfolioMall.json';
// import APPData from './portfolioData/portfolioApp.json';
// import IoTData from './portfolioData/portfolioIot.json';
// import EtcData from './portfolioData/portfolioEtc.json';

const CATEGORY = ['ALL', 'WEB', 'MALL', 'APP', 'IoT', 'Etc'];

const PortfolioBox = () => {
  const [category, setCategory] = useState('ALL');
  const [data, setData] = useState(ALLData);

  async function fetchData(category) {
    const response = await fetch(
      `/assets/dummy/portfolioData/portfolio${category}.json`,
    );
    const data = await response.json();
    console.log(data);

    setData(data);
  }

  const selectCategoryHandler = (e) => {
    const selectCategory = e.target.value;
    setCategory(selectCategory);
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  return (
    <>
      <div className={styles.portfolio_tap}>
        <ul>
          {CATEGORY.map((item, index) => {
            return (
              <li key={'TabLi' + index}>
                <button onClick={selectCategoryHandler} value={item}>
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* <div className={styles.portfolio_list}>
        {data.map((data, index) => {
          return <PortfolioCard portfolioData={data} index={index} />;
        })}
      </div> */}
    </>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <PortfolioBox />
    </>
  );
};

export default PortfolioPage;
