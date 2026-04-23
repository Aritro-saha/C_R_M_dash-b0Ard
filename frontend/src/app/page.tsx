import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 right-0 w-full md:w-[calc(100%-280px)] z-40 bg-surface/80 backdrop-blur-md h-16 flex justify-between items-center px-8">
        <div className="flex items-center flex-1">
          {/* Mobile Menu Button - Hidden for now as functionality requires state */}
          <button className="md:hidden mr-4 text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="relative w-full max-w-md hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
            <input 
              className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl py-2 pl-10 pr-4 font-body text-sm text-on-surface placeholder-on-surface-variant/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" 
              placeholder="Search galleries, clients, or transactions..." 
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full border-2 border-surface"></span>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <div className="pt-24 px-8 pb-12 max-w-7xl mx-auto w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight">Overview</h2>
            <p className="font-body text-on-surface-variant mt-2 text-sm">Welcome back, Alex. Here’s the status of your gallery.</p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button className="bg-surface-container-highest text-on-surface rounded-xl px-4 py-2 font-headline font-medium text-sm flex items-center hover:bg-surface-variant transition-colors">
              <span className="material-symbols-outlined mr-2 text-sm">download</span>
              Export Report
            </button>
          </div>
        </div>

        {/* Bento Grid Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {/* Total Galleries */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 relative overflow-hidden group hover:shadow-[0_12px_40px_-12px_rgba(84,95,115,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-8xl">collections</span>
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">collections</span>
              </div>
              <span className="bg-surface-container text-on-surface-variant text-xs font-semibold px-2 py-1 rounded-md flex items-center">
                <span className="material-symbols-outlined text-[10px] mr-1 text-tertiary">trending_up</span>
                +12%
              </span>
            </div>
            <div>
              <p className="font-body text-sm text-on-surface-variant font-medium mb-1">Total Galleries</p>
              <h3 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">42</h3>
            </div>
          </div>

          {/* Active Galleries */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 relative overflow-hidden group hover:shadow-[0_12px_40px_-12px_rgba(84,95,115,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-8xl">visibility</span>
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined">visibility</span>
              </div>
            </div>
            <div>
              <p className="font-body text-sm text-on-surface-variant font-medium mb-1">Active Galleries</p>
              <h3 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight flex items-baseline">
                15 <span className="text-sm font-medium text-on-surface-variant ml-2 tracking-normal">/ 42</span>
              </h3>
            </div>
          </div>

          {/* Storage Used */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 relative overflow-hidden group hover:shadow-[0_12px_40px_-12px_rgba(84,95,115,0.15)] transition-all duration-500">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">cloud</span>
              </div>
              <span className="text-on-surface-variant text-xs font-medium">1.5 TB Total</span>
            </div>
            <div>
              <p className="font-body text-sm text-on-surface-variant font-medium mb-1">Storage Used</p>
              <h3 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight mb-3">75%</h3>
              <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 relative overflow-hidden group hover:shadow-[0_12px_40px_-12px_rgba(84,95,115,0.15)] transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-8xl">payments</span>
            </div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined">account_balance_wallet</span>
              </div>
              <span className="bg-tertiary/10 text-tertiary text-xs font-semibold px-2 py-1 rounded-md flex items-center">
                <span className="material-symbols-outlined text-[10px] mr-1">trending_up</span>
                +8.5%
              </span>
            </div>
            <div>
              <p className="font-body text-sm text-on-surface-variant font-medium mb-1">Monthly Revenue</p>
              <h3 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">$12.4k</h3>
            </div>
          </div>
        </div>

        {/* Asymmetric Layout for Activity and Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity Feed (Takes up 2/3) */}
          <div className="lg:col-span-2 bg-surface-container-low rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-xl font-bold text-on-surface tracking-tight">Recent Activity</h3>
              <a className="text-sm font-medium text-primary hover:text-primary-dim transition-colors" href="#">View All</a>
            </div>
            <div className="space-y-6">
              {/* Activity Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-sm">add_photo_alternate</span>
                </div>
                <div className="flex-1 bg-surface-container-lowest rounded-2xl p-4 shadow-sm relative overflow-hidden group">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary rounded-l-2xl"></div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-headline font-semibold text-on-surface text-sm">Gallery Created</h4>
                    <span className="font-body text-xs text-on-surface-variant">2h ago</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant"><span className="font-medium text-on-surface">Wedding - Smith Family</span> has been generated with 450 images.</p>
                  <div className="mt-3 flex gap-2">
                    <span className="px-2 py-1 bg-surface-container-low text-xs rounded-md text-on-surface-variant">Client: Sarah Smith</span>
                    <span className="px-2 py-1 bg-surface-container-low text-xs rounded-md text-on-surface-variant">Draft</span>
                  </div>
                </div>
              </div>
              {/* Activity Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-sm">update</span>
                </div>
                <div className="flex-1 bg-surface-container-lowest rounded-2xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-headline font-semibold text-on-surface text-sm">Portfolio Update</h4>
                    <span className="font-body text-xs text-on-surface-variant">5h ago</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant">New high-resolution assets uploaded to <span className="font-medium text-on-surface">Editorial Fashion SS24</span>.</p>
                  <div className="mt-3 flex gap-2 overflow-hidden">
                    <img alt="Fashion Editorial" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=200" />
                    <img alt="Fashion Editorial 2" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=200" />
                    <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-xs font-medium text-on-surface-variant">+12</div>
                  </div>
                </div>
              </div>
              {/* Activity Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-sm">payments</span>
                </div>
                <div className="flex-1 bg-surface-container-lowest rounded-2xl p-4 shadow-sm">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-headline font-semibold text-on-surface text-sm">Payment Received</h4>
                    <span className="font-body text-xs text-on-surface-variant">Yesterday</span>
                  </div>
                  <p className="font-body text-sm text-on-surface-variant">Final installment of <span className="font-medium text-on-surface">$1,200.00</span> received for Corporate Headshots.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured / Storage Callout (Takes up 1/3) */}
          <div className="flex flex-col gap-6">
            <div className="bg-surface-container-lowest rounded-3xl p-6 shadow-[0_4px_24px_-12px_rgba(84,95,115,0.1)]">
              <h3 className="font-headline text-lg font-bold text-on-surface mb-6 tracking-tight">System Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-body text-on-surface-variant">Bandwidth</span>
                    <span className="font-headline font-semibold text-on-surface">420 GB / 1 TB</span>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-on-surface h-full rounded-full w-[42%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-body text-on-surface-variant">Storage</span>
                    <span className="font-headline font-semibold text-on-surface">1.5 TB / 2 TB</span>
                  </div>
                  <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full rounded-full w-[75%]"></div>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-surface border border-outline-variant/20 text-on-surface rounded-xl py-2 font-headline font-medium text-sm hover:bg-surface-container-low transition-colors">
                Upgrade Plan
              </button>
            </div>

            <div className="bg-surface-container-low rounded-3xl p-6 flex-1 flex flex-col relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-4 tracking-tight z-10">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3 z-10">
                <button className="bg-surface-container-lowest p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">add_a_photo</span>
                  <span className="font-headline text-xs font-medium text-on-surface">New Session</span>
                </button>
                <button className="bg-surface-container-lowest p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person_add</span>
                  <span className="font-headline text-xs font-medium text-on-surface">Add Client</span>
                </button>
                <button className="bg-surface-container-lowest p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">send</span>
                  <span className="font-headline text-xs font-medium text-on-surface">Send Invoice</span>
                </button>
                <button className="bg-surface-container-lowest p-4 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white hover:shadow-sm transition-all group border border-transparent hover:border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">water_drop</span>
                  <span className="font-headline text-xs font-medium text-on-surface">Watermarks</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

