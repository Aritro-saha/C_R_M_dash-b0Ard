import React from 'react';

export default function PaymentsPage() {
  return (
    <main className="pt-24 px-12 pb-12 min-h-screen flex flex-col">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="font-headline font-bold text-3xl tracking-tight text-on-surface">Payments</h2>
          <p className="font-body text-on-surface-variant text-sm mt-1">Manage client invoices and incoming revenue.</p>
        </div>
        {/* Filters */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <select className="appearance-none bg-surface-container-lowest border border-outline-variant/20 rounded-md pl-4 pr-10 py-2 text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer">
              <option value="all">All Statuses</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
          </div>
          <div className="relative">
            <select className="appearance-none bg-surface-container-lowest border border-outline-variant/20 rounded-md pl-4 pr-10 py-2 text-sm text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none cursor-pointer">
              <option value="30">Last 30 Days</option>
              <option value="90">Last 90 Days</option>
              <option value="year">This Year</option>
              <option value="all">All Time</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[18px]">expand_more</span>
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-surface-container-lowest rounded-xl p-8 flex-1">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant/15">
              <th className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant pb-4 font-medium pl-2">Client Name</th>
              <th className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant pb-4 font-medium">Project Reference</th>
              <th className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant pb-4 font-medium">Amount</th>
              <th className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant pb-4 font-medium">Date</th>
              <th className="font-label text-xs uppercase tracking-[0.05em] text-on-surface-variant pb-4 font-medium text-right pr-2">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-body">
            {/* Row 1 */}
            <tr className="group hover:bg-surface-container-low transition-colors duration-200">
              <td className="py-5 pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-dim overflow-hidden shrink-0">
                    <img alt="Client Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl0wcy2WhemgY3UjlpRS5S0L3PxdRONEmTxgoO-r7rMvKrjH9pj95cciF3Ql21G8ileT4eCB5ssBS0FhWyqPqyPKmJajFqGhTKm9SqlId_I2I3OF2_h0ndz54qMJt6RrekRgZwE0oVT0WUSHy4lGnbTLh4pcvDWkhVbDDy1ZfAYj3uRXj0iHf7ROXN6quQuDnjUKK_s89-Kf-EbGvl0OAm_LskYwiFi6VBQWqxFlfQCAjh7eYMYVcHGfvU8Og8v7BJhjIeTLvPDL4" />
                  </div>
                  <span className="font-medium text-on-surface">Eleanor & James</span>
                </div>
              </td>
              <td className="py-5 text-on-surface-variant">Wedding Package Vol. 1</td>
              <td className="py-5 font-medium text-on-surface">$4,500.00</td>
              <td className="py-5 text-on-surface-variant">Oct 24, 2023</td>
              <td className="py-5 pr-2 text-right">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#e2fff9] text-tertiary text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Paid
                </span>
              </td>
            </tr>
            {/* Row 2 */}
            <tr className="group hover:bg-surface-container-low transition-colors duration-200">
              <td className="py-5 pl-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-dim overflow-hidden shrink-0">
                    <img alt="Client Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDRruQhqJmlBgrvcvxf5xtYtyWiGKqWhnBwbIjuQYWyoOzEE6LBqSSh-HMr4w4jgGHEMhCU-9NjPKaQxX2XGtcbXN2P8AWb_34IV6QEFQsfNPjwSkiioccJNLhYeaQ4-fPnBxmCh_7HvMxhYqt3CGzKzQarJnFA2XK2F-Qh_sMskDIfodYVEKXLMjF_bunOA-wxQquzskxy1BaYGWW4PpQtlgHoPZqWzPt1cIbzjbRLaP7CcI-qeVfr_NLG9djTSAERs9wtstlYPI" />
                  </div>
                  <span className="font-medium text-on-surface">Kinfolk Magazine</span>
                </div>
              </td>
              <td className="py-5 text-on-surface-variant">Editorial Spread - Issue 42</td>
              <td className="py-5 font-medium text-on-surface">$2,850.00</td>
              <td className="py-5 text-on-surface-variant">Oct 21, 2023</td>
              <td className="py-5 pr-2 text-right">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-high text-on-surface text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant"></span>
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-outline-variant/15">
          <p className="text-sm text-on-surface-variant">Showing 2 results</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface-variant text-sm transition-colors cursor-not-allowed opacity-50" disabled>Previous</button>
            <button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-sm transition-colors">Next</button>
          </div>
        </div>
      </div>
    </main>
  );
}