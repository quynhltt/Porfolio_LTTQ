import logo from "./logo.svg";
import "./App.scss";
// import "./routes/AppRouter.jsx";
import AppRouter, { appRouter } from "./routes/AppRouter.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appRouter.map((item, index) => {
          return <Route key={index} element={item.element} path={item.path} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
