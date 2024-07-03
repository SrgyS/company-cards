import { Button } from '../buttons/button';
import { ICompany } from './types';
import s from './company-card.module.css';
import { Popup } from '../popup/popup';
import { useState } from 'react';

interface ICompanyCardProps {
    data: ICompany;
}

interface IPopupContent {
    text: string;
    id: string;
}
export const CompanyCard = ({ data }: ICompanyCardProps) => {
    const { mobileAppDashboard, customerMarkParameters, company } = data;
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState<IPopupContent>({
        text: '',
        id: '',
    });

    const handleBtnClick = (buttonName: string) => {
        setPopupContent({ text: buttonName, id: company.companyId });
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div
            className={s.card}
            style={{ backgroundColor: mobileAppDashboard.cardBackgroundColor }}
        >
            <div className={s.header}>
                <h3 style={{ color: mobileAppDashboard.highlightTextColor }}>
                    {mobileAppDashboard.companyName}
                </h3>
                <img
                    className={s.logo}
                    src={mobileAppDashboard.logo}
                    alt={mobileAppDashboard.companyName}
                />
            </div>

            <div
                className={s.points}
                style={{ color: mobileAppDashboard.highlightTextColor }}
            >
                {customerMarkParameters.mark}{' '}
                <span style={{ color: mobileAppDashboard.textColor }}>
                    балла
                </span>
            </div>

            <div className={s.info}>
                <div className={s.infoItem}>
                    <span className={s.label}>Кешбэк</span>
                    <span className={s.value}>
                        {customerMarkParameters.loyaltyLevel.number}%
                    </span>
                </div>
                <div className={s.infoItem}>
                    <span className={s.label}>Уровень</span>
                    <span className={s.value}>
                        {customerMarkParameters.loyaltyLevel.name}
                    </span>
                </div>
            </div>
            <div className={s.actions}>
                <Button
                    onClick={() => handleBtnClick('Подробнее')}
                    style={{ backgroundColor: mobileAppDashboard.mainColor }}
                >
                    Подробнее
                </Button>
                <Button
                    onClick={() => handleBtnClick('Показать')}
                    style={{ backgroundColor: mobileAppDashboard.accentColor }}
                >
                    Показать
                </Button>
                <Button
                    onClick={() => handleBtnClick('Удалить')}
                    style={{ backgroundColor: mobileAppDashboard.accentColor }}
                >
                    Удалить
                </Button>
            </div>
            <Popup
                content={popupContent}
                isOpen={showPopup}
                onClose={handleClosePopup}
            />
        </div>
    );
};
