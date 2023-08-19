import styles from './Button.module.scss';
const Button = (props) => {
  const { children, size, onClick } = props;

  const classNames = `${styles.btn} ${styles[size]}`;
  return (
    <button className={classNames} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
