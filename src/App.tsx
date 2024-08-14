import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students.tsx";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="font-sans">
      <Router>
        <div className="min-h-screen bg-gray-100 flex">
          <Sidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
