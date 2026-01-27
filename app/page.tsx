import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-0">
        <div
          className="absolute inset-0 bg-cover bg-center z-[1]"
          style={{
            backgroundImage:
              "url('/images/tournament_competition_arena.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[2]"></div>
        <div className="relative z-[3] text-center text-white max-w-4xl px-8">
          <div className="inline-flex items-center gap-2 bg-[#db4a2b]/10 border border-[#db4a2b]/30 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-[4px]">
            <span className="inline-block w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse-custom"></span>
            <span>6th Scotland Open 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-[3.5rem] font-black mb-6 leading-[1.2]">
            Compete on the <span className="text-[var(--primary)]">Global Stage</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Join athletes from 20+ nations in the world's premier online
            Taekwondo championship under the direction of Grand Master Han Wong.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Link
              href="https://forms.gle/g8VTii9MNPf3rTRs5"
              target="_blank"
              className="px-8 py-4 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold text-lg transition-colors hover:bg-[var(--primary-dark)] no-underline"
            >
              Register for Tournament
            </Link>
            <Link
              href="/affiliation"
              className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-md cursor-pointer font-semibold text-lg backdrop-blur-[4px] transition-colors hover:bg-white/15 no-underline"
            >
              Join Affiliation
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-[var(--primary)]">20+</span>
              <span>Nations</span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-[var(--primary)]">500+</span>
              <span>Athletes</span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-[var(--primary)]">5+</span>
              <span>Years Legacy</span>
            </div>
          </div>
        </div>
      </section>

      {/* A Truly Global Championship */}
      <section className="py-16 px-4 bg-[var(--card)]">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
            A Truly Global Championship
          </h2>
          <p className="text-center max-w-2xl mx-auto text-black mb-12">
            Athletes from around the world unite to compete in our prestigious
            online tournaments
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mb-12">
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                20+
              </div>
              <div className="text-black text-sm">
                Participating Nations
              </div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                500+
              </div>
              <div className="text-black text-sm">
                Registered Athletes
              </div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                5+
              </div>
              <div className="text-black text-sm">Years of Legacy</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                100+
              </div>
              <div className="text-black text-sm">
                Affiliated Dojangs
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { code: "by", name: "Belarus" },
              { code: "in", name: "India" },
              { code: "gb", name: "United Kingdom" },
              { code: "us", name: "United States" },
              { code: "kr", name: "South Korea" },
              { code: "jp", name: "Japan" },
              { code: "de", name: "Germany" },
              { code: "fr", name: "France" },
              { code: "au", name: "Australia" },
              { code: "ca", name: "Canada" },
              { code: "br", name: "Brazil" },
              { code: "mx", name: "Mexico" },
              { code: "es", name: "Spain" },
              { code: "it", name: "Italy" },
              { code: "nl", name: "Netherlands" },
              { code: "se", name: "Sweden" },
              { code: "no", name: "Norway" },
              { code: "pl", name: "Poland" },
              { code: "th", name: "Thailand" },
              { code: "sg", name: "Singapore" },
              { code: "nz", name: "New Zealand" },
              { code: "ae", name: "UAE" },
            ].map((country) => (
              <div
                key={country.code}
                className="flex items-center gap-2 bg-[var(--muted-light)] px-3 py-2 rounded-md text-sm"
              >
                <Image
                  src={`https://flagcdn.com/24x18/${country.code}.png`}
                  alt={country.name}
                  width={24}
                  height={18}
                  className="w-6 h-4 object-cover rounded-[3px]"
                />
                {country.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Than Competition */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative">
              <Image
                src="/images/charity_donation_event.png"
                alt="Charity"
                width={500}
                height={400}
                className="w-full h-[400px] object-cover rounded-md"
              />
              <div className="absolute top-4 right-4 bg-[var(--primary)] text-white px-4 py-2 rounded-md font-black text-sm shadow-lg">
                100% CHARITY
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-6">
                More Than Competition
              </h3>
              <p className="mb-8 text-black leading-[1.8]">
                At Han Wong International, we believe martial arts is about
                building character and serving humanity. That's why{" "}
                <strong>
                  100% of all registration fees go directly to humanitarian
                  charity
                </strong>
                .
              </p>

              <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0 text-[var(--primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Humanitarian Impact</h4>
                    <p className="text-sm text-black m-0">
                      Supporting communities in need across the globe through
                      martial arts
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0 text-[var(--primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a10 10 0 1 0 10 10M12 2v10l7 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Unity</h4>
                    <p className="text-sm text-black m-0">
                      Bringing together athletes from diverse backgrounds in
                      peaceful competition
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md shrink-0 text-[var(--primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Excellence & Character
                    </h4>
                    <p className="text-sm text-black m-0">
                      Developing champions both on the mat and in life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-16 px-4 bg-[var(--card)]">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
            Tournaments
          </h2>
          <p className="text-center max-w-2xl mx-auto text-black mb-12">
            Compete in our upcoming online championships and showcase your skills on the global stage
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-[var(--border)] rounded-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-[var(--primary)] text-white p-4">
                <div className="text-sm font-bold uppercase">Upcoming Event</div>
                <div className="text-2xl font-black">2024 World Championship</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-black mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="font-semibold">Registration Open Now</span>
                </div>
                <ul className="list-none p-0 mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-black">
                    <span className="text-[var(--primary)] font-bold">•</span>
                    Poomsae & Shadow Sparring Categories
                  </li>
                  <li className="flex items-start gap-2 text-black">
                    <span className="text-[var(--primary)] font-bold">•</span>
                    All Belt Ranks & Age Groups Welcome
                  </li>
                  <li className="flex items-start gap-2 text-black">
                    <span className="text-[var(--primary)] font-bold">•</span>
                    International Panel of Certified Judges
                  </li>
                </ul>
                <Link
                  href="/register"
                  className="inline-block px-6 py-3 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)] no-underline"
                >
                  Register Now
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[var(--border)] rounded-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gray-800 text-white p-4">
                <div className="text-sm font-bold uppercase">Special Event</div>
                <div className="text-2xl font-black">Youth Championship</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-black mb-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="font-semibold">Coming Soon</span>
                </div>
                <ul className="list-none p-0 mb-6 space-y-2">
                  <li className="flex items-start gap-2 text-black">
                    <span className="text-[var(--primary)] font-bold">•</span>
                    Ages 5-17 Years Old
                  </li>
                  <li className="flex items-start gap-2 text-black">
                    <span className="text-[var(--primary)] font-bold">•</span>
                    Beginner to Advanced Divisions
                  </li>
                  <li className="flex items-start gap-2 text-black">
                    <span className="text-[var(--primary)] font-bold">•</span>
                    Encouraging Environment for Young Athletes
                  </li>
                </ul>
                <Link
                  href="/tournament"
                  className="inline-block px-6 py-3 bg-gray-800 text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-gray-700 no-underline"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Compete? */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 uppercase">
            Ready to Compete?
          </h2>
          <p className="text-center max-w-2xl mx-auto text-white/70 mb-16 text-lg">
            Join the world's premier online Taekwondo championship in 3 simple steps.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
            <div className="text-center p-8 bg-white/5 border-b-4 border-[var(--primary)] rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-5xl mb-6">👤</div>
              <h3 className="text-xl font-black mb-4 uppercase">Register & Categories</h3>
              <p className="text-sm text-white/70 mb-6">
                Create your profile and select your belt/age category. Our system automatically places you in the correct division.
              </p>
              <Link
                href="/register"
                className="text-[var(--primary)] no-underline font-bold text-sm uppercase hover:underline"
              >
                GET STARTED →
              </Link>
            </div>

            <div className="text-center p-8 bg-white/5 border-b-4 border-[var(--primary)] rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-5xl mb-6">📹</div>
              <h3 className="text-xl font-black mb-4 uppercase">Record Your Performance</h3>
              <p className="text-sm text-white/70 mb-6">
                Film your Poomsae or Shadow Sparring routine in landscape mode. No professional studio needed.
              </p>
            </div>

            <div className="text-center p-8 bg-white/5 border-b-4 border-[var(--primary)] rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-xl font-black mb-4 uppercase">Upload & Compete</h3>
              <p className="text-sm text-white/70 mb-6">
                Submit your YouTube (Unlisted) link via your dashboard. Our international panel judges score you against World Taekwondo standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* School Affiliation Program Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
            School Affiliation Program
          </h2>
          <p className="text-center max-w-3xl mx-auto text-black mb-12 text-lg">
            Elevate your Dojang by joining the Han Wong International network. Gain access to
            exclusive benefits and be part of a global martial arts community.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Official Certification */}
            <div className="bg-white border border-[var(--border)] p-8 rounded-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-[var(--primary)]">
                  <circle cx="12" cy="8" r="4" strokeWidth="2" />
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeWidth="2" />
                  <path d="M12 12v9" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Official Certification</h3>
              <p className="text-black">
                Receive official Han Wong International certification for your Dojang
              </p>
            </div>

            {/* Black Belt Recognition */}
            <div className="bg-white border border-[var(--border)] p-8 rounded-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-[var(--primary)]">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Black Belt Recognition</h3>
              <p className="text-black">
                Your students' black belt ranks recognized by our global network
              </p>
            </div>

            {/* Global Network Access */}
            <div className="bg-white border border-[var(--border)] p-8 rounded-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-[var(--primary)]">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Global Network Access</h3>
              <p className="text-black">
                Connect with Masters and Dojangs from over 20 countries
              </p>
            </div>

            {/* Tournament Priority */}
            <div className="bg-white border border-[var(--border)] p-8 rounded-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-[var(--primary)]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" />
                  <circle cx="9" cy="7" r="4" strokeWidth="2" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Tournament Priority</h3>
              <p className="text-black">
                Priority registration and reduced fees for all HWI tournaments
              </p>
            </div>

            {/* Training Resources */}
            <div className="bg-white border border-[var(--border)] p-8 rounded-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-[var(--primary)]">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeWidth="2" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Training Resources</h3>
              <p className="text-black">
                Access exclusive training materials and curriculum guides
              </p>
            </div>

            {/* Marketing Support */}
            <div className="bg-white border border-[var(--border)] p-8 rounded-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7 text-[var(--primary)]">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing Support</h3>
              <p className="text-black">
                Use the HWI brand to elevate your school's prestige
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-[var(--muted-light)] border border-[var(--border)] rounded-md p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Ready to Join the HWI Family?
            </h3>
            <p className="text-black max-w-2xl mx-auto mb-8 text-lg">
              Contact us to learn more about affiliation requirements and begin the
              application process.
            </p>
            <Link
              href="/affiliation"
              className="inline-block px-8 py-4 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold text-lg transition-colors hover:bg-[var(--primary-dark)] no-underline"
            >
              Apply for Affiliation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
