import React from 'react';
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import SobreMimPage from './pages/SobreMimPage.jsx';
import ProjetosPage from './pages/ProjetosPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<SobreMimPage />} />
                <Route path="/projetos" element={<ProjetosPage />} />
                <Route path="/contato" element={<ContatoPage />} />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;