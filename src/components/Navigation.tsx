import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-neutral-100/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-display text-xl font-bold text-neutral-900">
            CS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-neutral-900 hover:text-primary transition-colors">Services</Link>
            <Link to="/portfolio" className="text-neutral-900 hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/about" className="text-neutral-900 hover:text-primary transition-colors">About</Link>
            <Link to="/blog" className="text-neutral-900 hover:text-primary transition-colors">Blog</Link>
            <Link to="/resources" className="text-neutral-900 hover:text-primary transition-colors">Resources</Link>
            <Link 
              to="/contact" 
              className="bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-900/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-6 py-4 space-y-4">
            <Link to="/services" className="block text-neutral-900 hover:text-primary transition-colors">Services</Link>
            <Link to="/portfolio" className="block text-neutral-900 hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/about" className="block text-neutral-900 hover:text-primary transition-colors">About</Link>
            <Link to="/blog" className="block text-neutral-900 hover:text-primary transition-colors">Blog</Link>
            <Link to="/resources" className="block text-neutral-900 hover:text-primary transition-colors">Resources</Link>
            <Link 
              to="/contact" 
              className="inline-block bg-neutral-900 text-white px-4 py-2 rounded-lg hover:bg-neutral-900/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;