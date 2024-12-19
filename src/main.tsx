import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import PlateDesigner from "./pages/PlateDesigner.tsx";
import Grid from "./components/gpttest.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/platedesigner" element={<PlateDesigner />} />
        <Route path="/gpttest" element={<Grid />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
