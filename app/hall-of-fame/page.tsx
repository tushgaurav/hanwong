import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hall of Fame - Han Wong International",
  description: "Celebrating excellence in martial arts - Hall of Fame inductees and champions",
};

export default function HallOfFame() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-[80rem] mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-center mb-16 uppercase tracking-tight">
            THE HAN WONG <span className="text-[var(--primary)]">LEGACY</span>
          </h1>
        </div>
      </section>

      {/* 2025 Inductees */}
      <section className="py-12 px-4">
        <div className="max-w-[80rem] mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase border-l-[6px] border-[var(--primary)] pl-6">
            2025 Inductees
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
            <div className="bg-[#111111] border border-[#333333] p-10 rounded-lg text-center transition-colors hover:border-[var(--primary)]">
              <span className="block text-[var(--primary)] text-xs font-black uppercase tracking-[2px] mb-4">
                Grand Champion (Poomsae)
              </span>
              <div className="text-2xl font-black mb-2">Marcus Rodriguez</div>
              <div className="text-[#999999] text-sm">United States</div>
            </div>

            <div className="bg-[#111111] border border-[#333333] p-10 rounded-lg text-center transition-colors hover:border-[var(--primary)]">
              <span className="block text-[var(--primary)] text-xs font-black uppercase tracking-[2px] mb-4">
                Grand Champion (Sparring)
              </span>
              <div className="text-2xl font-black mb-2">Arjun Singh</div>
              <div className="text-[#999999] text-sm">India</div>
            </div>

            <div className="bg-[#111111] border border-[#333333] p-10 rounded-lg text-center transition-colors hover:border-[var(--primary)]">
              <span className="block text-[var(--primary)] text-xs font-black uppercase tracking-[2px] mb-4">
                Best Dojang
              </span>
              <div className="text-2xl font-black mb-2">Elite Martial Arts</div>
              <div className="text-[#999999] text-sm">United Kingdom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Endorsements */}
      <section className="py-12 px-4 mb-16">
        <div className="max-w-[80rem] mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase border-l-[6px] border-[var(--primary)] pl-6">
            Master Endorsements
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
            <div className="bg-[#111111] p-12 rounded-2xl relative">
              <div className="absolute top-4 left-8 text-[6rem] text-[rgba(219,74,43,0.1)] font-serif leading-none">
                "
              </div>
              <p className="text-lg italic mb-8 relative z-10">
                Han Wong International provides a unique platform that unites the martial arts community beyond borders.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="font-black text-[var(--primary)]">Grand Master Julie Tregeagle</h4>
                  <p className="text-xs text-[#999999]">7th Dan, Regional Director (USA)</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111111] p-12 rounded-2xl relative">
              <div className="absolute top-4 left-8 text-[6rem] text-[rgba(219,74,43,0.1)] font-serif leading-none">
                "
              </div>
              <p className="text-lg italic mb-8 relative z-10">
                A transparent, well-organized tournament that gives our students international exposure without the travel costs.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="font-black text-[var(--primary)]">Master Rajesh Kumar</h4>
                  <p className="text-xs text-[#999999]">5th Dan, National Coach (India)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
