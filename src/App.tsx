import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/shared-components/navbar/navbar";
import Sidebar from "./components/shared-components/sidebar/sidebar";
import Home from "./pages/home/home";
import Archived from "./pages/archived/archived";
import Important from "./pages/important/important";
import Bin from "./pages/bin/bin";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archived" element={<Archived />} />
          <Route path="/important" element={<Important />} />
          <Route path="/bin" element={<Bin />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
