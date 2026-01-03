'use client';

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you! We will get back to you within 24-48 hours.');
    event.currentTarget.reset();
  };

  return (
    <form className="border border-[var(--border)] bg-white p-8 rounded-md" onSubmit={handleSubmit}>
      <h3 className="text-xl font-black mb-6">Get in Touch</h3>
      
      <div className="mb-6">
        <label className="block font-semibold mb-2">Full Name</label>
        <input type="text" placeholder="John Smith" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Email</label>
        <input type="email" placeholder="john@example.com" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Inquiry Type</label>
        <select required className="w-full p-3 border border-[var(--border)] rounded-md text-base">
          <option value="">Select inquiry type</option>
          <option value="general">General Inquiry</option>
          <option value="tournament">Tournament Information</option>
          <option value="affiliation">School Affiliation</option>
          <option value="partnership">Partnership Request</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">Message</label>
        <textarea placeholder="How can we help you?" required className="w-full p-3 border border-[var(--border)] rounded-md text-base min-h-[120px] resize-none"></textarea>
      </div>

      <button type="submit" className="w-full p-3 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)]">Send Message</button>
    </form>
  );
}