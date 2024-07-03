import { CompanyList } from '../../components/company/company-list';
import { Loader } from '../../components/loader/loader';
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
