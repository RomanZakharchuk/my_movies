import style from './Header.module.scss';
import {useTheme} from "../../hooks";


const Header = () => {
    const {theme, setTheme} = useTheme();

    const handleLightThemeClick = () => {
        setTheme('light');
    };

    const handleDarkThemeClick = () => {
        setTheme('dark');
    }

    return (
        <div className={style.header}>
            <a href="/">
                <div className={style.title}>
                    <h1>Movies</h1>
                    <span>online in hd quality</span>
                </div>
            </a>

            <div className={style.btn_group}>
                <button onClick={handleLightThemeClick}>Light</button>
                <span></span>
                <button onClick={handleDarkThemeClick}>Dark</button>
            </div>
        </div>
    )
}

export {Header};