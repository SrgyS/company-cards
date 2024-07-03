import { makeAutoObservable, runInAction } from 'mobx';

import { ICompany } from '../components/company/types';
import { getCompanies } from '../services/api';

export class CompanyStore {
    companies: ICompany[] = [];
    isLoading: boolean = false;
    error: string | null = null;
    offset = 0;
    limit = 10;
    hasMore = true;
    isInitialLoad: boolean = true;

    constructor() {
        makeAutoObservable(this);
    }
    setIsInitialLoad = (value: boolean) => {
        this.isInitialLoad = value;
    };

    getCompaniesAction = async () => {
        if (this.isLoading || !this.hasMore) {
            return;
        }
        this.isLoading = true;
        this.error = null;
        try {
            const response = await getCompanies(this.offset, this.limit);
            runInAction(() => {
                this.companies = [...this.companies, ...response.companies];
                this.offset += response.companies.length;
                this.hasMore = response.companies.length > 0;
                this.isLoading = false;
                this.setIsInitialLoad(false);
            });
        } catch (error) {
            runInAction(() => {
                this.error = 'Произошла ошибка при загрузке компаний';
                this.isLoading = false;
            });
        }
    };
}

export const companyStore = new CompanyStore();
