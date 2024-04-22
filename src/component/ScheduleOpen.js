import style from "../routes/basic.module.css";

function ScheduleOpen({ nextStep, updateOpen, prevStep }) {
  const setTrue = () => {
    updateOpen(true);
  };

  const setFalse = () => {
    updateOpen(false);
  };

  return (
    <div className={style.container}>
      <div className={style.progressbar}>
        <div className={style.step2}>2/3</div>
      </div>
      <div className={style.text}>개인별 일정 공개 여부를 선택해주세요.</div>
      <div className={style.openContainer}>
        <button className={style.inputOpen} onClick={setTrue}>
          멤버의 개별 일정을 전체공개합니다
        </button>
        <button className={style.inputOpen} onClick={setFalse}>
          멤버의 개별 일정을 비공개합니다
        </button>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.nextButton} onClick={prevStep}>
          ←
        </button>
        <button className={style.nextButton} onClick={nextStep}>
          →
        </button>
      </div>
    </div>
  );
}

export default ScheduleOpen;
