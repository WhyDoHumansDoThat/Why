import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateSchedule from "./routes/CreateSchedule";
import ParticipateSchedule from "./routes/ParticipateSchedule";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<CreateSchedule />}></Route>
        <Route path="/:id" element={<ParticipateSchedule />}></Route>
      </Routes>
    </Router>
  );
}

export default App;