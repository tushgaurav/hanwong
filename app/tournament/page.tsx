import type {Metadata} from 'next';
import TournamentClient from './TournamentClient';
import { getTournaments } from '@/actions/tournamentAction';
import { Tournament } from '@/types/tournamentType';

export const metadata: Metadata = {
  title: 'Tournaments - Han Wong International',
  description: 'Tournaments - Han Wong International',
};

export default async function Tournaments() {
  const tournaments = await getTournaments();

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4">Tournaments</h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg">
            Join athletes from around the world in our prestigious online championships. Compete, connect, and contribute to charity.
          </p>
        </div>
      </section>

      <TournamentClient tournaments={tournaments} />
    </main>
  );
}


