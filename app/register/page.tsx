'use client';

import React, { useState } from 'react';

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[64rem] mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-4">Tournament Registration</h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)]">
            Register now to compete in our upcoming championship events. 100% of fees go to humanitarian charity.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="max-w-[64rem] mx-auto px-4">
          {!isSubmitted ? (
            <form className="border border-[var(--border)] bg-white p-8 rounded-md" onSubmit={handleSubmit}>
              <h2 className="text-xl font-black mb-6">Athlete Registration Form</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-6 md:mb-0">
                  <label className="block font-semibold mb-2">First Name *</label>
                  <input type="text" placeholder="John" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Last Name *</label>
                  <input type="text" placeholder="Smith" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-6 md:mb-0">
                  <label className="block font-semibold mb-2">Email *</label>
                  <input type="email" placeholder="john@example.com" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Phone *</label>
                  <input type="tel" placeholder="+1 555 123 4567" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-6 md:mb-0">
                  <label className="block font-semibold mb-2">Date of Birth *</label>
                  <input type="date" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Country *</label>
                  <select required className="w-full p-3 border border-[var(--border)] rounded-md text-base">
                    <option value="">Select country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="KR">South Korea</option>
                    <option value="JP">Japan</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="BR">Brazil</option>
                    <option value="IN">India</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="mb-6 md:mb-0">
                  <label className="block font-semibold mb-2">Dojang / School Name *</label>
                  <input type="text" placeholder="Your school name" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
                </div>
                <div>
                  <label className="block font-semibold mb-2">Current Belt Rank *</label>
                  <select required className="w-full p-3 border border-[var(--border)] rounded-md text-base">
                    <option value="">Select rank</option>
                    <option value="white">White Belt</option>
                    <option value="yellow">Yellow Belt</option>
                    <option value="green">Green Belt</option>
                    <option value="blue">Blue Belt</option>
                    <option value="red">Red Belt</option>
                    <option value="1dan">1st Dan</option>
                    <option value="2dan">2nd Dan</option>
                    <option value="3dan">3rd Dan</option>
                    <option value="4dan">4th Dan</option>
                    <option value="5dan">5th Dan+</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Select Tournament *</label>
                <select required className="w-full p-3 border border-[var(--border)] rounded-md text-base">
                  <option value="">Select tournament</option>
                  <option value="2024-world">2024 World Championship Open - March 15-17</option>
                  <option value="2024-youth">Youth Division Championship - April 5-6</option>
                  <option value="2024-masters">Masters Invitational - May 20</option>
                  <option value="2024-summer">Summer Open Championship - July 12-14</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Competition Categories *</label>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="poomsae" name="categories" value="poomsae" className="mt-1 cursor-pointer" />
                    <label htmlFor="poomsae" className="cursor-pointer">Poomsae (Forms)</label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="sparring" name="categories" value="sparring" className="mt-1 cursor-pointer" />
                    <label htmlFor="sparring" className="cursor-pointer">Sparring (Kyorugi)</label>
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="breaking" name="categories" value="breaking" className="mt-1 cursor-pointer" />
                    <label htmlFor="breaking" className="cursor-pointer">Breaking (Gyeokpa)</label>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="flex items-start gap-2 font-normal cursor-pointer">
                  <input type="checkbox" name="terms" required className="mt-1 cursor-pointer" />
                  <span>I agree to the tournament rules and terms of participation, and I confirm that 100% of my registration fee will be donated to humanitarian charity.</span>
                </label>
              </div>

              <button type="submit" className="w-full p-4 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold text-base transition-colors hover:bg-[var(--primary-dark)]">Complete Registration</button>
            </form>
          ) : (
            <div className="text-center p-12 bg-white border border-[var(--border)] rounded-md">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[var(--primary)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-4">Registration Complete!</h2>
              <p className="text-[var(--muted-foreground)] mb-8">Thank you for registering. You will receive a confirmation email with further details about the tournament.</p>
              <button 
                className="w-full max-w-xs p-4 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold text-base transition-colors hover:bg-[var(--primary-dark)]" 
                onClick={resetForm}
              >
                Register Another Athlete
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}



