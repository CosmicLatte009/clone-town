import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Data from '../../../../dummy/section4.json';
import styles from './Carousel.module.scss';

import { SampleNextArrow, SamplePrevArrow } from '../Section4';

// const PrevArrow = ({ onClick }) => {
//   return (
//     <div className={styles.arrow}>
//       <li className={styles.left_arrow}>
//         <img
//           src={process.env.PUBLIC_URL + 'assets/img/main_banner/arrow_left.png'}
//           onClick={onClick}
//         />
//       </li>
//     </div>
//   );
// };

// const NextArrow = ({ onClick }) => {
//   return (
//     <div className={styles.arrow}>
//       <li className={styles.right_arrow}>
//         <img
//           src={
//             process.env.PUBLIC_URL + 'assets/img/main_banner/arrow_right.png'
//           }
//           onClick={onClick}
//         />
//       </li>
//     </div>
//   );
// };

const Carousel = () => {
  const data = Data.data;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {data.map((item, index) => {
          return (
            <div className={styles.img_wrap} key={'slide' + index}>
              <a href={item.url}>
                <img src={process.env.PUBLIC_URL + item.img} />
                <div className={styles.black} key={'black' + index}>
                  <div className={styles.text} key={'text' + index}>
                    <h3 key={'h3' + index}>{item.name}</h3>
                    <p key={'p' + index}>{item.summary}</p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
