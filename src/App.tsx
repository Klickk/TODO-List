import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { GlobalStateProvider } from "./components/GlobalState.jsx";
import { ToDoPage } from "./components/Todo.js";
import { AboutPage } from "./components/About.js";

function App() {
  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden">
      {" "}
      <Navbar />
      <GlobalStateProvider>
        <main className="flex-1 min-h-0 overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ToDoPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </GlobalStateProvider>
      <Footer />
    </div>
  );
}

export default App;
