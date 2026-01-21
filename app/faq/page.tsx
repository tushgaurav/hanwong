import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Han Wong International",
  description: "Frequently Asked Questions about Han Wong International tournaments",
};

export default function FAQ() {
  return (
    <main className="bg-white">
      <div className="max-w-[50rem] mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black mb-12 text-center uppercase">
          Frequently Asked Questions
        </h1>

        {/* General Section */}
        <div className="mb-12">
          <h2 className="text-xl font-black text-[var(--primary)] uppercase mb-6 pb-2 border-b-2 border-[var(--border)]">
            General
          </h2>

          <div className="mb-6">
            <span className="block font-bold text-lg mb-2">
              Is this tournament LIVE?
            </span>
            <p className="text-[var(--muted-foreground)]">
              No, this is a pre-recorded video submission tournament. This allows athletes from all time zones to compete fairly under the same conditions.
            </p>
          </div>

          <div className="mb-6">
            <span className="block font-bold text-lg mb-2">
              Is the registration fee a donation?
            </span>
            <p className="text-[var(--muted-foreground)]">
              The registration fee is a service fee to cover tournament overhead. However, 100% of the profits generated from the event are donated to humanitarian causes. Please note the fee is not tax-deductible for the participant.
            </p>
          </div>
        </div>

        {/* Scoring & Awards Section */}
        <div className="mb-12">
          <h2 className="text-xl font-black text-[var(--primary)] uppercase mb-6 pb-2 border-b-2 border-[var(--border)]">
            Scoring & Awards
          </h2>

          <div className="mb-6">
            <span className="block font-bold text-lg mb-2">
              How is scoring conducted?
            </span>
            <p className="text-[var(--muted-foreground)]">
              Submissions are evaluated by a 3-judge panel of international masters. We follow World Taekwondo (WT) rules, scoring 4.0 for Accuracy and 6.0 for Presentation.
            </p>
          </div>

          <div className="mb-6">
            <span className="block font-bold text-lg mb-2">
              Do we receive physical medals?
            </span>
            <p className="text-[var(--muted-foreground)]">
              Yes, physical Gold, Silver, and Bronze medals are awarded to winners. Additionally, digital E-Certificates of participation are provided to all athletes.
            </p>
          </div>
        </div>

        {/* Logistics & Shipping Section */}
        <div className="mb-12">
          <h2 className="text-xl font-black text-[var(--primary)] uppercase mb-6 pb-2 border-b-2 border-[var(--border)]">
            Logistics & Shipping
          </h2>

          <div className="mb-6">
            <span className="block font-bold text-lg mb-2">
              What are the international shipping costs?
            </span>
            <div className="text-[var(--muted-foreground)]">
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr>
                    <th className="border border-[var(--border)] bg-[var(--muted-light)] p-3 text-left">Service</th>
                    <th className="border border-[var(--border)] bg-[var(--muted-light)] p-3 text-left">Cost</th>
                    <th className="border border-[var(--border)] bg-[var(--muted-light)] p-3 text-left">Delivery Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[var(--border)] p-3">Standard Shipping</td>
                    <td className="border border-[var(--border)] p-3">$35 - $45</td>
                    <td className="border border-[var(--border)] p-3">15 - 20 Days</td>
                  </tr>
                  <tr>
                    <td className="border border-[var(--border)] p-3">Express Shipping</td>
                    <td className="border border-[var(--border)] p-3">$100+</td>
                    <td className="border border-[var(--border)] p-3">3 - 5 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-6">
            <span className="block font-bold text-lg mb-2">
              Can we consolidate shipping for our team?
            </span>
            <p className="text-[var(--muted-foreground)]">
              Yes! Teams or Dojangs with 5 or more winners can consolidate their shipping to the Head Master's address. This significantly reduces the cost per athlete.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
