import MovieList from "../MovieList/MovieList";

const HorrorMovie = () => {
  const urlApi =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1";
  return (
    <>
      <MovieList urlApi={urlApi} title="Phim kinh dị" />
    </>
  );
};

export default HorrorMovie;
