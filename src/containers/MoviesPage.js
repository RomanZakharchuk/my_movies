import style from './MoviePage.module.scss';
import {MoviesList, Sidebar} from "../components";


const MoviesPage = () => {
    return (
        <div className={style.content}>
            <Sidebar/>
            <MoviesList/>
        </div>
    )
}

export {MoviesPage};