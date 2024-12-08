import { Routes, Route } from "react-router-dom";
import { Home } from "../page/HomePage/Home";
import { Login } from "../Login";
import { SignUp } from "../SignUp";

export const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};
