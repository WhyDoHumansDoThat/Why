import ScheduleName from "../component/ScheduleName";
import ScheduleOpen from "../component/ScheduleOpen";
import ScheduleType from "../component/ScheduleType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateSchedule() {
  const [progress, setProgress] = useState(0);
  const [schedule, setSchedule] = useState({
    name: undefined,
    open: undefined,
    type: undefined,
    date: undefined,
  });

  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const updateName = (name) => {
    setSchedule({ ...schedule, name: name });
  };

  const updateOpen = (open) => {
    setSchedule({ ...schedule, open: open });
  };

  const updateType = (type) => {
    setSchedule({ ...schedule, type: type });
  };

  const updateDate = (date) => {
    setSchedule({ ...schedule, date: date });
  };

  const nextProgress = () => {
    setProgress((prev) => prev + 1);
  };

  const prevStep = () => {
    setProgress((prev) => prev - 1);
  };

  const doneCreate = () => {
    setDone(true);
    navigate("/participate");
  };

  return done ? (
    <div>
      <div>이름 : {schedule.name}</div>
      <div>공개여부 : {schedule.open ? "공개" : "비공개"}</div>
      <div>선택된 날짜 또는 요일 : {schedule.type}</div>
    </div>
  ) : (
    <div>
      {progress === 0 ? (
        <ScheduleName nextStep={nextProgress} updateName={updateName} />
      ) : progress === 1 ? (
        <ScheduleOpen
          nextStep={nextProgress}
          updateOpen={updateOpen}
          prevStep={prevStep}
        />
      ) : (
        <ScheduleType
          updateType={updateType}
          updateDate={updateDate}
          nextStep={doneCreate}
          prevStep={prevStep}
        />
      )}
    </div>
  );
}

export default CreateSchedule;
