import React, { useState } from 'react';
import styles from './StoryNav.module.scss';
import StoryNavLink from './StoryNavLink';

const StoryNav = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav>
      <ul className={styles.NavWrap}>
        <StoryNavLink
          to="/story-notice"
          isActive={activeIndex === 0}
          onClick={() => handleNavLinkClick(0)}
        >
          NOTICE
        </StoryNavLink>
        <StoryNavLink
          to="/story-letter"
          isActive={activeIndex === 1}
          onClick={() => handleNavLinkClick(1)}
        >
          RC LETTER
        </StoryNavLink>
        <StoryNavLink
          to="/story-study"
          isActive={activeIndex === 2}
          onClick={() => handleNavLinkClick(2)}
        >
          RC STUDY
        </StoryNavLink>
      </ul>
    </nav>
  );
};

export default StoryNav;
