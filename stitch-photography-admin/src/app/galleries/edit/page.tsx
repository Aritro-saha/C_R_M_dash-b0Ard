import React from 'react';

export default function EditGalleryPage() {
  return (
    <main className="min-h-screen px-8 py-12 lg:px-16 lg:py-16 max-w-7xl mx-auto">
      {/* Context & Header */}
      <header className="mb-10">
        <a className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dim transition-colors mb-4 group" href="/galleries">
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
          Back to All Galleries
        </a>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <h1 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tighter mb-2">The Smith Wedding</h1>
            <p className="text-on-surface-variant text-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">schedule</span>
              Last updated 2 hours ago by Editor
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md bg-surface-container-highest text-error font-medium text-sm flex items-center gap-2 hover:bg-error-container hover:text-on-error-container transition-colors">
              <span className="material-symbols-outlined text-[18px]">delete</span>
              Delete Collection
            </button>
            <button className="px-6 py-2 rounded-md bg-gradient-to-b from-primary to-primary-dim text-on-primary font-medium text-sm shadow-[0_4px_12px_rgba(84,95,115,0.2)] hover:opacity-90 transition-opacity">
              Save Changes
            </button>
          </div>
        </div>
      </header>

      {/* Settings Bar */}
      <section className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 mb-12 shadow-[0_8px_32px_rgba(11,15,16,0.03)] flex flex-col md:flex-row gap-8 lg:gap-12 relative overflow-hidden">
        {/* Decorative gradient subtle accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-container to-surface-container-lowest opacity-50"></div>
        <div className="flex-1">
          <label className="block font-label text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2.5">Client Access PIN</label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">lock</span>
            <input className="w-full bg-surface border border-outline-variant/20 rounded-md py-2.5 pl-11 pr-4 text-on-surface font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm" type="text" defaultValue="8492" />
          </div>
        </div>
        <div className="flex-1">
          <label className="block font-label text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2.5">Gallery Expiry</label>
          <div className="relative group">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline-variant text-[20px] group-focus-within:text-primary transition-colors">event</span>
            <input className="w-full bg-surface border border-outline-variant/20 rounded-md py-2.5 pl-11 pr-4 text-on-surface font-medium focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all shadow-sm text-sm" type="date" defaultValue="2024-12-31" />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-outline-variant/10 pt-6 md:pt-0 md:pl-8 lg:pl-12">
          <label className="block font-label text-xs font-semibold uppercase tracking-[0.05em] text-on-surface-variant mb-2">Live Status</label>
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-20"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary"></span>
            </span>
            <span className="text-sm font-medium text-on-surface">Published & Visible</span>
          </div>
        </div>
      </section>

      {/* Image Grid Section */}
      <section>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight">Curated Exhibition</h2>
            <p className="text-sm text-on-surface-variant mt-1">42 total items • 1.2 GB</p>
          </div>
          <div className="flex items-center gap-3">
            <button aria-label="List View" className="px-3 py-2 rounded-md text-on-surface-variant hover:bg-surface-container-highest transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined">view_list</span>
            </button>
            <button aria-label="Grid View" className="px-3 py-2 rounded-md bg-surface-container-lowest shadow-sm text-primary flex items-center justify-center">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
            </button>
            <div className="w-px h-6 bg-outline-variant/20 mx-2"></div>
            <button className="px-5 py-2.5 rounded-md bg-surface-container-lowest border border-outline-variant/20 text-on-surface font-medium text-sm flex items-center gap-2 hover:bg-surface-container-low transition-colors shadow-sm">
              <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span> 
              Add Photos
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-surface-container-low shadow-[0_2px_8px_rgba(11,15,16,0.02)]">
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 z-10 pointer-events-none rounded-xl"></div>
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src={`https://lh3.googleusercontent.com/aida-public/AB6AXuBzxhNHhuOVF2bhZHfywG0AEKcD6IK7gd4uvN_Rx8sZ0Dw6kIfSI-LU70kPYz4DD_VpXET1y4rC9K5BKyEH0ykqUh8_rPrEjexTR6BF4G1xWzWHyLgLgp6ok_gZPRupKVx5Zpce7N4BG6nl5YH5r95d4HzHbdR6fKzJlLGfzjk1gjGIj1OQt4P2Yjjl1iFr1-KiKHZjSKYWpIgFogSNpqUaioFXqrO9NVCNIiK-QN3Sg-ZfoJze9X-9eXKNxLapc-TBud4QEv_1Tc0`} 
                alt="Wedding Photo"
              />
              <div className="absolute inset-0 bg-surface-variant/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-20">
                <div className="flex justify-between items-start">
                  <button className="w-9 h-9 rounded-md bg-surface-container-lowest/90 text-on-surface flex items-center justify-center hover:text-primary transition-colors shadow-sm cursor-grab active:cursor-grabbing">
                    <span className="material-symbols-outlined text-[20px]">drag_indicator</span>
                  </button>
                  <button className="w-9 h-9 rounded-md bg-surface-container-lowest/90 text-on-surface-variant flex items-center justify-center hover:bg-error-container hover:text-error transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
                <div className="bg-surface-container-lowest/85 px-3 py-2 rounded-md self-start backdrop-blur-md shadow-sm border border-white/20">
                  <span className="text-xs font-medium text-on-surface">SMITH_00{id}.jpg</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
