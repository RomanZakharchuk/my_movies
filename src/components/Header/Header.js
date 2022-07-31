import {useForm} from "react-hook-form";

import style from './Header.module.scss';

const Header = () => {
    const {register, handleSubmit} = useForm({
        defaultValues: {
            search: ''
        }
    });

    const submit = () => {
        console.log('search')
    };

    return (
        <div className={style.header}>
            <div className={style.title}>
                <h1>Movies</h1>
                <span>online in hd quality</span>
            </div>

            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" {...register('search')}/>
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export {Header};