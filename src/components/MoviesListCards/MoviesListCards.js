import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {MoviesListCard} from "../../components";
import style from './MoviesListCards.module.scss';
import {movieActive} from "../../redux/slices";

const MoviesListCards = () => {
    const [page, setPage] = useState(1);
    const {movies} = useSelector(state => state.movies);
    const {selectedGenreId} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActive.getMovieGenres(selectedGenreId, page))
    }, [page, selectedGenreId]);

    return (
        <div className={style.list_cards}>
            {movies.map((movie, index) => <MoviesListCard
                key={index}
                movie={movie}
            />)}
        </div>
    )
}

export {MoviesListCards};