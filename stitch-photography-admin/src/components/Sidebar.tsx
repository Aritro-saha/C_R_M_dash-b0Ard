"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Overview", href: "/", icon: "grid_view" },
    { name: "Portfolio", href: "/portfolio", icon: "image" },
    { name: "Client Galleries", href: "/galleries", icon: "group" },
    { name: "Messages", href: "/messages", icon: "chat_bubble" },
    { name: "Payments", href: "/payments", icon: "payments" },
    { name: "Content", href: "/content", icon: "notes" },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-[280px] z-50 bg-surface-container-low flex flex-col py-8 pl-6 pr-0 hidden md:flex border-r border-outline-variant/10">
      <div className="mb-10 pr-6">
        <h1 className="font-headline font-extrabold text-lg text-on-surface tracking-tight">
          The Gallery Curator
        </h1>
        <p className="font-body text-xs text-on-surface-variant mt-1 uppercase tracking-widest">
          Admin Terminal
        </p>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto pr-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium group transition-colors ${
                isActive
                  ? "bg-primary-container text-on-primary-container relative before:content-[''] before:absolute before:left-0 before:top-1/4 before:h-1/2 before:w-[3px] before:bg-primary before:rounded-r-full"
                  : "text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] ${
                  isActive ? "text-primary" : "group-hover:text-primary transition-colors"
                }`}
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-8 border-t border-outline-variant/10 pr-6 space-y-2">
        <Link
          href="/help"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium group"
        >
          <span className="material-symbols-outlined text-[22px]">help</span>
          <span className="text-sm">Help Center</span>
        </Link>
        <Link
          href="/sign-out"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high transition-colors font-medium group"
        >
          <span className="material-symbols-outlined text-[22px]">logout</span>
          <span className="text-sm">Sign Out</span>
        </Link>
      </div>
    </nav>
  );
}
