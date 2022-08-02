import style from './Header.module.scss';
import {useTheme} from "../../hooks";
import {UserInfo} from "../UserInfo/UserInfo";


const Header = () => {
    const {setTheme} = useTheme();

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

            <div className={style.wrap}>
                <div className={style.btn_group}>
                    <button onClick={handleLightThemeClick}>Light</button>
                    <span></span>
                    <button onClick={handleDarkThemeClick}>Dark</button>
                </div>
                <UserInfo/>
            </div>
        </div>
    )
}

export {Header};