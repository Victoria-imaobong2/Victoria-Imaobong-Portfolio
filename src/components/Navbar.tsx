'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Leadership', href: '#leadership' },
  { name: 'Resume', href: '#resume' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <nav className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md border border-rose-200/80 rounded-full px-6 py-3 shadow-sm flex items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="font-serif font-bold text-base tracking-tight text-stone-900 hover:text-rose-900 transition">
          Victoria<span className="text-rose-800">.solomon</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium text-stone-700 hover:text-stone-950 uppercase tracking-wider transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:solomonvictoria2023@gmail.com"
            className="px-4 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium uppercase tracking-wider transition shadow-xs"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-stone-700 hover:text-stone-900 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden max-w-6xl mx-auto mt-2 bg-white/95 backdrop-blur-lg border border-rose-200/80 rounded-2xl p-6 shadow-lg flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-stone-800 hover:text-rose-900 transition py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:solomonvictoria2023@gmail.com"
            onClick={() => setIsOpen(false)}
            className="text-center py-2.5 rounded-full bg-stone-900 text-white text-xs font-medium uppercase tracking-wider shadow-xs"
          >
            Contact Me
          </a>
        </div>
      )}
    </header>
  );
}