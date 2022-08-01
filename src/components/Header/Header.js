import style from './Header.module.scss';

const Header = () => {

    return (
        <div className={style.header}>
            <a href="/">
                <div className={style.title}>
                    <h1>Movies</h1>
                    <span>online in hd quality</span>
                </div>
            </a>
        </div>
    )
}

export {Header};