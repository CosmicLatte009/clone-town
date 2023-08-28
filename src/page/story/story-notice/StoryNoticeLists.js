import React, { useState } from 'react';
import StoryNoticePopup from './StoryNoticePopup';
import styles from './StoryNoticeLists.module.scss';
import datas from '../../../dummy/story-notice.json';

const StoryNoticeLists = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  const noticeData = datas.data;

  return (
    <>
      <ul className={styles.Wrap}>
        {noticeData.reverse().map((item, index) => (
          <li
            className={styles.List}
            key={item.index}
            onClick={() => handleItemClick(item)}
          >
            <div className={styles.Date}>
              <strong>{item.dd}</strong>
              <span>{item.yymm}</span>
            </div>
            <div className={styles.Title}>
              <span>{item.title}</span>
            </div>
            <button className={styles.PlusBtn}>
              <img
                src="/assets/img/rc-story/plus_icon.svg"
                alt="더 보기 아이콘"
              />
            </button>
          </li>
        ))}
      </ul>
      {selectedItem && (
        <StoryNoticePopup item={selectedItem} onClose={closePopup} />
      )}
    </>
  );
};

export default StoryNoticeLists;
