import { Link } from 'react-router-dom';
import styles from './StoryNavLink.module.scss';

const StoryNavLink = ({ to, children, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`${styles.List} ${isActive ? styles.Active : ''}`}
    >
      <Link to={to} className={styles.Link}>
        {children}
      </Link>
    </li>
  );
};

export default StoryNavLink;
