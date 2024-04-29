import style from "../routes/basic.module.css";
import { useState } from "react";

function ScheduleOpen({ nextStep, updateOpen, prevStep }) {
  const [open, setOpen] = useState();

  const onSubmit = () => {
    if (open === undefined) {
      alert("공개여부를 선택해주세요.");
    } else {
      updateOpen(open);
      nextStep();
    }
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  // const setTrue = () => {
  //   updateOpen(true);
  // };

  // const setFalse = () => {
  //   updateOpen(false);
  // };

  return (
    <div className={style.container}>
      <div className={style.progressbar}>
        <div className={style.step2}>2/3</div>
      </div>
      <div className={style.text}>개인별 일정 공개 여부를 선택해주세요.</div>
      <div className={style.openContainer}>
        <button
          className={style.inputOpen}
          onClick={() => setOpen(true)}
          onKeyDown={onKeyDown}
        >
          멤버의 개별 일정을 전체공개합니다
        </button>
        <button
          className={style.inputOpen}
          onClick={() => setOpen(false)}
          onKeyDown={onKeyDown}
        >
          멤버의 개별 일정을 비공개합니다
        </button>
      </div>
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

export default ScheduleOpen;
