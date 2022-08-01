import style from './Header.module.scss';

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.title}>
                <h1>Movies</h1>
                <span>online in hd quality</span>
            </div>
        </div>
    )
}

export {Header};