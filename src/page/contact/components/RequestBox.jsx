import styles from './RequestBox.module.scss';
import CheckBox from './button/CheckBox';

function RequestBox() {
  return (
    <>
      <div className={styles.requestContainer}>
        <ul className={styles.request}>
          <div className={styles.requestLeft}>
            <li>
              <span className={styles.title}>REQUEST</span>
            </li>
            <li>
              <p>
                문의할 내용이 있거나
                <br />
                의뢰할 프로젝트가
                <br />
                있으신가요??
              </p>
            </li>
            <li>
              <img
                src="http://localhost:3000/assets/img/request_pink.png"
                alt="문의하기 아이콘"
                s
              />
            </li>
            <li className={styles.request_text}>
              <span className={styles.required_mark}></span>
              필수 입력사항입니다.
            </li>
          </div>
          <div className={styles.requestRight}>
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
                <ul className={styles.upload}>
                  <li>
                    <label className={styles.project_nameLabel}>
                      프로젝트 명
                    </label>
                    <input
                      className={styles.project_name}
                      type="email"
                      placeholder="프로젝트 명"
                      required
                    />
                  </li>
                  <li>
                    <label className={styles.project_detailLabel}>
                      프로젝트 설명
                    </label>
                    <textarea
                      className={styles.text_area}
                      type="email"
                      rows="5"
                      cols="50"
                      placeholder="프로젝트를 상세히 설명 해 주세요"
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
                </ul>
              </div>
            </div>
            <div className={styles.request_policy}>
              <div className={styles.request_policyIn}>
                <CheckBox purpose="policy" name="policy1" />
                <label>
                  <a href="#">
                    <u>개인정보보호정책</u>
                  </a>
                  에 동의합니다.
                </label>
              </div>
              <button
                onClick={() => {
                  alert('신청이 완료되었습니다 :D');
                }}
                className={styles.policyBtn}
              >
                신청하기
              </button>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

export default RequestBox;
