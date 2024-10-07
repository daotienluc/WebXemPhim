import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import IntroducePage from "./IntroducePage";
import Movie from "./components/Movie/Movie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduce" element={<IntroducePage />} />
        <Route path="movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
