import { useState } from 'react';
import { IPopupContent } from '../components/popup/popup';

export const usePopup = (companyId: string) => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState<IPopupContent>({
        text: '',
        id: '',
    });

    const handleBtnClick = (buttonName: string) => {
        setPopupContent({
            text: 'Нажата кнопка: ' + buttonName,
            id: 'Id компании: ' + companyId,
        });
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return { showPopup, popupContent, handleBtnClick, handleClosePopup };
};
