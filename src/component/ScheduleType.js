import style from "../routes/basic.module.css";
import { useNavigate } from "react-router-dom";

function ScheduleType() {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <div className={style.text}>일정의 종류를 선택해주세요.</div>
      <div className={style.typeContainer}>
        <button className={style.inputType}>날짜별</button>
        <button className={style.inputType}>요일별</button>
      </div>
      {/* react-calendar library 사용 */}
      <button className={style.nextButton}         
      onClick ={() => { 
          navigate("/:id"); 
          }}>→</button>
    </div>
  );
}

export default ScheduleType;