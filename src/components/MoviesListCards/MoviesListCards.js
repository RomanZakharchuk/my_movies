import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Pagination} from "@mui/material";

import {MoviesListCard} from "../../components";
import style from './MoviesListCards.module.scss';
import {movieActive} from "../../redux/slices";

const MoviesListCards = () => {
    const [page, setPage] = useState(1);
    const [pageQty] = useState(500);

    const {movies} = useSelector(state => state.movies);
    const {selectedGenreId} = useSelector(state => state.movies);
    const {numberPage} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActive.getMovieGenres(selectedGenreId, page))
        console.log('page', page)
    }, [dispatch, page, selectedGenreId]);

    const onPageChange = (num) => {
setPage(num)
        dispatch(movieActive.getNumPage(num))
        console.log({
            onPC: selectedGenreId
        })
        dispatch(movieActive.getSelectedGenre(selectedGenreId))
        dispatch(movieActive.getMovieGenres(selectedGenreId, num))

    }

    return (
        <div>
            <div className={style.list_cards}>
                {movies.map((movie, index) => <MoviesListCard
                    key={index}
                    movie={movie}
                />)}
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
    )
}

export {MoviesListCards};