import React from 'react';

export default function ContentSettingsPage() {
  return (
    <main className="min-h-screen p-16 pb-40 relative">
      <header className="mb-16 max-w-3xl">
        <h2 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-3">Site Content</h2>
        <p className="text-on-surface-variant font-body text-base max-w-xl">Curate the narrative and foundational information of your public-facing gallery.</p>
      </header>
      
      <form className="max-w-4xl flex flex-col gap-12">
        {/* Branding Section */}
        <section className="bg-surface-container-lowest rounded-xl p-10 shadow-[0_8px_32px_rgba(11,15,16,0.02)]">
          <div className="mb-8">
            <h3 className="font-headline text-xl font-bold text-on-surface">Brand Identity</h3>
            <p className="text-on-surface-variant text-sm mt-1">Manage your business name and visual mark.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-3">Studio Logo</label>
              <div className="flex flex-col items-center justify-center w-full h-48 border border-outline-variant/20 rounded-xl bg-surface-bright border-dashed hover:border-primary/50 transition-colors cursor-pointer group">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary mb-2 transition-colors">add_photo_alternate</span>
                <span className="text-sm text-on-surface-variant font-medium">Click to upload</span>
                <span className="text-xs text-outline mt-1">SVG, PNG, JPG (max 2MB)</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2" htmlFor="business_name">Business Name</label>
                <input className="w-full bg-surface-bright border border-outline-variant/20 rounded-md py-3 px-4 text-on-surface font-body focus:border-primary focus:ring-0 outline-none transition-all" id="business_name" type="text" defaultValue="Eleanor & Co. Photography" />
              </div>
              <div>
                <label className="block text-sm font-medium text-on-surface-variant mb-2" htmlFor="tagline">Tagline (Optional)</label>
                <input className="w-full bg-surface-bright border border-outline-variant/20 rounded-md py-3 px-4 text-on-surface font-body focus:border-primary focus:ring-0 outline-none transition-all" id="tagline" type="text" defaultValue="Capturing the ephemeral." />
              </div>
            </div>
          </div>
        </section>

        {/* Hero Text Section */}
        <section className="bg-surface-container-lowest rounded-xl p-10 shadow-[0_8px_32px_rgba(11,15,16,0.02)]">
          <div className="mb-8">
            <h3 className="font-headline text-xl font-bold text-on-surface">Hero Statement</h3>
            <p className="text-on-surface-variant text-sm mt-1">The first words visitors see on your homepage.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-on-surface-variant mb-2" htmlFor="hero_headline">Headline</label>
            <input className="w-full bg-surface-bright border border-outline-variant/20 rounded-md py-4 px-5 text-lg font-headline font-semibold text-on-surface focus:border-primary focus:ring-0 outline-none transition-all mb-6" id="hero_headline" type="text" defaultValue="Timeless moments, curated." />
            <label className="block text-sm font-medium text-on-surface-variant mb-2" htmlFor="hero_subtext">Supporting Text</label>
            <textarea className="w-full bg-surface-bright border border-outline-variant/20 rounded-md py-3 px-4 text-on-surface font-body focus:border-primary focus:ring-0 outline-none transition-all resize-none" id="hero_subtext" rows={3} defaultValue="Specializing in editorial portraiture and intimate weddings. Based in New York, available worldwide."></textarea>
          </div>
        </section>

        {/* Floating Action Bar */}
        <div className="fixed bottom-0 right-0 w-[calc(100%-280px)] bg-surface-container-lowest/80 backdrop-blur-xl border-t border-outline-variant/10 p-6 flex justify-end z-40 shadow-[0_-8px_32px_rgba(11,15,16,0.02)]">
          <div className="flex items-center gap-4 max-w-4xl w-full mx-auto justify-end">
            <span className="text-sm text-on-surface-variant mr-4">Last saved: 2 mins ago</span>
            <button className="px-6 py-3 rounded-xl bg-surface-container-highest text-on-surface font-medium hover:bg-surface-variant transition-colors" type="button">
              Discard Changes
            </button>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-b from-primary to-primary-dim text-on-primary font-semibold shadow-sm hover:opacity-95 transition-opacity flex items-center gap-2" type="submit">
              <span className="material-symbols-outlined text-[20px]">save</span>
              Update Site
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}