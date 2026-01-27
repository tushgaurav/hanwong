
'use client';

import React, { useState } from 'react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const photos = [
    { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop', alt: 'Taekwondo athlete' },
    { src: 'https://images.unsplash.com/photo-1598518619776-eae3f8a34eac?w=600&h=400&fit=crop', alt: 'Tournament arena' },
    { src: 'https://images.unsplash.com/photo-1469027773879-ec0a0df4d03b?w=600&h=400&fit=crop', alt: 'Charity event' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop', alt: 'Grand Master' },
    { src: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=600&h=400&fit=crop', alt: 'Competition highlights' },
    { src: 'https://images.unsplash.com/photo-1564415637254-92c66292cd64?w=600&h=400&fit=crop', alt: 'Training session' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--card)] py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4 text-center">
          <h1 className="text-5xl font-black mb-4">Media Gallery</h1>
          <p className="max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg">
            Explore highlights from our championships, training sessions, and charitable events.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-[90rem] mx-auto px-4">
          <div className="flex gap-4 mb-8 border-b border-[var(--border)]">
            <button
              className={`pb-4 px-4 bg-transparent border-none cursor-pointer font-semibold text-base transition-colors border-b-[3px] ${
                activeTab === 'photos'
                  ? 'text-[var(--primary)] border-[var(--primary)]'
                  : 'text-[var(--muted-foreground)] border-transparent hover:text-[var(--foreground)]'
              }`}
              onClick={() => setActiveTab('photos')}
            >
              📷 Photos
            </button>
            <button
              className={`pb-4 px-4 bg-transparent border-none cursor-pointer font-semibold text-base transition-colors border-b-[3px] ${
                activeTab === 'videos'
                  ? 'text-[var(--primary)] border-[var(--primary)]'
                  : 'text-[var(--muted-foreground)] border-transparent hover:text-[var(--foreground)]'
              }`}
              onClick={() => setActiveTab('videos')}
            >
              🎬 Videos
            </button>
          </div>

          {/* Photos Gallery */}
          {activeTab === 'photos' && (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {photos.map((photo, index) => (
                <div 
                  key={index}
                  className="relative rounded-md overflow-hidden aspect-video cursor-pointer group"
                  onClick={() => openModal(photo.src)}
                >
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20"></div>
                </div>
              ))}
            </div>
          )}

          {/* Videos Gallery */}
          {activeTab === 'videos' && (
            <div className="text-center py-12">
              <p className="text-[var(--muted-foreground)] text-lg mb-4">Our video content is coming soon!</p>
              <p className="text-[var(--muted-foreground)] mb-6">Subscribe to our YouTube channel to get notified when we release championship highlights and exclusive content.</p>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[var(--primary)] text-white rounded-md no-underline font-semibold transition-colors hover:bg-[var(--primary-dark)]"
              >
                Subscribe on YouTube
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-[90%] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white text-4xl cursor-pointer bg-transparent border-none p-0 leading-none hover:text-[var(--primary)] transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <img 
              src={modalImage} 
              alt="Full size" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-sm"
            />
          </div>
        </div>
      )}
    </main>
  );
}



