import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home";
import About from "./Routes/About";
import Login from "./Routes/Login";
import Profile from "./Routes/Profile";

const TodoApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};
export default TodoApp;
