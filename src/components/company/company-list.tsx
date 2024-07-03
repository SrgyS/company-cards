import { CompanyCard } from './company-card';
import { Preloader } from '../loader/preloader';
import { observer } from 'mobx-react-lite';
import s from './company-list.module.css';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useStores } from '../../stores/root-store-context';

export const CompanyList = observer(() => {
    const {
        company: { companies, getCompaniesAction, isLoading, offset },
    } = useStores();

    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (!isLoading && inView) {
            getCompaniesAction();
        }
    }, [isLoading, inView, getCompaniesAction]);

    if (!companies) {
        return <div>No companies</div>;
    }

    if (isLoading && offset === 0) {
        return <Preloader />;
    }

    return (
        <section className={s.companyList}>
            {companies.map((company) => (
                <CompanyCard data={company} key={company.company.companyId} />
            ))}
            <div ref={ref} className={s.end}>
                {isLoading && offset > 0 && <Preloader />}
            </div>
        </section>
    );
});
