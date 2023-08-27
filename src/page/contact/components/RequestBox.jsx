import styles from './RequestBox.module.scss';
import CheckBox from './button/CheckBox';
import Input from './button/Input';
import Textarea from './button/TextArea';

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
                    <Input
                      label="성함"
                      type="text"
                      placeholder="성함을 입력해주세요."
                      important
                    />
                  </li>
                  <li>
                    <Input
                      label="연락처"
                      type="text"
                      placeholder="-포함하여 입력해주세요."
                      important
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Input
                      label="이메일"
                      type="email"
                      placeholder="이메일 형태로 적어주세요."
                      important
                    />
                  </li>
                  <li>
                    <Input
                      label="회사명/직급"
                      type="text"
                      placeholder="회사명/직급을 입력해주세요."
                    />
                  </li>
                </ul>
                <ul>
                  <li>
                    <Input
                      label="예산"
                      type="text"
                      placeholder="예산을 입력해주세요."
                    />
                  </li>
                  <li>
                    <Input
                      label="벤치마킹할 사이트"
                      type="text"
                      placeholder="링크를 입력해주세요."
                    />
                  </li>
                </ul>
                <ul className={styles.upload}>
                  <li>
                    <span className={styles.required_mark}></span>
                    <label className={styles.project_nameLabel}>
                      프로젝트 명
                    </label>
                    <input
                      className={styles.project_name}
                      type="text"
                      placeholder="프로젝트 명"
                    />
                  </li>
                  <li>
                    <Textarea
                      label="프로젝트 설명"
                      className={styles.text_area}
                      type="email"
                      rows="5"
                      cols="50"
                      placeholder="프로젝트를 상세히 설명 해 주세요"
                    />
                  </li>
                  <li className={styles.fileInput}>
                    <input
                      className={styles.project_file}
                      type="text"
                      placeholder="파일을 업로드 해 주세요"
                    />
                    <div className={styles.file_input_div}>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/img/main_banner/upload_icon.webp'
                        }
                      />
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
