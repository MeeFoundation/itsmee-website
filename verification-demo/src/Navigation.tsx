import { Footer } from './components/Footer';
import { ConnectPage } from './pages/ConnectPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PhoneConnectPage } from './pages/PhoneConnectPage';

export const Navigation = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="connect">
                    <Route index element={<ConnectPage />} />
                    <Route path="phone" element={<PhoneConnectPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
};
