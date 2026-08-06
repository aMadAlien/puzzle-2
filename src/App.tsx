import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import QuestPage from "./pages/Quest";
import HomePage from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Квест по slug */}
        <Route path="/quest/:slug" element={<QuestPage />} />

        {/* Якщо плануєш різні типи сторінок */}
        {/* <Route path="/love-test/:slug" element={<LoveTestPage />} /> */}

        {/* 404 */}
        {/* <Route path="/404" element={<NotFoundPage />} /> */}

        {/* Всі інші маршрути */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}