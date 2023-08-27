import styles from './TextArea.module.scss';

const TextArea = ({ label, placeholder }) => {
  return (
    <>
      <li>
        <label className={styles.project_detailLabel}>{label}</label>
        <textarea
          className={styles.text_area}
          type="email"
          rows="5"
          cols="50"
          placeholder={placeholder}
          required
        ></textarea>
      </li>
    </>
  );
};

export default TextArea;
