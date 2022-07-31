import style from './MoviesListCard.module.scss';
import {StarsRating} from "../../components";
import {IMAGE_PATH} from "../../constats";

const MoviesListCard = ({movie}) => {
    const {
        poster_path,
        original_title,
        release_date,
        vote_average,
        title
    } = movie;

    return (
        <div className={style.card}>
            <div className={style.card__img}>
                <img src={IMAGE_PATH + poster_path} alt={title}/>
                <div>
                    <a href="/">{original_title}</a>
                </div>
            </div>

            <div>
                <StarsRating average={vote_average}/>
                <p>{release_date}</p>
            </div>
        </div>
    )
}

export {MoviesListCard};