import portfolioData from './portfolio.json';
import styles from './portfolioPage.module.scss';
import PortfolioCard from './component/PortfolioCard';

const PortfolioList = () => {
  return (
    <>
      <PortfolioCard portfolioData={portfolioData} />
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
