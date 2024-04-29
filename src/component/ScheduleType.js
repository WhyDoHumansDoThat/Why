import style from "../routes/basic.module.css";
import { useState } from "react";
import Calendar from "./Calendar";
import Week from "./Week";

function ScheduleType({ updateType, updateDate, nextStep, prevStep }) {
  // const [show, setShow] = useState(true);
  const [type, setType] = useState();
  const [date, setDate] = useState([]);

  const onSubmit = () => {
    if (date.length === 0) {
      alert("날짜 또는 요일을 선택해주세요");
    } else {
      updateType(type);
      updateDate(date);
      nextStep();
    }

    // usenavigate 사용해서 링크 전환
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className={style.container}>
      <div className={style.progressbar}>
        <div className={style.step3}>3/3</div>
      </div>
      <div className={style.text}>일정의 종류를 선택해주세요.</div>
      <div className={style.typeContainer}>
        <button
          className={style.inputType}
          onClick={() => {
            setType("날짜");
            setDate([]);
          }}
          autoFocus
        >
          날짜별
        </button>
        <button
          className={style.inputType}
          onClick={() => {
            setType("요일");
            setDate([]);
          }}
        >
          요일별
        </button>
      </div>
      {type === "요일" ? (
        <Week date={date} setDate={setDate} onKeyDown={onKeyDown} />
      ) : (
        <Calendar date={date} setDate={setDate} onKeyDown={onKeyDown} />
      )}
      <div className={style.buttonContainer}>
        <button className={style.nextButton} onClick={prevStep}>
          ←
        </button>
        <button
          className={style.nextButton}
          onClick={onSubmit}
          onKeyDown={onKeyDown}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default ScheduleType;
