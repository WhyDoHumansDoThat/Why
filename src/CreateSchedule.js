import ScheduleName from "./component/ScheduleName";
import ScheduleOpen from "./component/ScheduleOpen";
import ScheduleType from "./component/ScheduleType";

function CreateSchedule() {
  return (
    <div>
      <ScheduleName />
      <ScheduleOpen />
      <ScheduleType />
    </div>
  );
}

export default CreateSchedule;
