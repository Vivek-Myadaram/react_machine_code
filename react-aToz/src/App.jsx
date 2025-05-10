import { BrowserRouter, Routes, Route } from "react-router";
import ReactMyDoc from "./components/reactdocs";
import Home from "./components/home";
import Weather from "./components/weather";
import UseMemoExample from "./components/useMemo";
import UseCallBackExample from "./components/useCallBack";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<h1>about</h1>} />
        <Route path="weather" element={<Weather />} />
        <Route path="useMemo" element={<UseMemoExample />} />
        <Route path="useCallback" element={<UseCallBackExample />} />

        {/* Nested Route */}
        <Route path="react" element={<ReactMyDoc />}>
          <Route path="hooks" element={<h1>hooks2</h1>} />
        </Route>

        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>No Page Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
