import {IMAGE_PATH} from "../../constats";

const PosterPreview = ({bgPath, title}) => {
    return (
        <div>
            <img src={IMAGE_PATH + bgPath} alt={title}/>
        </div>
    )
}

export {PosterPreview};