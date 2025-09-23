import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ui/ScrollToTop';

// Create a wrapper component to conditionally apply padding based on the route
const MainContent: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <main className={`flex-grow ${isHomePage ? '' : 'pt-20'}`}>
      {children}
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </MainContent>
        <Footer />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;