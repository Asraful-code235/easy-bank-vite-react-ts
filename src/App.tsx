import Navbar from "@/scenes/navbar";
import { useState, useEffect } from "react";
import { SelectedPage } from "./shared/types";

function App() {
  const [selectPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app bg-gray-50">
      <Navbar selectPage={selectPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
