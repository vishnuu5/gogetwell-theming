import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { specialty } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${specialty}`}>
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
