import { CompanyCard } from './company-card';
import { Preloader } from '../../../shared/components/loader/preloader';
import { observer } from 'mobx-react-lite';
import s from './company-list.module.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useStores } from '../../../app/root-store-context';
import { Popup } from '../../../shared/components/popup/popup';
import ReactPullToRefresh from 'react-pull-to-refresh';

export const CompanyList = observer(() => {
    const {
        company: {
            companies,
            getCompaniesAction,
            isLoading,
            offset,
            errorMessage,
            setErrorMessage,
            setOffset,
            resetCompanies,
        },
    } = useStores();

    const { ref, inView } = useInView({
        threshold: 0.5,
        rootMargin: '0px',
        root: null,
    });

    const handleClose = () => {
        setErrorMessage(null);
    };

    const handlePageReload = async () => {
        setOffset(0);
        resetCompanies();
        getCompaniesAction();
    };
    useEffect(() => {
        getCompaniesAction();
    }, []);

    useEffect(() => {
        if (inView && !isLoading && !errorMessage) {
            getCompaniesAction();
        }
    }, [inView, isLoading, errorMessage, getCompaniesAction, offset]);

    if (!companies) {
        return <div className={s.noCompanies}>Нет компаний</div>;
    }

    if (isLoading && offset === 0) {
        return <Preloader />;
    }

    return (
        <ReactPullToRefresh onRefresh={handlePageReload} className={s.wrapper}>
            <section className={s.companyList}>
                {companies.map((company) => (
                    <CompanyCard
                        data={company}
                        key={company.company.companyId}
                    />
                ))}

                <Popup
                    content={{ text: errorMessage || '' }}
                    isOpen={!!errorMessage}
                    onClose={handleClose}
                    isError={!!errorMessage}
                    onConfirm={handlePageReload}
                />
            </section>
            {companies.length > 0 && (
                <div ref={ref} className={s.end}>
                    {isLoading && offset > 0 && <Preloader />}
                </div>
            )}
        </ReactPullToRefresh>
    );
});
