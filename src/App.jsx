import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import IntroducePage from "./IntroducePage";
import Movie from "./components/Movie/Movie";
import CardMovie from "./components/Movie/CardMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="introduce" element={<IntroducePage />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="movie/card-movie/:id" element={<CardMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
