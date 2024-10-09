import { Link } from "react-router-dom";

const CardMovieTT = (props) => {
  let { phimTuongTu, movie } = props;
  return (
    <>
      <h2 className="my-10 font-bold">Phim tương tự</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {phimTuongTu && phimTuongTu.length > 0 ? (
          phimTuongTu.map((movie, index) => (
            <Link to={`/movie/${movie.id}`} state={{ movie }} key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
                className="w-full h-96 object-cover rounded-lg"
              />
            </Link>
          ))
        ) : (
          <p>Không có phim tương tự nào được tìm thấy.</p>
        )}
      </div>
    </>
  );
};

export default CardMovieTT;
