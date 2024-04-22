import style from "../routes/basic.module.css";
import { useState } from "react";
import Calendar from "./Calendar";
import Week from "./Week";

function ScheduleType({ updateType, nextStep, prevStep }) {
  const [show, setShow] = useState(true);
  const [date, setDate] = useState([]);

  const ending = () => {
    updateType(date);
    nextStep();
    // usenavigate 사용해서 링크 전환
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
          onClick={() => setShow(true)}
          autoFocus
        >
          날짜별
        </button>
        <button className={style.inputType} onClick={() => setShow(false)}>
          요일별
        </button>
      </div>
      {show === true ? (
        <Calendar date={date} setDate={setDate} />
      ) : (
        <Week date={date} setDate={setDate} />
      )}
      <div className={style.buttonContainer}>
        <button className={style.nextButton} onClick={prevStep}>
          ←
        </button>
        <button className={style.nextButton} onClick={ending}>
          →
        </button>
      </div>
    </div>
  );
}

export default ScheduleType;
