import styles from './InputButton.module.scss';

const InputButton = ({ label, placeholder, type }) => {
  return (
    <>
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

export default InputButton;
