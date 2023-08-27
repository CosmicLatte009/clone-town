import styles from './CheckBox.module.scss';

const CheckBox = ({ purpose, name }) => {
  return (
    <>
      <div
        className={
          purpose == 'carrer'
            ? styles.career_check
            : purpose == 'option'
            ? styles.option_check
            : styles.policy_check
        }
      >
        <input
          id={name}
          name={name}
          type={purpose == 'policy' ? 'checkbox' : 'radio'}
        />
        <label htmlFor={name}></label>
      </div>
    </>
  );
};

export default CheckBox;
