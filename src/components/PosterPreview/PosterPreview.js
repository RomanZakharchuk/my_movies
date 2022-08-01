import style from './PosterPreview.module.scss';

import {IMAGE_PATH} from "../../constats";

const PosterPreview = ({bgPath, title}) => {
    return (
        <div className={style.poster}>
            <img src={IMAGE_PATH + bgPath} alt={title}/>
        </div>
    )
}

export {PosterPreview};