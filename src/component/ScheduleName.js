import style from "../routes/basic.module.css";

function ScheduleName({ nextStep }) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <div>안녕하세요!</div>
        <div>일정 이름을 작성해주세요.</div>
      </div>
      <input className={style.inputName} type="text" />
      <button className={style.nextButton} onClick={nextStep}>
        →
      </button>
    </div>
  );
}

export default ScheduleName;