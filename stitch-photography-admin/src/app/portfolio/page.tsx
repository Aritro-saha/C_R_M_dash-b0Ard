"use client";

import React, { useState } from 'react';

const INITIAL_PROJECTS = [
  {
    id: 1,
    title: "The Amalfi Coast Elopement",
    category: "Wedding",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoZes0jZw77G33ziwmjjqTTIe2yPn5gLCzNvKUsDFkV3PKAEa7lq2h1qatk6msV7RJNOOmwekyuEUsbXtrx70qfSmY9Hj7WOMFZdgyZHE7-ujUoJ2r09aINy9RdQumJP6PMVp1hx2IQSU2-_awyI8SuQ3ItbwpxReT0wuoMHRy67E0vTDYizQaM88WRZfsYB_wCSbTtnJ0NBU5rP8DbPq67p4CxJq50uoGVVJPwqrH4jrSSKBxPc7tWrUfRmF8eTvrZsTOYuQ1dOM",
    large: true,
  },
  {
    id: 2,
    title: "Night Resonance",
    category: "Events",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD_9IWsjUx-21T9WU9GPkyX5ZdEDsMiU14AKIZSKt-wb1YHG8hACk1kKsjFL9PG1ewXC7Vmn-qxnR4d78QkQ3W3qXEXZeMXvTezlTfx3Gpw51IrHx6Qwp5Ix3wmprYDPW_9XM6e-ufqggWCli7A4JqIO0t6SDh1k2GaW2LCt3jmD8dE_fQbDG13FjMuS2zY2LNPenV9SCDuHCTAvZAV6c7Ub1fJl1W4YYv8UKeowmWkciYKemeFl8x0gignVMKckJYjyQgf67SSwek",
  },
  {
    id: 3,
    title: "Urban Minimalism",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Vogue Editorial",
    category: "Portrait",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  },
];

const CATEGORIES = ["All Work", "Wedding", "Events", "Portrait", "Commercial"];

export default function PortfolioPage() {
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [isUploading, setIsUploading] = useState(false);

  const filteredProjects = activeCategory === "All Work" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploading(true);
      // Simulate upload
      setTimeout(() => {
        const newProject = {
          id: Date.now(),
          title: "New Uploaded Project",
          category: activeCategory === "All Work" ? "Portrait" : activeCategory,
          image: URL.createObjectURL(file),
          large: false
        };
        setProjects([newProject, ...projects]);
        setIsUploading(false);
      }, 1500);
    }
  };

  return (
    <div className="pt-24 pb-12 px-6 md:px-12 max-w-7xl mx-auto min-h-full w-full">
      {/* Page Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-2">Portfolio Workspace</h2>
          <p className="font-body text-sm text-on-surface-variant">Manage and curate your public galleries.</p>
        </div>
        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all whitespace-nowrap border ${
                activeCategory === cat 
                ? "bg-surface-container-lowest text-on-surface shadow-sm border-outline-variant/20" 
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-highest border-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className={`group relative rounded-2xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-500 ${
              project.large ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <img 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src={project.image} 
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Hover Actions */}
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <button 
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-on-surface flex items-center justify-center hover:bg-white hover:text-primary transition-colors shadow-lg"
                title="Edit Details"
              >
                <span className="material-symbols-outlined text-[20px]">edit</span>
              </button>
              <button 
                onClick={() => handleDelete(project.id)}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur text-error flex items-center justify-center hover:bg-error-container hover:text-on-error-container transition-colors shadow-lg"
                title="Delete"
              >
                <span className="material-symbols-outlined text-[20px]">delete</span>
              </button>
            </div>

            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-white">
              <span className="text-[10px] font-headline font-bold uppercase tracking-[0.2em] bg-primary/80 px-2 py-1 rounded backdrop-blur-sm mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="font-headline font-bold text-xl leading-tight">{project.title}</h3>
            </div>
          </div>
        ))}

        {/* Add New Project Card */}
        <label className="group relative rounded-2xl overflow-hidden bg-surface-container-low border-2 border-dashed border-outline-variant/30 hover:border-primary/50 hover:bg-surface-container transition-all cursor-pointer flex flex-col items-center justify-center text-center p-8">
          <input type="file" className="hidden" onChange={handleFileUpload} accept="image/*" />
          
          {isUploading ? (
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
              <span className="font-headline font-medium text-primary">Uploading...</span>
            </div>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-primary">add_a_photo</span>
              </div>
              <span className="font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Add New Project</span>
              <p className="font-body text-xs text-on-surface-variant mt-2 max-w-[150px]">Upload high-res images to your portfolio</p>
            </>
          )}
        </label>
      </div>
      
      <div className="h-24"></div>
    </div>
  );
}
