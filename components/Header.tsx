'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--border)] px-8 py-4">
      <div className="max-w-[90rem] mx-auto flex justify-between items-center gap-8">
        <Link href="/" className="flex items-center gap-2 text-[var(--foreground)] font-bold no-underline">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--primary)] text-white font-bold text-sm">
            HW
          </div>
          <span className="text-lg">Han Wong International</span>
        </Link>
        <nav className="hidden lg:flex gap-4">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Tournaments', path: '/tournament' },
            { name: 'Affiliation', path: '/affiliation' },
            { name: 'Gallery', path: '/gallery' },
            { name: 'Contact', path: '/contact' },
          ].map((link) => (
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
        <Link
          href="/register"
          className="px-6 py-2 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-sans font-semibold no-underline inline-block transition-colors hover:bg-[var(--primary-dark)]"
        >
          Register Now
        </Link>
      </div>
    </header>
  );
}

