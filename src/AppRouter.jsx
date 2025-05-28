// src/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LIAInfo from "./pages/LIAInfo";
import WorkHistory from "./pages/WorkHistory";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lia-info" element={<LIAInfo />} />
        <Route path="/work-history" element={<WorkHistory />} />
      </Routes>
    </BrowserRouter>
  );
}
