import { useEffect, useState } from 'react';

const usePageRefresh = () => {
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = () => {
            setIsRefresh(true);
        };

        const handleLoad = () => {
            setIsRefresh(false);
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return isRefresh;
};

export default usePageRefresh;
