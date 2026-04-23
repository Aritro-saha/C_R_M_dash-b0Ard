import React from 'react';

export default function GalleriesPage() {
  return (
    <main className="flex-1 min-h-screen pt-24 px-8 pb-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
        <div>
          <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">Client Galleries</h1>
          <p className="text-on-surface-variant text-sm">Manage and share your curated collections.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl flex overflow-hidden p-1">
            <button className="px-4 py-2 bg-surface-container-low text-on-surface rounded-lg text-sm font-medium transition-colors">Grid</button>
            <button className="px-4 py-2 text-on-surface-variant hover:text-on-surface rounded-lg text-sm font-medium transition-colors">List</button>
          </div>
          <button className="bg-gradient-to-b from-primary to-primary-dim text-on-primary rounded-xl py-2 px-6 font-semibold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ml-auto md:ml-0 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create New Gallery
          </button>
        </div>
      </div>

      {/* Galleries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gallery Card 1 */}
        <article className="bg-surface-container-lowest rounded-[1rem] overflow-hidden group hover:shadow-lg transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-low">
            <img 
              alt="The Miller Wedding" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb5Mv6wFfOaSehvB3DpbB327f6Vi4UAWetuFicn2cI2SbhdTotHJa0Txv8QLLkssMhvrmYnS58v_ZXXxZJXF6bt4tt1bfXXQz4QDMo2rcELIdcnsIPPAmKvvKAHzP6_486TViTNSkO0s5pvIMfVGtbITVgLp49MBZc1rGJDoL48ttglRUL-z3Q6PH5t4vYAXpZyyfc8q2bpN6r8vwlKb5v3UrpxKvDLbH4ENAp-pRHny1CAiuFQkP4qvMxRjpq7tGnm9S3TWzpOdo"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-tertiary flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              Active
            </div>
            <button className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline font-bold text-lg text-on-surface truncate">The Miller Wedding</h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-6">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">photo_library</span> 245 Photos</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Expires in 14 days</span>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-surface-container-highest text-on-surface rounded-lg py-2 text-sm font-medium hover:bg-surface-variant transition-colors">View</button>
              <button className="flex-1 bg-transparent text-primary border border-outline-variant/30 rounded-lg py-2 text-sm font-medium hover:bg-surface-container-low transition-colors">Share</button>
            </div>
          </div>
        </article>

        {/* Gallery Card 2 */}
        <article className="bg-surface-container-lowest rounded-[1rem] overflow-hidden group hover:shadow-lg transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-low">
            <img 
              alt="Symphony Portraits" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCOHH0eA9-V6BUXR-DszOcexTq9RSoSB-9AfChPgSFeVWQIWdpjE9yXj5Bes0SLIozVqKobvFKZFn3n-edCvXKhQmZv7JSvY4O7OM5BsPSnVLG_hExlqtPheb5BS2sKN0LPk8mU_rtz_owxkYOSEyHIPwR0P4qi8vsBQNxwLToDx17xxPipCJlW49eiRfomkWabEGELC9J5xL3uFxuzFZEEY926hJwNHOAId6LPw8DOGiu-VNOoJR53HGx0YiKIuv05mUHB8xHbEY"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-tertiary flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
              Active
            </div>
            <button className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-2 rounded-full transition-colors opacity-0 group-hover:opacity-100">
              <span className="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline font-bold text-lg text-on-surface truncate">Symphony Portraits</h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-6">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">photo_library</span> 42 Photos</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Expires in 3 days</span>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-surface-container-highest text-on-surface rounded-lg py-2 text-sm font-medium hover:bg-surface-variant transition-colors">View</button>
              <button className="flex-1 bg-transparent text-primary border border-outline-variant/30 rounded-lg py-2 text-sm font-medium hover:bg-surface-container-low transition-colors">Share</button>
            </div>
          </div>
        </article>

        {/* Gallery Card 3 (Expired) */}
        <article className="bg-surface-container-lowest rounded-[1rem] overflow-hidden group hover:shadow-lg transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10 opacity-75">
          <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-low grayscale">
            <img 
              alt="Autumn Lookbook '23" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6YzNGJ0w8RPmif2gUF-7QOTS9WhCR_mnKm0HxyjIjZ_1DbExndN2S3HwdL0xHZ-JMremK1_yed0XmtF4Ao6bCe97PFYIhv7FJXuFiVmZHVhOf8jTk0DbJug8_SKRQUHOCSFFrKvKDQPqDjVS8A_sxD2OXtHSrKSLhwujFO7hlfjmUxQH_QtuFXwu0k_fJxVsxC5HFc7sEgAbvRf8UwDUZ-6yMukLxDWhGPu4_SoZumD9iXds_DOwGkfxHmGzeas9iGz22MvyPFIs"
            />
            <div className="absolute inset-0 bg-surface/20 backdrop-blur-[2px]"></div>
            <div className="absolute top-4 left-4 bg-surface-variant/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-on-surface-variant flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-outline"></div>
              Expired
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline font-bold text-lg text-on-surface truncate">Autumn Lookbook '23</h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-on-surface-variant mb-6">
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">photo_library</span> 118 Photos</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">history</span> Expired Oct 12</span>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-surface-container-highest text-on-surface rounded-lg py-2 text-sm font-medium hover:bg-surface-variant transition-colors">Reactivate</button>
              <button className="flex-1 bg-transparent text-error border border-error/30 rounded-lg py-2 text-sm font-medium hover:bg-error-container/20 transition-colors">Archive</button>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}