import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us - Han Wong International",
  description: "About Han Wong International",
};


export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4 text-black">About Han Wong International</h1>
          <p className="max-w-2xl mx-auto text-black text-lg mb-12">
            Founded with a vision to unite martial artists worldwide, Han Wong International represents the pinnacle of online Taekwondo competition while championing humanitarian causes across the globe.
          </p>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">Meet Our Founder</h2>
            <p className="text-xl text-black max-w-3xl mx-auto italic">
              A lifetime dedicated to the art, philosophy, and humanitarian spirit of Taekwondo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative max-w-md mx-auto">
              <Image
                src="/images/han-wong.png"
                alt="Grand Master Han Wong"
                width={400}
                height={500}
                className="w-full aspect-[3/4] object-cover rounded-md"
              />
              <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded-full font-black text-sm shadow-lg">
                9th Dan
              </div>
              <div className="absolute bottom-4 right-4 bg-[var(--primary)] text-white px-4 py-2 rounded-md font-black text-xs shadow-lg">
                Kukkiwon Certified
              </div>
            </div>
            <div>
              <div className="inline-flex gap-2 mb-4">
                <span className="bg-[var(--muted-light)] px-3 py-1 rounded-full text-xs font-semibold">Grand Master</span>
                <span className="bg-[var(--muted-light)] px-3 py-1 rounded-full text-xs font-semibold">9th Dan Black Belt</span>
                <span className="bg-[var(--primary)]/10 border border-[var(--primary)] text-[var(--primary)] px-3 py-1 rounded-full text-xs font-semibold">Kukkiwon Certified</span>
              </div>
              <h3 className="text-4xl font-black mb-4 text-black">Grand Master Han Wong</h3>
              <p className="text-black text-lg mb-8">Founder & Director, Han Wong International</p>
              <p className="mb-6 leading-[1.8] text-black">
                With over 50 years of dedication to Taekwondo, Grand Master Han Wong has trained thousands of students across the globe. His vision of using martial arts as a vehicle for personal development and humanitarian service has inspired the creation of Han Wong International.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[var(--border)] bg-white p-4 rounded-md">
                  <div className="text-2xl font-black text-[var(--primary)]">50+</div>
                  <div className="text-black text-sm">Years Teaching</div>
                </div>
                <div className="border border-[var(--border)] bg-white p-4 rounded-md">
                  <div className="text-2xl font-black text-[var(--primary)]">10,000+</div>
                  <div className="text-black text-sm">Students Trained</div>
                </div>
                <div className="border border-[var(--border)] bg-white p-4 rounded-md">
                  <div className="text-2xl font-black text-[var(--primary)]">100+</div>
                  <div className="text-black text-sm">Black Belts Certified</div>
                </div>
                <div className="border border-[var(--border)] bg-white p-4 rounded-md">
                  <div className="text-2xl font-black text-[var(--primary)]">20+</div>
                  <div className="text-black text-sm">Countries Visited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 px-4 bg-[var(--card)]">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12 text-black">Our Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[var(--border)] p-8 rounded-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#db4a2b]/10 rounded-full mb-4 mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[var(--primary)]">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-3 text-black">Excellence</h3>
              <p className="text-black">
                Pursuing the highest standards in technique, character, and competition while maintaining the traditional values of Taekwondo.
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-8 rounded-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#db4a2b]/10 rounded-full mb-4 mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[var(--primary)]">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-3 text-black">Unity</h3>
              <p className="text-black">
                Bringing together practitioners from all nations, cultures, and backgrounds in the spirit of peaceful competition and mutual respect.
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-8 rounded-md text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-[#db4a2b]/10 rounded-full mb-4 mx-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-[var(--primary)]">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-3 text-black">Service</h3>
              <p className="text-black">
                Using martial arts as a force for good, channeling our collective efforts toward humanitarian causes and community upliftment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charitable Mission */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-2 text-black">Our Charitable Mission</h2>
          <p className="text-center max-w-2xl mx-auto text-black mb-12">
            Every registration fee collected goes directly to humanitarian causes, making every competition a force for good in the world.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-12">
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">$50,000+</div>
              <div className="text-black text-sm">Donated to Charity</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">1,000+</div>
              <div className="text-black text-sm">Lives Impacted</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">15+</div>
              <div className="text-black text-sm">Countries Reached</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">100%</div>
              <div className="text-black text-sm">Fees to Charity</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <Image
              src="/images/charity_donation_event.png"
              alt="Charity event"
              width={500}
              height={400}
              className="w-full h-[400px] object-cover rounded-md"
            />
            <div>
              <h3 className="text-2xl font-black mb-4 text-black">Making a Real Difference</h3>
              <p className="mb-4 text-black leading-[1.8]">
                Since our founding, Han Wong International has directed all registration proceeds to various humanitarian initiatives, including:
              </p>
              <ul className="list-none p-0">
                {[
                  "Food distribution programs in underserved communities",
                  "Educational scholarships for young martial artists",
                  "Emergency relief for natural disaster victims",
                  "Support for martial arts programs in developing nations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 mb-3 text-black">
                    <span className="text-[var(--primary)] font-bold text-xl leading-none mt-[-0.1rem]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-16 px-4 bg-[var(--card)]">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12 text-black">Our Global Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[var(--border)] p-8 rounded-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[var(--primary)]">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-black">Educational Programs</h3>
                  <p className="text-black">
                    We've established scholarship programs providing free Taekwondo training and equipment to underprivileged youth across Asia, Africa, and South America.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border)] p-8 rounded-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[var(--primary)]">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-black">Community Centers</h3>
                  <p className="text-black">
                    Our charity funds have helped build and maintain community martial arts centers in areas where youth need positive role models and structured activities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border)] p-8 rounded-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[var(--primary)]">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-black">Disaster Relief</h3>
                  <p className="text-black">
                    When natural disasters strike, HWI mobilizes our global network to provide emergency aid, supplies, and long-term recovery support to affected communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[var(--border)] p-8 rounded-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-[var(--primary)]">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2 text-black">Instructor Training</h3>
                  <p className="text-black">
                    We sponsor instructor certification programs in developing regions, creating employment opportunities and spreading the art of Taekwondo worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
