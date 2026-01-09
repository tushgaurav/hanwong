export default function AffiliationForm() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Thank you for your interest! We will review your application and contact you within 3-5 business days.');
        event.currentTarget.reset();
    };
    return (
        <form className="border border-[var(--border)] bg-white p-8 rounded-md" onSubmit={handleSubmit}>
            <h3 className="text-xl font-black mb-6">Apply Now</h3>

            <div className="mb-6">
                <label className="block font-semibold mb-2">Full Name *</label>
                <input type="text" placeholder="Master Name" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
            </div>

            <div className="mb-6">
                <label className="block font-semibold mb-2">Email *</label>
                <input type="email" placeholder="email@example.com" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
            </div>

            <div className="mb-6">
                <label className="block font-semibold mb-2">Dojang Name *</label>
                <input type="text" placeholder="Your school name" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
            </div>

            <div className="mb-6">
                <label className="block font-semibold mb-2">Belt Rank *</label>
                <input type="text" placeholder="e.g., 5th Dan" required className="w-full p-3 border border-[var(--border)] rounded-md text-base" />
            </div>

            <div className="mb-6">
                <label className="block font-semibold mb-2">Message *</label>
                <textarea placeholder="Tell us about your school..." required className="w-full p-3 border border-[var(--border)] rounded-md text-base min-h-[100px] resize-none"></textarea>
            </div>

            <button type="submit" className="w-full p-3 bg-[var(--primary)] text-white border-none rounded-md cursor-pointer font-semibold transition-colors hover:bg-[var(--primary-dark)]">Submit Application</button>
        </form>
    );
}