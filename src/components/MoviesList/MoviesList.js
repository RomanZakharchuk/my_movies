import style from './MoviesList.module.scss';
import {MoviesListCards} from "../../components";


const MoviesList = () => {
    return (
        <div className={style.content}>
            <div>
                <div className={style.head}>
                    <h2>Movie online</h2>
                </div>

                <MoviesListCards/>
            </div>
        </div>
    )
}

export {MoviesList};