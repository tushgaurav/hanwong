import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6 text-[var(--foreground)]">
        <p className="text-[var(--muted-foreground)]">Last updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2 className="text-xl font-semibold mb-3">1. Agreement to Terms</h2>
          <p>
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Han Wong International ("we," "us," or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
          </p>
          <p className="mt-2">
            You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the Site and you must discontinue use immediately.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Intellectual Property Rights</h2>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. User Representations</h2>
          <p>
            By using the Site, you represent and warrant that:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>All registration information you submit will be true, accurate, current, and complete.</li>
            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
            <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site.</li>
            <li>You will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</li>
            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Tournament Registration and Participation</h2>
          <p>
            Registration for tournaments is subject to availability and specific event rules. We reserve the right to refuse service, terminate accounts, or cancel registrations in our sole discretion. Participants are expected to adhere to the code of conduct and rules established by Han Wong International.
          </p>
          <p className="mt-2">
            <strong>Refund Policy:</strong> Refund policies for tournament registrations are specified on the respective event registration pages. Generally, no refunds are provided for cancellations made within a certain period before the event start date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
          <p>
            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">6. Governing Law</h2>
          <p>
            These Terms shall be governed by and defined following the laws of the State of California. Han Wong International and yourself irrevocably consent that the courts of California shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">7. Contact Us</h2>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
          </p>
          <p className="mt-2">
            <strong>Han Wong International</strong><br />
            Los Angeles, CA, USA<br />
            Email: director@hanwonginternational.com<br />
            Phone: (+91) 6294-278034
          </p>
        </section>
      </div>
    </div>
  );
}

