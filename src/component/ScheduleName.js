import style from "../routes/basic.module.css";
import { useState } from "react";

function ScheduleName({ nextStep, updateName }) {
  const [name, setName] = useState();

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onSubmit = () => {
    if (name === undefined) {
      alert("일정 이름 작성은 필수입니다.");
    } else {
      updateName(name);
      nextStep();
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <div className={style.progressbar}>
        <div className={style.step1}>1/3</div>
      </div>
      <div className={style.text}>
        <div>안녕하세요!</div>
        <div>일정 이름을 작성해주세요.</div>
      </div>
      <input
        className={style.inputName}
        onChange={onChangeName}
        onKeyDown={onKeyDown}
      />

      <button className={style.nextButton} onClick={onSubmit}>
        →
      </button>
    </div>
  );
}

export default ScheduleName;
