// Use react router dom with elements
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TasksPage from "./pages/TasksPage"; // Extract page to generate url
import TaskFormPage from "./pages/TaskFormPage";
import Navigation from "./components/Navigation";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/task-create" element={<TaskFormPage />} />
        <Route path="/task/:id" element={<TaskFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
