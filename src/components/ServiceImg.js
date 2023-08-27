import styles from './ServiceImg.module.scss';

const ServiceImg = (props) => {
  return (
    <div className={styles.Img}>
      <div>
        <img src={props.img} />
      </div>
    </div>
  );
};

export default ServiceImg;
