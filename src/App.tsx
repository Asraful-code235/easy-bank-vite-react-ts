import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "@/scenes/navbar";
import Home from "./scenes/home";
import About from "./scenes/about";

function App() {
  const [selectPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app bg-gray-50">
      <Navbar selectPage={selectPage} setSelectedPage={setSelectedPage} />
      <Home selectPage={selectPage} setSelectedPage={setSelectedPage} />
      <About selectPage={selectPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
