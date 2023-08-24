import styles from './ServiceMoreBtn.module.scss';

const ServiceMoreBtn = (props) => {
  return (
    <a className={styles.MoreBtn} href={props.url} target="_blank">
      더 알아보기 +
    </a>
  );
};

export default ServiceMoreBtn;
