import { Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./components/Dashboard/Search";
import Profile from "./components/Profile/Profile";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
