import { useState } from 'react';
import StoryLetterPopup from './StoryLetterPopup';
import styles from './StoryLetterCard.module.scss';
import datas from '../../../dummy/story-letter.json';

const StoryLetterCard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const letterData = datas.data;

  return (
    <>
      {letterData.reverse().map((item, index) => (
        <li
          className={styles.CardWrap}
          key={index}
          onClick={() => handleItemClick(item)}
        >
          <img src={item.img} alt="미리보기 이미지" />
          <div className={styles.Text}>
            <span className={styles.Date}>{item.date}</span>
            <strong className={styles.Title}>{item.title}</strong>
          </div>
        </li>
      ))}

      {selectedItem && (
        <StoryLetterPopup item={selectedItem} onClose={closePopup} />
      )}
    </>
  );
};

export default StoryLetterCard;
