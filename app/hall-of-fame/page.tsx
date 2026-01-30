import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hall of Fame - Han Wong International",
  description: "Celebrating excellence in martial arts - Hall of Fame inductees and champions",
};

const hallOfFameInductees = [
  {
    name: "Marcus Rodriguez",
    title: "2025 Grand Champion (Poomsae)",
    country: "United States",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=500&fit=crop",
    bio: "Marcus has dominated the Poomsae division for three consecutive years, setting new standards for technical precision and artistic expression. His dedication to perfecting every movement has inspired a new generation of practitioners.",
  },
  {
    name: "Arjun Singh",
    title: "2025 Grand Champion (Sparring)",
    country: "India",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    bio: "Arjun's lightning-fast reflexes and strategic brilliance have made him a force to be reckoned with in shadow sparring competitions. He has won over 15 international titles and mentors youth programs across Asia.",
  },
  {
    name: "Master Julie Tregeagle",
    title: "Regional Director (USA)",
    country: "United States",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop",
    bio: "Grand Master Tregeagle (7th Dan) has been instrumental in expanding HWI's reach across North America. Her leadership and vision have brought hundreds of dojangs into the HWI family.",
  },
  {
    name: "Master Rajesh Kumar",
    title: "National Coach (India)",
    country: "India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    bio: "Master Kumar (5th Dan) has trained numerous national champions and established some of India's most respected Taekwondo programs. His commitment to excellence is unmatched.",
  },
  {
    name: "Sofia Chen",
    title: "2024 Champion (Youth Division)",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    bio: "At just 16 years old, Sofia has already won 5 international championships. Her technical mastery and competitive spirit make her one of the brightest young stars in Taekwondo.",
  },
  {
    name: "Master James Chen",
    title: "School Owner, Dragon Spirit TKD",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    bio: "Master Chen has built one of Australia's premier Taekwondo schools, producing dozens of black belts and international competitors. His school is a model for HWI affiliates worldwide.",
  },
  {
    name: "Master Elena Rodriguez",
    title: "Champions Academy Director",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
    bio: "Master Rodriguez has elevated Spanish Taekwondo through her innovative training methods and dedication to student development. Her academy consistently produces top-tier athletes.",
  },
  {
    name: "Kim Min-Jun",
    title: "2023 Technical Excellence Award",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    bio: "Kim's flawless execution of traditional Poomsae forms has earned him recognition as one of the most technically proficient practitioners in the world. He currently serves as a senior judge for HWI.",
  },
  {
    name: "Master Sarah Williams",
    title: "Humanitarian Award Recipient",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    bio: "Master Williams has spearheaded numerous charity initiatives through her dojang, raising over $100,000 for children's causes. She embodies the HWI spirit of service through martial arts.",
  },
  {
    name: "Carlos Menendez",
    title: "2024 Rising Star",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
    bio: "Carlos burst onto the international scene with his dynamic and creative approach to competition. His innovative techniques have influenced practitioners worldwide.",
  },
  {
    name: "Master Amira Hassan",
    title: "African Regional Coordinator",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
    bio: "Master Hassan has pioneered Taekwondo development across Africa, establishing training programs in 8 countries and creating opportunities for thousands of young athletes.",
  },
  {
    name: "Master Thomas Berg",
    title: "European Technical Director",
    country: "Germany",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop",
    bio: "Master Berg's expertise in biomechanics and traditional technique has shaped HWI's European training standards. His seminars are attended by masters from across the continent.",
  },
];

export default function HallOfFame() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-center mb-6 uppercase tracking-tight">
            THE HAN WONG <span className="text-[var(--primary)]">LEGACY</span>
          </h1>
          <p className="text-center max-w-3xl mx-auto text-white/70 text-lg mb-16">
            Celebrating the masters, champions, and pioneers who have elevated the art of Taekwondo and embodied the spirit of Han Wong International.
          </p>
        </div>
      </section>

      {/* Hall of Fame Inductees Grid */}
      <section className="py-12 px-4">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="text-3xl font-black mb-12 uppercase border-l-[6px] border-[var(--primary)] pl-6">
            Hall of Fame Inductees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hallOfFameInductees.map((inductee, index) => (
              <div
                key={index}
                className="bg-[#111111] border border-[#333333] rounded-lg overflow-hidden transition-all hover:border-[var(--primary)] hover:transform hover:-translate-y-2 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={inductee.image}
                    alt={inductee.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-2xl font-black mb-1">{inductee.name}</div>
                    <div className="text-[var(--primary)] text-sm font-bold uppercase tracking-wide mb-2">
                      {inductee.title}
                    </div>
                    <div className="text-white/60 text-sm">{inductee.country}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {inductee.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Endorsements */}
      <section className="py-12 px-4 mb-16">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="text-3xl font-black mb-8 uppercase border-l-[6px] border-[var(--primary)] pl-6">
            Master Endorsements
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
            <div className="bg-[#111111] p-12 rounded-2xl relative">
              <div className="absolute top-4 left-8 text-[6rem] text-[rgba(219,74,43,0.1)] font-serif leading-none">
                "
              </div>
              <p className="text-lg italic mb-8 relative z-10">
                It was a great experience and what a noble cause. In today's
lifestyle where egocentrism and selfishness are the rule, the work
of charity is priceless. As Mother Teresa said 'Charity is above
love.' I agree by more than 100%.
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <h4 className="font-black text-[var(--primary)]">Master Teresa Semmunegus</h4>
                  <p className="text-xs text-[#999999]">Achievers awards Inductee (USA)</p>
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
                  <h4 className="font-black text-[var(--primary)]"> Grand Master Jim Harp </h4>
                  <p className="text-xs text-[#999999]">Hall of fame Inductee (USA)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
