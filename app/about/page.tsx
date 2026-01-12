import { Metadata } from "next";

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
          <h1 className="text-5xl font-black mb-4">About Han Wong International</h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg mb-12">
            Founded with a vision to unite martial artists worldwide, Han Wong International represents the pinnacle of online Taekwondo competition while championing humanitarian causes across the globe.
          </p>
        </div>
      </section>

      {/* Grand Master Profile */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/han-wong.png" 
                alt="Grand Master Han Wong" 
                className="w-full aspect-[3/4] object-cover rounded-md"
              />
            </div>
            <div>
              <div className="inline-flex gap-2 mb-4">
                <span className="bg-[var(--muted-light)] px-3 py-1 rounded-full text-xs">Grand Master</span>
                <span className="bg-[var(--muted-light)] px-3 py-1 rounded-full text-xs">9th Dan Black Belt</span>
              </div>
              <h2 className="text-4xl font-black mb-4">Grand Master Han Wong</h2>
              <p className="text-[var(--muted-foreground)] text-lg mb-8">Founder & Director, Han Wong International</p>
              <p className="mb-6 leading-[1.8]">
                With over 50 years of dedication to Taekwondo, Grand Master Han Wong has trained thousands of students across the globe. His vision of using martial arts as a vehicle for personal development and humanitarian service has inspired the creation of Han Wong International.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[var(--border)] p-4 rounded-md">
                  <div className="text-2xl font-black text-[var(--primary)]">50+</div>
                  <div className="text-[var(--muted-foreground)] text-sm">Years Teaching</div>
                </div>
                <div className="border border-[var(--border)] p-4 rounded-md">
                  <div className="text-2xl font-black text-[var(--primary)]">10,000+</div>
                  <div className="text-[var(--muted-foreground)] text-sm">Students Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charitable Mission */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-2">Our Charitable Mission</h2>
          <p className="text-center max-w-2xl mx-auto text-[var(--muted-foreground)] mb-12">
            Every registration fee collected goes directly to humanitarian causes, making every competition a force for good in the world.
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mb-12">
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">$50,000+</div>
              <div className="text-[var(--muted-foreground)] text-sm">Donated to Charity</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">1,000+</div>
              <div className="text-[var(--muted-foreground)] text-sm">Lives Impacted</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">15+</div>
              <div className="text-[var(--muted-foreground)] text-sm">Countries Reached</div>
            </div>
            <div className="border border-[var(--border)] bg-white p-6 rounded-md text-center">
              <div className="text-4xl font-black text-[var(--primary)] mb-2">100%</div>
              <div className="text-[var(--muted-foreground)] text-sm">Fees to Charity</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <img 
              src="https://images.unsplash.com/photo-1469027773879-ec0a0df4d03b?w=500&h=400&fit=crop" 
              alt="Charity event" 
              className="w-full h-[400px] object-cover rounded-md"
            />
            <div>
              <h3 className="text-2xl font-black mb-4">Making a Real Difference</h3>
              <p className="mb-4 text-[var(--muted-foreground)] leading-[1.8]">
                Since our founding, Han Wong International has directed all registration proceeds to various humanitarian initiatives, including:
              </p>
              <ul className="list-none p-0">
                {[
                  "Food distribution programs in underserved communities",
                  "Educational scholarships for young martial artists",
                  "Emergency relief for natural disaster victims",
                  "Support for martial arts programs in developing nations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 mb-3 text-[var(--muted-foreground)]">
                    <span className="text-[var(--primary)] font-bold text-xl leading-none mt-[-0.1rem]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


