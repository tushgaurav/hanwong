import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-[1]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[2]"></div>
        <div className="relative z-[3] text-center text-white max-w-4xl px-8">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-[4px]">
            <span className="inline-block w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse-custom"></span>
            <span>2024 World Championship Open</span>
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
              href="/register"
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

      {/* Social Proof */}
      <section className="py-16 px-4 bg-[var(--card)]">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-center">
            A Truly Global Championship
          </h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--muted)] mb-12">
            Athletes from around the world unite to compete in our prestigious
            online tournaments
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mb-12">
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                20+
              </div>
              <div className="text-[var(--muted)] text-sm">
                Participating Nations
              </div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                500+
              </div>
              <div className="text-[var(--muted)] text-sm">
                Registered Athletes
              </div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                5+
              </div>
              <div className="text-[var(--muted)] text-sm">Years of Legacy</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">
                100+
              </div>
              <div className="text-[var(--muted)] text-sm">
                Affiliated Dojangs
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { code: "by", name: "Belarus" },
              { code: "in", name: "India" },
              { code: "gb", name: "United Kingdom" },
              { code: "us", name: "United States" },
              { code: "kr", name: "South Korea" },
              { code: "jp", name: "Japan" },
              { code: "de", name: "Germany" },
              { code: "fr", name: "France" },
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

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <Image
                src="https://images.unsplash.com/photo-1469027773879-ec0a0df4d03b?w=500&h=400&fit=crop"
                alt="Charity"
                width={500}
                height={400}
                className="w-full h-[400px] object-cover rounded-md"
              />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-6">
                More Than Competition
              </h3>
              <p className="mb-8 text-[var(--muted)] leading-[1.8]">
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
                  <div className="w-12 h-12 flex items-center justify-center bg-[#D4AF37]/10 rounded-md shrink-0 text-[var(--primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Humanitarian Impact</h4>
                    <p className="text-sm text-[var(--muted)] m-0">
                      Supporting communities in need across the globe through
                      martial arts
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#D4AF37]/10 rounded-md shrink-0 text-[var(--primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a10 10 0 1 0 10 10M12 2v10l7 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Unity</h4>
                    <p className="text-sm text-[var(--muted)] m-0">
                      Bringing together athletes from diverse backgrounds in
                      peaceful competition
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-[#D4AF37]/10 rounded-md shrink-0 text-[var(--primary)]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Excellence & Character
                    </h4>
                    <p className="text-sm text-[var(--muted)] m-0">
                      Developing champions both on the mat and in life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
