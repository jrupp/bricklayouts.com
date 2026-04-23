import {
  BrowserRouter as Router, Routes, Route, useLocation,
} from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './components/Home';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { SignUp } from './components/SignUp';
import { BrickworldChicago2026 } from './components/BrickworldChicago2026';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  // Convert pathname to page type for Navigation component
  const getCurrentPage = () => {
    switch (location.pathname) {
      case '/':
        return 'home';
      case '/pricing':
        return 'pricing';
      case '/about':
        return 'about';
      case '/contact':
        return 'contact';
      case '/privacy':
        return 'privacy';
      case '/terms':
        return 'terms';
      case '/signup':
        return 'signup';
      case '/bw26':
        return 'bw26';
      default:
        return 'home';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navigation currentPage={getCurrentPage()} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/bw26" element={<BrickworldChicago2026 />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
