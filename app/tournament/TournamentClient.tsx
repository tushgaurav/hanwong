'use client';

import { useState } from 'react';
import Link from 'next/link';

type TabKey = 'upcoming' | 'results';

export default function TournamentClient() {
  const [activeTab, setActiveTab] = useState<TabKey>('upcoming');

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
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
            📅 Upcoming Events
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
            📊 Past Results
          </button>
        </div>

        {/* Upcoming Tournaments */}
        {activeTab === 'upcoming' && (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 mb-12">
            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D] rounded text-xs font-semibold">
                    UPCOMING
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[var(--muted-light)] px-2 py-1 rounded text-xs">Poomsae</span>
                  <span className="bg-[var(--muted-light)] px-2 py-1 rounded text-xs">Sparring</span>
                </div>
              </div>
              <h3 className="text-xl font-black mb-4">2024 World Championship Open</h3>
              <div className="flex flex-col gap-3 mb-4 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-2">📅 March 15-17, 2024</div>
                <div className="flex items-center gap-2">⏰ 9:00 AM - 6:00 PM EST</div>
                <div className="flex items-center gap-2">🌍 Online - Global</div>
                <div className="flex items-center gap-2">👥 320 registered</div>
              </div>
              <Link
                href="/register"
                className="block w-full text-center p-3 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)] no-underline"
              >
                Register Now
              </Link>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D] rounded text-xs font-semibold">
                    UPCOMING
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[var(--muted-light)] px-2 py-1 rounded text-xs">Poomsae</span>
                  <span className="bg-[var(--muted-light)] px-2 py-1 rounded text-xs">Breaking</span>
                </div>
              </div>
              <h3 className="text-xl font-black mb-4">Youth Division Championship</h3>
              <div className="flex flex-col gap-3 mb-4 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-2">📅 April 5-6, 2024</div>
                <div className="flex items-center gap-2">⏰ 10:00 AM - 5:00 PM EST</div>
                <div className="flex items-center gap-2">🌍 Online - Global</div>
                <div className="flex items-center gap-2">👥 185 registered</div>
              </div>
              <Link
                href="/register"
                className="block w-full text-center p-3 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)] no-underline"
              >
                Register Now
              </Link>
            </div>

            <div className="border border-[var(--border)] bg-white p-6 rounded-md">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-3 py-1 bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D] rounded text-xs font-semibold">
                    UPCOMING
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[var(--muted-light)] px-2 py-1 rounded text-xs">Poomsae</span>
                </div>
              </div>
              <h3 className="text-xl font-black mb-4">Masters Invitational</h3>
              <div className="flex flex-col gap-3 mb-4 text-sm text-[var(--muted)]">
                <div className="flex items-center gap-2">📅 May 20, 2024</div>
                <div className="flex items-center gap-2">⏰ 8:00 AM - 4:00 PM EST</div>
                <div className="flex items-center gap-2">🌍 Online - Global</div>
                <div className="flex items-center gap-2">👥 95 registered</div>
              </div>
              <Link
                href="/register"
                className="block w-full text-center p-3 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)] no-underline"
              >
                Register Now
              </Link>
            </div>
          </div>
        )}

        {/* Past Results */}
        {activeTab === 'results' && (
          <div className="flex flex-col gap-4">
            <div className="border border-[var(--border)] p-6 rounded-md flex justify-between items-center flex-wrap gap-4 bg-white">
              <div>
                <h4 className="font-black text-lg mb-1">2023 World Championship</h4>
                <p className="text-[var(--muted)] text-sm m-0">December 2023 • 450 participants</p>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)]"
              >
                📥 Download PDF
              </button>
            </div>
            <div className="border border-[var(--border)] p-6 rounded-md flex justify-between items-center flex-wrap gap-4 bg-white">
              <div>
                <h4 className="font-black text-lg mb-1">2023 Summer Open</h4>
                <p className="text-[var(--muted)] text-sm m-0">August 2023 • 320 participants</p>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)]"
              >
                📥 Download PDF
              </button>
            </div>
            <div className="border border-[var(--border)] p-6 rounded-md flex justify-between items-center flex-wrap gap-4 bg-white">
              <div>
                <h4 className="font-black text-lg mb-1">2023 Spring Invitational</h4>
                <p className="text-[var(--muted)] text-sm m-0">April 2023 • 280 participants</p>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)]"
              >
                📥 Download PDF
              </button>
            </div>
            <div className="border border-[var(--border)] p-6 rounded-md flex justify-between items-center flex-wrap gap-4 bg-white">
              <div>
                <h4 className="font-black text-lg mb-1">2022 World Championship</h4>
                <p className="text-[var(--muted)] text-sm m-0">December 2022 • 380 participants</p>
              </div>
              <button
                type="button"
                className="px-4 py-2 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)]"
              >
                📥 Download PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}



