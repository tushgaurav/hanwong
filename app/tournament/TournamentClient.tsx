'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Tournament } from '@/types/tournamentType';

type TabKey = 'upcoming' | 'results';

export default function TournamentClient({ tournaments }: { tournaments: Tournament[] }) {
  const [activeTab, setActiveTab] = useState<TabKey>('upcoming');

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
  };

  const { upcomingTournaments, pastTournaments } = useMemo(() => {
    const now = new Date();
    const upcoming = tournaments.filter(t => new Date(t.start_date) >= now);
    const past = tournaments.filter(t => new Date(t.start_date) < now);
    return {
      upcomingTournaments: upcoming,
      pastTournaments: past
    };
  }, [tournaments]);

  const formatDate = (startDate: Date, endDate: Date): string => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    
    if (start.getTime() === end.getTime()) {
      return start.toLocaleDateString('en-US', options);
    }
    
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`;
    }
    
    return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex gap-4 mb-8 border-b border-[var(--border)]">
          <button
            type="button"
            className={`pb-4 px-4 bg-transparent border-none cursor-pointer font-semibold text-base transition-colors border-b-[3px] ${
              activeTab === 'upcoming'
                ? 'text-[var(--primary)] border-[var(--primary)]'
                : 'text-[var(--muted)] border-transparent hover:text-[var(--foreground)]'
            }`}
            onClick={() => handleTabChange('upcoming')}
          >
            Upcoming Events
          </button>
          <button
            type="button"
            className={`pb-4 px-4 bg-transparent border-none cursor-pointer font-semibold text-base transition-colors border-b-[3px] ${
              activeTab === 'results'
                ? 'text-[var(--primary)] border-[var(--primary)]'
                : 'text-[var(--muted)] border-transparent hover:text-[var(--foreground)]'
            }`}
            onClick={() => handleTabChange('results')}
          >
            Past Results
          </button>
        </div>

        {/* Upcoming Tournaments */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-12">
            {upcomingTournaments.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-[var(--muted)] text-lg">No upcoming tournaments at the moment.</p>
              </div>
            ) : (
              upcomingTournaments.map((tournament) => (
                <div key={tournament.id} className="border border-[var(--border)] bg-white p-6 rounded-md">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D] rounded text-xs font-semibold">
                        UPCOMING
                      </span>
                    </div>
                    {tournament.tags && tournament.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tournament.tags.map((tag, index) => (
                          <span key={index} className="bg-[var(--muted-light)] px-2 py-1 rounded text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-black mb-4">{tournament.title}</h3>
                  <div className="flex flex-col gap-3 mb-4 text-sm text-[var(--muted)]">
                    <div className="flex items-center gap-2">📅 {formatDate(tournament.start_date, tournament.end_date)}</div>
                    <div className="flex items-center gap-2">🌍 {tournament.location}</div>
                    <div className="flex items-center gap-2">👥 {tournament.registration_count} registered</div>
                  </div>
                  <Link
                    href="/register"
                    className="block w-full text-center p-3 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)] no-underline"
                  >
                    Register Now
                  </Link>
                </div>
              ))
            )}
          </div>
        )}

        {/* Past Results */}
        {activeTab === 'results' && (
          <div className="flex flex-col gap-4">
            {pastTournaments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[var(--muted)] text-lg">No past tournament results available.</p>
              </div>
            ) : (
              pastTournaments.map((tournament) => (
                <div key={tournament.id} className="border border-[var(--border)] p-6 rounded-md flex justify-between items-center flex-wrap gap-4 bg-white">
                  <div>
                    <h4 className="font-black text-lg mb-1">{tournament.title}</h4>
                    <p className="text-[var(--muted)] text-sm m-0">
                      {formatDate(tournament.start_date, tournament.end_date)} • {tournament.registration_count} participants
                    </p>
                    {tournament.description && (
                      <p className="text-[var(--muted)] text-sm mt-2 mb-0">{tournament.description}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)]"
                  >
                    📥 Download PDF
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}



