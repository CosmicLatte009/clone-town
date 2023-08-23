import styles from './RequestBox.module.scss';

function RequestBox() {
  return (
    <>
      <div className={styles.requestContainer}>
        <ul className={styles.request}>
          <div className={styles.requestTop}>
            <li>
              <span className={styles.title}>REQUEST</span>
            </li>
            <li>
              <p>
                문의할 내용이 있거나
                <br />
                의뢰할 프로젝트가 있으신가요?
              </p>
            </li>
            <li>
              <img
                src="http://localhost:3000/assets/img/request_pink.png"
                alt="문의하기 아이콘"
              />
            </li>
            <li className={styles.request_text}>
              <span className={styles.required_mark}></span>
              필수 입력사항입니다.
            </li>
          </div>
        </ul>
        <div className={styles.requestBottom}>
          <div className={styles.input_list}>
            <ul>
              <li>
                <label>성함</label>
                <input
                  className={styles.request_input}
                  type="text"
                  placeholder="성함을 입력해주세요."
                  required
                />
              </li>
              <li>
                <label>연락처</label>
                <input
                  className={styles.request_input}
                  type="text"
                  placeholder="-포함하여 입력해주세요."
                  required
                />
              </li>
            </ul>
            <ul>
              <li>
                <label>이메일</label>
                <input
                  className={styles.request_input}
                  type="email"
                  placeholder="이메일 형태로 적어주세요."
                  required
                />
              </li>
              <li>
                <label>회사명/직급</label>
                <input
                  className={styles.request_input}
                  type="text"
                  placeholder="회사명/직급을 입력해주세요."
                  required
                />
              </li>
            </ul>
            <ul>
              <li>
                <label>예산</label>
                <input
                  className={styles.request_input}
                  type="email"
                  placeholder="예산을 입력해주세요."
                  required
                />
              </li>
              <li>
                <label>벤치마킹할 사이트</label>
                <input
                  className={styles.request_input}
                  type="email"
                  placeholder="링크를 입력해주세요."
                  required
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequestBox;
