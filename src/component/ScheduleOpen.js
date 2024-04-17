import style from "../routes/basic.module.css";

function ScheduleOpen({ nextStep }) {
  return (
    <div className={style.container}>
      <div className={style.text}>개인별 일정 공개 여부를 선택해주세요.</div>
      <div className={style.openContainer}>
        <button className={style.inputOpen}>
          멤버의 개별 일정을 전체공개합니다
        </button>
        <button className={style.inputOpen}>
          멤버의 개별 일정을 비공개합니다
        </button>
      </div>
      <button className={style.nextButton} onClick={nextStep}>
        →
      </button>
    </div>
  );
}

export default ScheduleOpen;
