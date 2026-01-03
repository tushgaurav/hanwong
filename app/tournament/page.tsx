import TournamentClient from './TournamentClient';

export default function Tournaments() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4">Tournaments</h1>
          <p className="max-w-2xl mx-auto text-[var(--muted)] text-lg">
            Join athletes from around the world in our prestigious online championships. Compete, connect, and contribute to charity.
          </p>
        </div>
      </section>

      {/* Tournaments List */}
      <TournamentClient />
    </main>
  );
}


