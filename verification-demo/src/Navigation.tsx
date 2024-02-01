import { Footer } from './components/Footer';
import { ConnectPage } from './pages/ConnectPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HashRouter, Route, Routes } from 'react-router-dom';

export const Navigation = () => {
    const routes = [
        {
            path: '/connect',
            element: <ConnectPage />,
        },
        {
            path: '*',
            element: <NotFoundPage />,
        },
    ];
    return (
        <HashRouter>
            <Routes>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
            <Footer />
        </HashRouter>
    );
};
