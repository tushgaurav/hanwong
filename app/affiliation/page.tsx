import { Metadata } from "next";
import AffiliationForm from "./AffiliationForm";

export const metadata: Metadata = {
  title: "About Us - Han Wong International",
  description: "About Han Wong International",
};

export default function Affiliation() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4 text-center">
          <span className="inline-block bg-[var(--muted-light)] px-4 py-2 rounded-full text-sm mb-4">
            For Dojang Owners & Masters
          </span>
          <h1 className="text-4xl font-black mb-4">School Affiliation Program</h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg">
            Elevate your Dojang by joining the Han Wong International network. Gain global recognition and exclusive benefits.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-2">Benefits of Affiliation</h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg mb-12">
            Gain access to exclusive resources, global network, and prestige
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4 text-[var(--primary)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51v.5a2 2 0 01-4 0v-.5a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H4a2 2 0 010-4h.5a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V4a2 2 0 014 0v.5a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.5"></path>
                </svg>
              </div>
              <h3 className="font-black mb-2">Official Certification</h3>
              <p className="text-[var(--muted-foreground)] text-sm">Receive official Han Wong International certification for your Dojang</p>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4 text-[var(--primary)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-black mb-2">Black Belt Recognition</h3>
              <p className="text-[var(--muted-foreground)] text-sm">Your students' black belt ranks recognized by our global network</p>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4 text-[var(--primary)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="font-black mb-2">Global Network Access</h3>
              <p className="text-[var(--muted-foreground)] text-sm">Connect with Masters and Dojangs from over 20 countries</p>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4 text-[var(--primary)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M3 12h18M3 6h18M3 18h18"></path>
                </svg>
              </div>
              <h3 className="font-black mb-2">Tournament Priority</h3>
              <p className="text-[var(--muted-foreground)] text-sm">Priority registration and reduced fees for all HWI tournaments</p>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4 text-[var(--primary)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"></path>
                </svg>
              </div>
              <h3 className="font-black mb-2">Training Resources</h3>
              <p className="text-[var(--muted-foreground)] text-sm">Access exclusive training materials and curriculum guides</p>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="w-12 h-12 flex items-center justify-center bg-[#db4a2b]/10 rounded-md mb-4 text-[var(--primary)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="font-black mb-2">Marketing Support</h3>
              <p className="text-[var(--muted-foreground)] text-sm">Use the HWI brand to elevate your school's prestige</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements & Application */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black mb-4">Requirements</h2>
              <p className="text-[var(--muted-foreground)] mb-6">
                We welcome qualified martial arts schools that share our commitment to excellence and humanitarian values.
              </p>
              <ul className="list-none p-0 flex flex-col gap-4">
                {[
                  "Minimum 3rd Dan black belt certification",
                  "Active martial arts school with regular classes",
                  "Commitment to HWI values and charitable mission",
                  "Clean record and good standing in martial arts community",
                  "Willingness to participate in annual HWI events"
                ].map((req, i) => (
                  <li key={i} className="flex items-start gap-3 pl-6 text-[var(--muted-foreground)] relative">
                    <span className="absolute left-0 text-[var(--primary)] font-bold text-xl">✓</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <AffiliationForm />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">What Our Members Say</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <p className="text-lg italic mb-4 text-[var(--muted-foreground)]">"Joining HWI transformed our school. The global recognition and network access have been invaluable for our students' growth."</p>
              <div className="font-black mb-1">Master James Chen</div>
              <div className="text-[var(--muted-foreground)] text-sm">Dragon Spirit TKD • Sydney, Australia</div>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <p className="text-lg italic mb-4 text-[var(--muted-foreground)]">"The certification and training resources from HWI have elevated our curriculum to international standards."</p>
              <div className="font-black mb-1">Master Elena Rodriguez</div>
              <div className="text-[var(--muted-foreground)] text-sm">Champions Academy • Madrid, Spain</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


