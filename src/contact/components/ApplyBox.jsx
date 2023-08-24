import styles from './ApplyBox.module.scss';

const ApplyBox = () => {
  return (
    <>
      <div className={styles.applyContainer}>
        <ul className={styles.apply}>
          <div className={styles.applyTop}>
            <li>
              <span className={styles.title}>APPLY</span>
            </li>
            <li>
              <p>
                알씨타운과 함께 할
                <br />
                소중한 인재를 찾고 있습니다
              </p>
            </li>
            <li>
              <img
                src="http://localhost:3000/assets/img/recruit_pink.png"
                alt="문의하기 아이콘"
                s
              />
            </li>
            <li className={styles.apply_text}>
              <span className={styles.apply_mark}></span>
              필수 입력사항입니다.
            </li>
          </div>
          <div className={styles.applyRight}>
            <div className={styles.applyBottom}>
              <div className={styles.input_list}>
                <ul>
                  <li>
                    <label>성함</label>
                    <input
                      className={styles.apply_input}
                      type="text"
                      placeholder="성함을 입력해주세요."
                      required
                    />
                  </li>
                  <li>
                    <label>연락처</label>
                    <input
                      className={styles.apply_input}
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
                      className={styles.apply_input}
                      type="email"
                      placeholder="이메일 형태로 적어주세요."
                      required
                    />
                  </li>
                  <li>
                    <label>사이트 주소(포트폴리오)</label>
                    <input
                      className={styles.apply_input}
                      type="email"
                      placeholder="링크를 입력해주세요."
                      required
                    />
                  </li>
                </ul>
                <ul className={styles.upload}>
                  <li>
                    <label className={styles.project_detailLabel}>
                      자기소개
                    </label>
                    <textarea
                      className={styles.text_area}
                      type="email"
                      rows="5"
                      cols="50"
                      placeholder="간단한 자기소개 부탁드립니다"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input
                      className={styles.project_file}
                      type="email"
                      placeholder="파일을 업로드 해 주세요"
                      required
                    />
                    <div className={styles.file_input_div}>
                      <img src="" />
                    </div>
                  </li>
                  <li>
                    <input
                      className={styles.project_file}
                      type="email"
                      placeholder="파일을 업로드 해 주세요"
                      required
                    />
                    <div className={styles.file_input_div}>
                      <img src="" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.apply_policy}>
              <div className={styles.apply_policyIn}>
                <input type="checkbox" className={styles.checkBox} />
                <label>
                  <a href="#">
                    <u>개인정보보호정책</u>
                  </a>
                  에 동의합니다.
                </label>
              </div>
              <button
                onClick={() => {
                  alert('지원이 완료되었습니다 :D');
                }}
                className={styles.policyBtn}
              >
                지원하기
              </button>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default ApplyBox;
