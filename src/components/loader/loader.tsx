import usePageRefresh from '../../hooks/use-page-refresh';
import s from './loader.module.css';

export const Loader = () => {
    const isRefresh = usePageRefresh();

    return (
        isRefresh && (
            <div className={s.container}>
                <div className={s.loader}>
                    <div className={s.spinner}></div>
                </div>
            </div>
        )
    );
};
