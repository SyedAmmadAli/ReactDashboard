import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "./routes/router";  // Ensure the correct import path
import './App.css';

function App() {
  return (
    <>
      <RouterProvider router={publicRoutes} />
    </>
  );
}

export default App;
