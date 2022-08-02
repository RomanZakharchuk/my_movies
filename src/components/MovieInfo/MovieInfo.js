import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Badge} from "@mui/material";

import style from './MovieInfo.module.scss';
import {movieActive} from "../../redux/slices";
import {PosterPreview} from "../../components";
import {IMAGE_PATH} from "../../constats";

const MovieInfo = () => {
    const {id} = useParams();
    const {infoAboutMovie} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActive.getAllAboutMovie(id))
    }, [dispatch, id]);

    const {
        backdrop_path,
        original_title,
        overview,
        poster_path,
        release_date,
        vote_average
    } = infoAboutMovie;

    return (
        <div className={style.movie_info}>
            <div className={style.movie_info__title}>
                <h2>{original_title}</h2>
            </div>

            <div className={style.wrap_info}>
                <Badge
                    badgeContent={vote_average}
                    color='secondary'>
                    <div className={style.wrap_info__img}>
                        <img src={IMAGE_PATH + poster_path} alt={original_title}/>
                    </div>
                </Badge>
                <div className={style.wrap_info__text}>
                    <div>
                        <h4>Name:</h4>
                        <p>{original_title}</p>
                    </div>

                    <div>
                        <h4>Data:</h4>
                        <p>{release_date}</p>
                    </div>

                </div>
            </div>

            <div className={style.movie_info__overview}>
                <p>{overview}</p>
            </div>

            <PosterPreview
                bgPath={backdrop_path}
                title={original_title}
            />
        </div>
    )
}

export {MovieInfo};