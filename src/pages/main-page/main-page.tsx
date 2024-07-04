import { CompanyList } from '../../features/company/components/company-list';
import { Loader } from '../../shared/components/loader/loader';
import { Header } from './components/header';
import s from './main-page.module.css';

export const MainPage = () => {
    return (
        <div className={s.container}>
            <Loader />
            <Header />
            <CompanyList />
        </div>
    );
};
