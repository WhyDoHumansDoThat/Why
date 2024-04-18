import ScheduleName from "../component/ScheduleName";
import ScheduleOpen from "../component/ScheduleOpen";
import ScheduleType from "../component/ScheduleType";
import { useState } from "react";

function CreateSchedule() {
  const [progress, setProgress] = useState(0);

  const changeProgress = () => {
    setProgress((prev) => prev + 1);
  };

  return (
    <div>
      {progress === 0 ? (
        <ScheduleName nextStep={changeProgress} />
      ) : progress === 1 ? (
        <ScheduleOpen nextStep={changeProgress} />
      ) : (
        <ScheduleType />
      )}
    </div>
  );
}

export default CreateSchedule;