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

// import { useEffect, useState } from 'react';

// const usePageRefresh = () => {
//     const [isRefreshing, setIsRefreshing] = useState(false);

//     useEffect(() => {
//         const handlePageShow = (event: PageTransitionEvent) => {
//             if (event.persisted) {
//                 // Page is loaded from bfcache
//                 setIsRefreshing(true);
//             }
//         };

//         const checkRefresh = () => {
//             const lastRefreshTime = sessionStorage.getItem('lastRefreshTime');
//             const currentTime = Date.now();

//             if (lastRefreshTime && currentTime - parseInt(lastRefreshTime, 10) < 1000) {
//                 setIsRefreshing(true);
//             }

//             sessionStorage.setItem('lastRefreshTime', currentTime.toString());
//         };

//         window.addEventListener('pageshow', handlePageShow);
//         checkRefresh();

//         return () => {
//             window.removeEventListener('pageshow', handlePageShow);
//         };
//     }, []);

//     useEffect(() => {
//         if (isRefreshing) {
//             const timer = setTimeout(() => setIsRefreshing(false), 100);
//             return () => clearTimeout(timer);
//         }
//     }, [isRefreshing]);

//     return isRefreshing;
// };

// export default usePageRefresh;
