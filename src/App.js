import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }, index) => {
          return <Route key={index} path={path} element={component} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
