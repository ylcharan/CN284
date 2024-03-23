import Header from "./components/Header";
import Blog from "./pages/Blog";
import Hero from "./pages/Hero";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <main>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route element={<Hero />} path="/"></Route>
          <Route element={<Blog />} path="/blog"></Route>
          <Route element={<Register />} path="/register"></Route>
          {/* <Route path="/about"></Route> */}
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
