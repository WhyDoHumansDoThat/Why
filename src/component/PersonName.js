import style from "../routes/basic.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function PersonName({ onChange }) {
  const [name, setName] = useState();
  const [pw, setPw] = useState();
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePW = (e) => {
    setPw(e.target.value);
  };

  const onSubmit = () => {
    if (name === undefined || pw === undefined) {
      alert("어쩌구");
    } else {
      onChange(name, pw);
      navigate("/choose");
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <div className={style.text}>
        <div>일정 참여를 위해 본인 정보를 입력해 주세요.</div>
      </div>
      <input
        className={style.inputName}
        type="text"
        placeholder="이름"
        onChange={onChangeName}
      />
      <input
        className={style.inputName}
        type="password"
        placeholder="비밀번호"
        onChange={onChangePW}
        onKeyDown={onKeyDown}
      />
      {/* input type에서 password와 number를 동시에 쓸 수는 없을까...하 */}
      {/* 있겠지 근데 개번거롭겠지 ㅡㅇㅎ마ㅣ힁;ㄹ */}
      <button
        className={style.nextButton}
        onClick={onSubmit}
        onKeyDown={onKeyDown}
      >
        →
      </button>
    </div>
  );
}

export default PersonName;
