import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Gallery Curator",
  description: "Photography Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Manrope:wght@500;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body bg-surface text-on-surface">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-[280px] min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

