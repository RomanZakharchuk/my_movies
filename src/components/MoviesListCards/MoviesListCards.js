import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";

import { MoviesListCard } from "../../components";
import style from "./MoviesListCards.module.scss";
import { movieActive } from "../../redux/slices";

const MoviesListCards = () => {
  const [page, setPage] = useState(1);
  const [pageQty] = useState(500);

  const { movies } = useSelector((state) => state.movies);
  const { selectedGenre } = useSelector((state) => state.movies);
  const { numberPage } = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActive.getMovieGenres(selectedGenre, page));
  }, [dispatch, page, selectedGenre]);

  const onPageChange = (num) => {
    setPage(num);
    dispatch(movieActive.getNumPage(num));

    const selectedCategory = Object.assign({}, selectedGenre);
    selectedCategory.numberPage = num;

    dispatch(movieActive.getSelectedGenre(selectedCategory));
  };

  return (
    <div className={style.movie_list_cards}>
      <div className={style.list_cards}>
        {movies.map((movie, index) => (
          <MoviesListCard key={index} movie={movie} />
        ))}
      </div>

      <div className={style.pagination}>
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => onPageChange(num)}
          color="secondary"
        />
      </div>
    </div>
  );
};

export { MoviesListCards };
