import React from 'react';

export default function MessagesPage() {
  return (
    <div className="flex-1 flex overflow-hidden p-6 gap-6 h-[calc(100vh-64px)]">
      {/* Message List Sidebar */}
      <div className="w-1/3 min-w-[320px] max-w-[400px] bg-surface-container-low rounded-xl flex flex-col overflow-hidden">
        <div className="px-6 py-5 flex justify-between items-center border-b border-outline-variant/15">
          <h2 className="font-headline font-bold text-xl text-on-surface tracking-tight">Inbox</h2>
          <span className="bg-primary-container text-on-primary-container font-label text-xs font-semibold px-2 py-0.5 rounded-full">3 New</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          {/* Unread Message (Active) */}
          <div className="p-5 cursor-pointer bg-surface-container-lowest relative group">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <div className="flex justify-between items-start mb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                <h3 className="font-headline font-bold text-base text-on-surface">Eleanor Vance</h3>
              </div>
              <span className="font-body text-xs text-on-surface-variant">10:42 AM</span>
            </div>
            <p className="font-label text-xs text-on-surface-variant mb-2">eleanor.v@example.com</p>
            <p className="font-body text-sm text-on-surface line-clamp-2 pr-4">Regarding the autumn editorial shoot, we'd like to push the timeline back by two weeks. Would that still work for your schedule?</p>
          </div>
          
          {/* Read Message */}
          <div className="p-5 cursor-pointer hover:bg-surface-container-lowest/50 transition-colors border-t border-outline-variant/10">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-headline font-medium text-base text-on-surface-variant">Marcus Reed</h3>
              <span className="font-body text-xs text-on-surface-variant">Yesterday</span>
            </div>
            <p className="font-label text-xs text-on-surface-variant mb-2">m.reed.studio@creative.net</p>
            <p className="font-body text-sm text-on-surface-variant line-clamp-2 pr-4">The final gallery looks incredible. The lighting in the third set really captures the mood we were hoping for.</p>
          </div>

          {/* Read Message */}
          <div className="p-5 cursor-pointer hover:bg-surface-container-lowest/50 transition-colors border-t border-outline-variant/10">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-headline font-medium text-base text-on-surface-variant">Sarah Chen</h3>
              <span className="font-body text-xs text-on-surface-variant">Oct 12</span>
            </div>
            <p className="font-label text-xs text-on-surface-variant mb-2">sarah@chenweddings.com</p>
            <p className="font-body text-sm text-on-surface-variant line-clamp-2 pr-4">Can you send over the high-res files for the cover spread? We need them for the printers by Thursday.</p>
          </div>
        </div>
      </div>

      {/* Message Detail View */}
      <div className="flex-1 bg-surface-container-lowest rounded-xl flex flex-col overflow-hidden relative">
        <div className="px-8 py-6 border-b border-outline-variant/15 flex justify-between items-start bg-surface-container-lowest/80 backdrop-blur-md sticky top-0 z-10">
          <div>
            <h2 className="font-headline font-bold text-2xl text-on-surface mb-2">Autumn Editorial Shoot Timeline Adjustments</h2>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary font-headline font-bold">EV</div>
              <div>
                <p className="font-body font-medium text-sm text-on-surface">Eleanor Vance</p>
                <p className="font-label text-xs text-on-surface-variant">eleanor.v@example.com • Oct 14, 2023, 10:42 AM</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-md hover:bg-surface-container-low" title="Mark as Unread">
              <span className="material-symbols-outlined">mark_email_unread</span>
            </button>
            <button className="text-on-surface-variant hover:text-error transition-colors flex items-center justify-center w-10 h-10 rounded-md hover:bg-error-container/20" title="Delete">
              <span className="material-symbols-outlined">delete</span>
            </button>
            <button className="bg-surface-container-highest text-on-surface hover:bg-surface-variant px-4 py-2 rounded-md font-label text-sm transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">reply</span>
              Reply
            </button>
          </div>
        </div>
        <div className="p-8 flex-1 overflow-y-auto font-body text-sm text-on-surface leading-relaxed max-w-3xl">
          <p className="mb-4">Hi there,</p>
          <p className="mb-4">I hope this email finds you well.</p>
          <p className="mb-4">Regarding the autumn editorial shoot we've been planning, we are looking at pushing the timeline back by roughly two weeks due to some delays with the wardrobe arriving from Milan. We're now targeting the week of November 6th.</p>
          <p className="mb-4">Would that still work for your schedule? We understand this is a busy season, so please let us know if this causes any major conflicts. The location (the old glasshouse) is still secured for those dates.</p>
          <p className="mb-6">Looking forward to hearing from you.</p>
          <p className="mb-1">Best regards,</p>
          <p className="font-medium text-on-surface">Eleanor Vance</p>
          <p className="text-xs text-on-surface-variant">Creative Director | Studio Vance</p>
        </div>
      </div>
    </div>
  );
}