import './global-styles.css';

import ReactDOM from 'react-dom/client';
import { RootStore } from './root-store';
import { RootStoreContext } from './root-store-context';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RootStoreContext.Provider value={new RootStore()}>
        <RouterProvider router={router} />
    </RootStoreContext.Provider>
);
