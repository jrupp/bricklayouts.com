import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

type Page = 'home' | 'pricing' | 'about' | 'contact' | 'privacy' | 'terms' | 'signup' | 'bw26';

interface NavigationProps {
  currentPage: Page;
}

export function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: 'home' as Page, path: '/' },
    { label: 'Pricing', page: 'pricing' as Page, path: '/pricing' },
    { label: 'About', page: 'about' as Page, path: '/about' },
    { label: 'Contact', page: 'contact' as Page, path: '/contact' },
  ];

  return (
    <nav className="border-b-2 bg-secondary sticky top-0 z-50" style={{ borderBottomColor: '#d4af37' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="cursor-pointer flex items-center">
            <img
              src="https://www.bricklayouts.com/banner_fullcolor.svg"
              alt="BrickLayouts"
              className="h-8"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={item.path}
                className={`transition-colors ${
                  currentPage === item.page
                    ? 'text-white font-semibold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/*
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to="/signup">Sign In</Link>
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link to="/signup">Get Started</Link>
            </Button>
            */}
            <Button
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a className="plausible-event-name=Open+BrickLayouts" href="https://app.bricklayouts.com/">Open BrickLayouts</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.page}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left py-2 transition-colors ${
                  currentPage === item.page
                    ? 'text-white font-semibold'
                    : 'text-white/90'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              {/*
              <Button
                variant="outline"
                className="w-full bg-white/10 text-white border-white/30 hover:bg-white/20"
                asChild
              >
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </Button>
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                asChild
              >
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </Button>
              */}
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                asChild
              >
                <a
                  href="https://app.bricklayouts.com/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="plausible-event-name=Open+BrickLayouts"
                >
                  Open BrickLayouts
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
