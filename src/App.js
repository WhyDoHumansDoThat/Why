import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateSchedule from "./routes/CreateSchedule";
import ParticipateSchedule from "./routes/ParticipateSchedule";
import ChooseSchedule from "./routes/ChooseSchedule";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<CreateSchedule />}></Route>
        <Route path="/participate" element={<ParticipateSchedule />}></Route>
        <Route path="/choose" element={<ChooseSchedule />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
