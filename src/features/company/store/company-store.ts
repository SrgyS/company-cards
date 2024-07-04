import { makeAutoObservable, runInAction } from 'mobx';

import { ICompany } from '../types';
import { getCompanies } from '../../../services/api';

export class CompanyStore {
    companies: ICompany[] = [];
    isLoading: boolean = false;
    errorMessage: string | null = null;
    offset = 0;
    limit = 10;
    hasMore = true;

    constructor() {
        makeAutoObservable(this);
    }

    setErrorMessage = (message: string | null) => {
        this.errorMessage = message;
    };
    setOffset = (value: number) => {
        this.offset = value;
    };
    setHasMore = (value: boolean) => {
        this.hasMore = value;
    };
    resetCompanies = () => {
        this.companies = [];
    };

    getCompaniesAction = async () => {
        if (this.isLoading || !this.hasMore) {
            return;
        }
        this.isLoading = true;
        this.errorMessage = null;
        try {
            const response = await getCompanies(this.offset, this.limit);
            runInAction(() => {
                this.companies = [...this.companies, ...response.companies];
                this.offset += response.companies.length;
                this.hasMore = response.companies.length > 0;
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                if (error instanceof Error) {
                    this.errorMessage = error.message;
                } else {
                    this.errorMessage = 'Произошла неизвестная ошибка';
                }
                this.isLoading = false;
            });
        }
    };
}

export const companyStore = new CompanyStore();
