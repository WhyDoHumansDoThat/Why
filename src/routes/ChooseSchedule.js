import style from "../routes/basic.module.css";
import ChooseBox from "../component/ChooseBox";

function ChooseSchedule() {
  return (
    <div>
    <div className={style.topcontainer}>
      <div className={style.plantext}>일정 이름</div>
      <div className={style.text}>가능한 일정을 모두 표시해 주시지예.</div>
    </div>
    <div className={style.bottomcontainer}>
    <div className={style.leftcontainer}>
      {/* 왼쪽 컨테이너에 들어갈 요소 */}
      <div className={style.userplan}>전체 일정</div>
        <div className={style.choosebox}>
          {[...Array(10)].map((_, index) => (
          <ChooseBox key={index} />
          ))}
      </div>
    </div>
    
    <div className={style.rightcontainer}>
      <div className={style.userplan}>000님의 일정</div>
        <div className={style.choosebox}>
          {[...Array(10)].map((_, index) => (
          <ChooseBox key={index} />
          ))}
      </div>
    </div>
  </div>
  </div>
  );
}

export default ChooseSchedule;