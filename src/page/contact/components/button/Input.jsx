import styles from './Input.module.scss';

const Input = ({ label, placeholder, type, important }) => {
  return (
    <>
      <span className={important == true ? styles.required_mark : ''}></span>
      <label className={styles.inputLabel}>{label}</label>
      <input
        className={styles.input_input}
        type={type}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
