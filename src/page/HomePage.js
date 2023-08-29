import MainBannerSection from './main/Section1/MainBannerSection';
import Section2 from './main/Section2/Section2';
import Section3 from './main/Section3/Section3';
import Section4 from './main/Section4/Section4';
import MainStorySection from './main/Section5/MainStorySection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <section>
      <MainBannerSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <MainStorySection />
      <Footer />
    </section>
  );
};

export default HomePage;
