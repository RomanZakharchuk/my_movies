import {Badge} from "@mui/material";
import {Link} from "react-router-dom";

import style from './MoviesListCard.module.scss';
import {StarsRating} from "../../components";
import {IMAGE_PATH} from "../../constats";

const MoviesListCard = ({movie}) => {
    const {
        id,
        poster_path,
        original_title,
        release_date,
        vote_average,
        title
    } = movie;

    return (
        <div className={style.card}>
            <Link className={style.link} to={`/${id}`}>
                <Badge
                    badgeContent={vote_average}
                    color='secondary'>

                    <div className={style.card__img}>
                        <img src={IMAGE_PATH + poster_path} alt={title}/>
                        <div>
                            <p>{original_title}</p>
                        </div>
                    </div>
                </Badge>

                <div>
                    <StarsRating average={vote_average}/>
                    <p>{release_date}</p>
                </div>
            </Link>
        </div>
    )
}

export {MoviesListCard};