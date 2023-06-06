import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatRoom from "./pages/ChatRoom";
import JoinOrCreateRoom from "./pages/JoinOrCreateRoom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JoinOrCreateRoom />} />
        <Route path="/chat" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
