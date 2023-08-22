import { useState } from 'react';

import styles from './portfolioPage.module.scss';
import PortfolioCard from './component/PortfolioCard';

const PortfolioList = () => {
  const [category, setCategory] = useState('All');
  const [data, setData] = useState(portfolioData.data);

  console.log('data', data);
  console.log('data.category', data[0].category);

  const clickTabHandler = () => {};

  //첫 로딩시(카테고리가 All일 경우) 모든 카테고리를 보여줌
  //이후 카테고리가 바뀔 때 마다
  //map을 돌면서 각 인덱스의 카테고리 확인
  //해당하는 카테고리의 detail을 새 배열에 저장
  //detail만 저장된 새 배열을 data에 다시 세팅

  return (
    <>
      <div className={styles.portfolio_tap}>
        <ul>
          <li>ALL</li>
          <li>WEB</li>
          <li>MALL</li>
          <li>APP</li>
          <li>IoT</li>
          <li>Etc</li>
        </ul>
      </div>

      <div className={styles.portfolio_list}>
        {data.map((data, index) => {
          return <PortfolioCard portfolioData={data} index={index} />;
        })}
      </div>
    </>
  );
};

const PortfolioPage = () => {
  return (
    <>
      <PortfolioList />
    </>
  );
};

export default PortfolioPage;
