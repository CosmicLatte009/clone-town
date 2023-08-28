import { useEffect, useState } from 'react';

import styles from './portfolioPage.module.scss';
import PortfolioCard from './component/PortfolioCard';

const CATEGORY = ['ALL', 'WEB', 'MALL', 'APP', 'IoT', 'Etc'];

const PortfolioBox = () => {
  const [category, setCategory] = useState('ALL');
  const [data, setData] = useState([]);

  async function fetchData(category) {
    const response = await fetch(
      `/assets/dummy/portfolioData/portfolio${category}.json`,
    );
    const data = await response.json();
    console.log(data);

    const newData = { ...data };
    setData(newData.data);
  }

  useEffect(() => {
    fetchData('ALL');
  }, []);

  useEffect(() => {
    fetchData(category);
  }, [category]);

  const selectCategoryHandler = (e) => {
    const selectCategory = e.target.value;
    setCategory(selectCategory);
  };

  return (
    <>
      <div className={styles.portfolio}>
        <h2 className={styles.portfolio_title}>PORTFOLIO</h2>
        <div className={styles.portfolio_tap}>
          <ul>
            {CATEGORY.map((item, index) => {
              return (
                <li key={'TabLi' + index}>
                  <span>
                    <button
                      onClick={selectCategoryHandler}
                      value={item}
                      className={item == category ? styles.btn_selected : ``}
                    >
                      {item}
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.portfolio_container}>
          {/* <div className={styles.portfolio_list}> */}
          {data.map((data, index) => {
            return <PortfolioCard portfolioData={data} index={index} />;
          })}
          {/* </div> */}
        </div>
      </div>
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
