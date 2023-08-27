import { useState } from 'react';
import StoryLetterPopup from './StoryLetterPopup';
import styles from './StoryLetterCard.module.scss';
import data from '../../../dummy/story-letter.json';

const StoryLetterCard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const letterData = data.letter;

  return (
    <>
      {letterData.reverse().map((item, index) => (
        <li className={styles.CardWrap} onClick={() => handleItemClick(item)}>
          <div>
            <img src={item.img} alt="미리보기 이미지" />
            <div className={styles.Text}>
              <span className={styles.Date}>{item.date}</span>
              <strong className={styles.Title}>{item.title}</strong>
            </div>
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
