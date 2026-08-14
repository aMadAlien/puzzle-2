import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import './assets/styles/elements.css'
import QuestPage from "./pages/Quest";
import HomePage from "./pages/Home";
import TemplatesCreatePage from "./pages/TemplatesCreatePage";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Квест по slug */}
        <Route path="/quest/:slug" element={<QuestPage />} />

        {/* створення шаблонів */}
        <Route path="/template/create" element={<TemplatesCreatePage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Всі інші маршрути */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}