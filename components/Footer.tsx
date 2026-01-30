import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] pt-12 px-4 pb-8">
      <div className="max-w-[90rem] mx-auto grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--primary)] text-white font-bold text-xs">
              HW
            </div>
            <span className="font-bold">Han Wong International</span>
          </div>
          <p className="text-[var(--muted-foreground)] text-sm mb-4">
            Uniting martial artists worldwide through competition, character, and charity.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="list-none p-0 flex flex-col gap-2">
            <li>
              <Link href="/about" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/tournament" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                Tournaments
              </Link>
            </li>
            <li>
              <Link href="/hall-of-fame" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                Hall of Fame
              </Link>
            </li>
            <li>
              <Link href="/affiliation" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                School Affiliation
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="list-none p-0 flex flex-col gap-2">
            <li>
              <Link href="/register" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                Tournament Registration
              </Link>
            </li>
            <li>
              <Link href="/tournament" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                Past Results
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="list-none p-0 flex flex-col gap-3 text-[var(--muted-foreground)] text-sm">
            <li>📧 info@hanwonginternational.com</li>
            <li>📞 (+91) 6294-278034</li>
            <li>📍 Los Angeles, CA, USA</li>
          </ul>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto pt-8 border-t border-[var(--border)] flex justify-between items-center flex-wrap gap-4 text-[var(--muted-foreground)] text-sm">
        <p>&copy; {new Date().getFullYear()} Han Wong International. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy" className="text-[var(--muted-foreground)] no-underline hover:text-[var(--primary)]">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="text-[var(--muted-foreground)] no-underline hover:text-[var(--primary)]">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}


