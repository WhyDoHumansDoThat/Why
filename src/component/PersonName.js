import style from "../routes/basic.module.css";
import { useNavigate } from "react-router-dom";


function PersonName(props) {
  const navigate = useNavigate();
  
  return (
    <div className={style.container}>
      <div className={style.text}>
        <div>일정 참여를 위해 본인 정보를 입력해 주세요.</div>
      </div>
      <input className={style.inputName} type="text" placeholder="이름" />
      <input className={style.inputName} type="password" placeholder="비밀번호" />
      {/* input type에서 password와 number를 동시에 쓸 수는 없을까...하 */}
      {/* 있겠지 근데 개번거롭겠지 ㅡㅇㅎ마ㅣ힁;ㄹ */}
      <button className={style.nextButton}  onClick ={() => { 
          navigate("/choose"); 
          }}>
        →
      </button>
    </div>
  );
}

export default PersonName;