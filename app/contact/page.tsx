import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg">
            Have questions about tournaments, affiliation, or our mission? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-black mb-4">Get in Touch</h3>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0 text-[var(--primary)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@hanwonginternational.com" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">info@hanwonginternational.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0 text-[var(--primary)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+15551234567" className="text-[var(--muted-foreground)] no-underline transition-colors hover:text-[var(--primary)]">+1 (555) 123-4567</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0 text-[var(--primary)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Headquarters</h4>
                  <p className="text-[var(--muted-foreground)] m-0">Los Angeles, CA, USA</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0 text-[var(--primary)]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Hours</h4>
                  <p className="text-[var(--muted-foreground)] m-0">Mon-Fri: 9AM - 5PM PST</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://youtube.com" className="w-10 h-10 flex items-center justify-center bg-[var(--muted-light)] rounded-md no-underline transition-colors hover:bg-[var(--primary)] hover:text-white" title="YouTube">📺</a>
                  <a href="https://facebook.com" className="w-10 h-10 flex items-center justify-center bg-[var(--muted-light)] rounded-md no-underline transition-colors hover:bg-[var(--primary)] hover:text-white" title="Facebook">f</a>
                  <a href="https://instagram.com" className="w-10 h-10 flex items-center justify-center bg-[var(--muted-light)] rounded-md no-underline transition-colors hover:bg-[var(--primary)] hover:text-white" title="Instagram">📷</a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}




