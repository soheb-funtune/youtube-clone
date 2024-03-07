import { useState } from "react";
import "./App.css";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import MainPage from "./pages/MainPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { CounterProvider } from "./state/context/context";
import VideoPage from "./Components/VideoPage/VideoPage";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
      ],
    },
    {
      path: "video/:id",
      element: <VideoPage />,
    },
  ]);

  return (
    <CounterProvider>
      <RouterProvider router={router} />
    </CounterProvider>
  );
}

export default App;
