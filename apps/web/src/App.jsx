import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import SobreMimPage from './pages/SobreMimPage';
import ProjetosPage from './pages/ProjetosPage';
import ContatoPage from './pages/ContatoPage';

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