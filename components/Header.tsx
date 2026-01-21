'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Tournaments', path: '/tournament' },
    { name: 'Hall of Fame', path: '/hall-of-fame' },
    { name: 'Affiliation', path: '/affiliation' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-[var(--foreground)] font-bold no-underline">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary)] text-white font-bold text-sm">
              HW
            </div>
            <span className="text-base sm:text-lg">Han Wong International</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`no-underline text-[var(--foreground)] px-4 py-2 rounded-md text-sm transition-colors hover:bg-[var(--muted-light)] ${
                  isActive(link.path) ? 'bg-[#E8DCC8] text-[var(--primary-dark)]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/register"
              className="hidden sm:inline-block px-4 sm:px-6 py-2 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-sans font-semibold no-underline text-sm transition-colors hover:bg-[var(--primary-dark)]"
            >
              Register Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[var(--foreground)] transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`no-underline text-[var(--foreground)] px-4 py-3 rounded-md text-sm transition-colors hover:bg-[var(--muted-light)] ${
                  isActive(link.path) ? 'bg-[#E8DCC8] text-[var(--primary-dark)]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="sm:hidden mt-2 px-4 py-3 bg-[var(--primary)] text-white text-center border-none rounded-md cursor-pointer font-sans font-semibold no-underline text-sm transition-colors hover:bg-[var(--primary-dark)]"
            >
              Register Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

