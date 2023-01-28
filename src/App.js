import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hotel from "./pages/Hotel/Hotel";
import List from "./pages/List/List";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<List />} />
          <Route path="/" element={<Hotel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
