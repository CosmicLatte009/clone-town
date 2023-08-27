import ServiceMoreBtn from './ServiceMoreBtn';
import styles from './ServiceText.module.scss';

const ServiceText = (props) => {
  return (
    <>
      <div className={styles.MoreBtn}>
        <ServiceMoreBtn url={props.url} />
      </div>
      <ul className={styles.TextList}>
        <h1 className={styles.Title}>{props.subtitle}</h1>
        <li>{props.text1}</li>
        <li>{props.text2}</li>
        <li>{props.text3}</li>
      </ul>
    </>
  );
};

export default ServiceText;
