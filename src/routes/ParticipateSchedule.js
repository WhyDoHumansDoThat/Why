import PersonName from "../component/PersonName";
import { useState } from "react";

function ParticipateSchedule() {
  const [person, setPerson] = useState({
    name: undefined,
    password: undefined,
  });

  const createPerson = (name, pw) => {
    setPerson({
      ...person,
      name: name,
      pw: pw,
    });
  };

  return (
    <div>
      <PersonName onChange={createPerson} />
    </div>
  );
}

export default ParticipateSchedule;
