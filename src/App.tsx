import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "@/scenes/navbar";
import Home from "./scenes/home";
import About from "./scenes/about";
import Blog from "./scenes/blog";
import Footer from "./scenes/footer";

function App() {
  const [selectPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app bg-gray-50">
      <Navbar selectPage={selectPage} setSelectedPage={setSelectedPage} />
      <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Blog setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
