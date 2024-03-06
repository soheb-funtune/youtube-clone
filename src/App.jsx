import { useState } from "react";
import "./App.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import MainPage from "./pages/MainPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar></Sidebar>
    </>
  );
}

export default App;
