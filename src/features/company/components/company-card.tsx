import s from './company-card.module.css';

import trashIcon from '../../../assets/img/trash_white.png';
import eyeIcon from '../../../assets/img/eye_white.png';
import { ICompany } from '../types';

import { getMarksWord } from '../utils/getMarksWord';
import { ColoredIconButton } from '../../../shared/components/buttons/icon-button';
import { Button } from '../../../shared/components/buttons/button';
import { usePopup } from '../../../shared/hooks/use-popup';
import { Popup } from '../../../shared/components/popup/popup';

interface ICompanyCardProps {
    data: ICompany;
}

export const CompanyCard = ({ data }: ICompanyCardProps) => {
    const { mobileAppDashboard, customerMarkParameters, company } = data;

    const { showPopup, popupContent, handleBtnClick, handleClosePopup } =
        usePopup(company.companyId);

    return (
        <div
            className={s.card}
            style={{ backgroundColor: mobileAppDashboard.cardBackgroundColor }}
        >
            <div className={s.header}>
                <h3
                    className={s.companyName}
                    style={{ color: mobileAppDashboard.highlightTextColor }}
                >
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
                {customerMarkParameters.mark}
                <span
                    className={s.pointsLabel}
                    style={{ color: mobileAppDashboard.textColor }}
                >
                    {getMarksWord(customerMarkParameters.mark)}
                </span>
            </div>

            <div className={s.info}>
                <div className={s.infoItem}>
                    <span
                        className={s.label}
                        style={{ color: mobileAppDashboard.textColor }}
                    >
                        Кешбэк
                    </span>
                    <span className={s.value}>
                        {customerMarkParameters.loyaltyLevel.cashToMark}%
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
                <ColoredIconButton
                    onClick={() => handleBtnClick('Показать')}
                    src={eyeIcon}
                    color={mobileAppDashboard.mainColor}
                    size={20}
                />
                <ColoredIconButton
                    onClick={() => handleBtnClick('Удалить')}
                    src={trashIcon}
                    color={mobileAppDashboard.accentColor}
                    size={20}
                />
                <Button
                    onClick={() => handleBtnClick('Подробнее')}
                    backgroundColor={mobileAppDashboard.backgroundColor}
                    textColor={mobileAppDashboard.mainColor}
                >
                    Подробнее
                </Button>
            </div>
            <Popup
                content={popupContent}
                isOpen={showPopup}
                isError={false}
                onClose={handleClosePopup}
                onConfirm={handleClosePopup}
            />
        </div>
    );
};
