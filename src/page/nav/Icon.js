import styles from './Icon.module.scss';

const Icon = (props) => {
  return (
    <a href={props.url} target="_blank" className={styles.Icon}>
      <img src={props.img} className={styles.Tooltip} />
      <span className={styles.TooltipText}>{props.text}</span>
    </a>
  );
};

export default Icon;
