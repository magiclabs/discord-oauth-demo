import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserContext } from "./lib/UserContext";
import Callback from "./pages/Callback";

function App() {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/callback" element={<Callback />} /> */}
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
