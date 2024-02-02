import { Footer } from './components/Footer';
import { ConnectPage } from './pages/ConnectPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { PhoneConnectPage } from './pages/PhoneConnectPage';
import { SmsCodePage } from './pages/SmsCodePage';
import { RedirectPage } from './pages/RedirectPage';

export const Navigation = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="connect">
                    <Route index element={<ConnectPage />} />
                    <Route path="phone">
                        <Route index element={<PhoneConnectPage />} />
                        <Route path="code" element={<SmsCodePage />} />
                        <Route path="redirect" element={<RedirectPage />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
};
