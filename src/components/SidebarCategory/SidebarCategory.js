import {useDispatch} from "react-redux";

import style from './SidebarCategory.module.scss';
import {movieActive} from "../../redux/slices";

const SidebarCategory = ({category}) => {
    const {name, id} = category;
    const dispatch = useDispatch();

    const changeGenres = (id) => {
        dispatch(movieActive.getSelectedGenre({selectedCategoryId:id, page:1}))
    }

    return (
        <div>
            <button className={style.btn} onClick={() => changeGenres(id)}>{name}</button>
        </div>
    )
}

export {SidebarCategory};