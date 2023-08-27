import styles from './TextArea.module.scss';

const TextArea = ({ label, placeholder, important }) => {
  return (
    <>
      <div>
        <span className={important == true ? styles.required_mark : ''}></span>
        <label className={styles.project_detailLabel}>{label}</label>
        <textarea
          className={styles.text_area}
          type="text"
          rows="5"
          cols="50"
          placeholder={placeholder}
          required
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
