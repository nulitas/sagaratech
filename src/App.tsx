import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students.tsx";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home.tsx";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="font-sans">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/"
            element={
              <div className="min-h-screen bg-gray-100 flex">
                <Sidebar />
                <main className="flex-1">
                  <Outlet />
                </main>
              </div>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="students" element={<Students />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
