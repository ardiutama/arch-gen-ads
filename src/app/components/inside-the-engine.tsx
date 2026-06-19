"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  UploadCloud, 
  Cpu, 
  Code, 
  FileText, 
  ShieldAlert,
  ChevronDown,
  Sparkles
} from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  // Absolute positions on desktop screenshot (percentages)
  x: string; 
  y: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Smart Architect Tool",
    description: "Upload references and extract architectural DNA.",
    icon: UploadCloud,
    x: "13%",
    y: "43%",
  },
  {
    id: 2,
    title: "AI Analysis",
    description: "Automatically detects design language, massing, materials, and spatial characteristics.",
    icon: Cpu,
    x: "13%",
    y: "78%",
  },
  {
    id: 3,
    title: "JSON Payload",
    description: "Structured architectural data ready for downstream processing.",
    icon: Code,
    x: "45%",
    y: "55%",
  },
  {
    id: 4,
    title: "Final Prompt",
    description: "Production-ready prompts optimized for AI visualization workflows.",
    icon: FileText,
    x: "81%",
    y: "35%",
  },
  {
    id: 5,
    title: "Negative Filter",
    description: "Built-in quality control to reduce unwanted visual artifacts.",
    icon: ShieldAlert,
    x: "81%",
    y: "75%",
  },
];

export default function InsideTheEngine() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [expandedMobileCard, setExpandedMobileCard] = useState<number | null>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="engine"
      ref={sectionRef}
      className="relative px-6 py-24 overflow-hidden bg-bg-primary border-t border-border-subtle"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -top-40 right-10 w-[400px] h-[400px] bg-brand-gold/3 rounded-full blur-[100px]" />

      <div className="mx-auto max-w-[1400px] relative z-10">
        
        {/* Section Header */}
        <div 
          className={`mb-16 text-center transition-all duration-700 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-gold mb-4">
            <Sparkles className="h-3.5 w-3.5" /> Proof of Capability
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Inside <span className="text-brand-gold">The Engine</span>
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-text-secondary text-base sm:text-lg">
            See how ARCH-GEN analyzes architectural references and generates production-ready prompts.
          </p>
        </div>

        {/* Main Interface Layout */}
        <div
          className={`transition-all duration-1000 ease-out delay-150 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* DESKTOP VIEW: Center Image with pulsing hotspots and floating cards */}
          <div className="hidden lg:block relative min-h-[640px] xl:min-h-[750px] mb-8">
            
            {/* The centered application frame */}
            <div className="max-w-5xl mx-auto relative z-10">
              <div className="rounded-2xl border border-border-subtle bg-bg-primary overflow-hidden shadow-[0_0_60px_rgba(212,163,115,0.06)] shadow-2xl">
                
                {/* Browser Title Bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-subtle bg-bg-secondary/60 backdrop-blur-sm select-none">
                  {/* Window Control Buttons */}
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56] opacity-80" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E] opacity-80" />
                    <div className="h-3 w-3 rounded-full bg-[#27C93F] opacity-80" />
                  </div>
                  {/* Browser Tab URL */}
                  <div className="text-xs font-semibold text-text-secondary bg-bg-primary border border-border-subtle/40 px-6 py-1 rounded-md tracking-wide max-w-[280px] truncate">
                    arch-gen.indovma.com/dashboard
                  </div>
                  {/* Empty right block to balance flex */}
                  <div className="w-14" />
                </div>

                {/* Screenshot Image Container */}
                <div className="relative aspect-[21/9.5] w-full bg-slate-950">
                  <img
                    src="/engine-screenshot.png"
                    alt="ARCH-GEN Application Interface"
                    className="w-full h-full object-cover select-none"
                    draggable="false"
                  />
                  
                  {/* Interactive Hotspots Overlay */}
                  {features.map((feature, index) => {
                    const isActive = activeFeature === feature.id;
                    const Icon = feature.icon;
                    return (
                      <button
                        key={feature.id}
                        onMouseEnter={() => setActiveFeature(feature.id)}
                        onMouseLeave={() => setActiveFeature(null)}
                        onClick={() => setActiveFeature(isActive ? null : feature.id)}
                        className="absolute group flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-30 transition-all duration-300 focus:outline-none"
                        style={{ top: feature.x, left: feature.y }}
                      >
                        {/* Outer Glow Ring */}
                        <span 
                          className={`absolute w-12 h-12 rounded-full transition-all duration-300 ${
                            isActive 
                              ? "bg-brand-gold/30 scale-110" 
                              : "bg-brand-gold/10 scale-90 group-hover:scale-100 group-hover:bg-brand-gold/20"
                          }`}
                        />
                        {/* Pulsing Ring */}
                        <span className="absolute w-8 h-8 rounded-full bg-brand-gold/40 animate-ping" />
                        {/* Core Button */}
                        <span 
                          className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${
                            isActive 
                              ? "bg-brand-gold border-brand-gold-light text-bg-primary scale-110 shadow-lg shadow-brand-gold/40" 
                              : "bg-bg-primary/95 border-brand-gold/60 text-brand-gold group-hover:bg-brand-gold group-hover:border-brand-gold-light group-hover:text-bg-primary"
                          }`}
                        >
                          <span className="text-xs font-bold">{feature.id}</span>
                        </span>

                        {/* Interactive Rich Tooltip (For standard desktop screens that don't fit absolute cards) */}
                        <div 
                          className={`absolute bottom-full mb-3 w-64 p-4 rounded-xl border border-border-subtle bg-bg-secondary/95 backdrop-blur-md transition-all duration-200 origin-bottom pointer-events-none shadow-2xl xl:hidden ${
                            isActive 
                              ? "opacity-100 scale-100 translate-y-0" 
                              : "opacity-0 scale-95 translate-y-2"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1.5">
                            <Icon className="h-4.5 w-4.5 text-brand-gold" />
                            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">{feature.title}</h4>
                          </div>
                          <p className="text-xs text-text-secondary leading-relaxed font-sans">{feature.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* FLOATING CARDS (Visible only on XL screens for maximum design aesthetics) */}
            <div className="hidden xl:block">
              {features.map((feature) => {
                const isActive = activeFeature === feature.id;
                const Icon = feature.icon;
                
                // Absolute positions of cards on layout based on feature ID
                let cardStyle: React.CSSProperties = {};
                if (feature.id === 1) cardStyle = { top: "6%", left: "4%" };
                else if (feature.id === 2) cardStyle = { bottom: "16%", left: "3%" };
                else if (feature.id === 3) cardStyle = { bottom: "2%", left: "50%", transform: "translateX(-50%)" };
                else if (feature.id === 4) cardStyle = { top: "2%", right: "4%" };
                else if (feature.id === 5) cardStyle = { bottom: "18%", right: "3%" };

                return (
                  <div
                    key={feature.id}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onMouseLeave={() => setActiveFeature(null)}
                    style={cardStyle}
                    className={`absolute z-20 w-[280px] p-5 rounded-2xl border transition-all duration-300 bg-bg-card/50 backdrop-blur-md select-none ${
                      isActive
                        ? "border-brand-gold bg-bg-card/85 translate-y-[-4px] shadow-xl shadow-brand-gold/5"
                        : "border-border-subtle hover:border-brand-gold/40 hover:bg-bg-card/75"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                        isActive ? "bg-brand-gold text-bg-primary" : "bg-brand-gold/10 text-brand-gold"
                      }`}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-sm font-bold tracking-tight text-text-primary">
                        {feature.id}. {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TABLET VIEW: Callouts stacked in a clean grid below the screenshot */}
          <div className="hidden md:block xl:hidden max-w-5xl mx-auto mt-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="p-5 rounded-xl border border-border-subtle bg-bg-card/40 transition-all hover:border-brand-gold/30 hover:bg-bg-card/60"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-sm font-bold text-text-primary">
                        {feature.id}. {feature.title}
                      </h3>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed font-sans">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* MOBILE VIEW: Screenshot followed by collapsible feature cards (accordions) */}
          <div className="block md:hidden">
            {/* Screenshot in a simple container */}
            <div className="rounded-xl border border-border-subtle bg-bg-primary overflow-hidden shadow-lg mb-8">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border-subtle bg-bg-secondary/40">
                <div className="h-2.5 w-2.5 rounded-full bg-border-subtle" />
                <div className="h-2.5 w-2.5 rounded-full bg-border-subtle" />
                <div className="h-2.5 w-2.5 rounded-full bg-border-subtle" />
              </div>
              <div className="bg-slate-950">
                <img
                  src="/engine-screenshot.png"
                  alt="ARCH-GEN Interface Mobile"
                  className="w-full object-cover"
                />
              </div>
            </div>

            {/* Collapsible Accordions */}
            <div className="space-y-2">
              {features.map((feature) => {
                const isOpen = expandedMobileCard === feature.id;
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.id}
                    className="rounded-xl border border-border-subtle bg-bg-card/30 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setExpandedMobileCard(isOpen ? null : feature.id)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-semibold text-text-primary">
                          {feature.id}. {feature.title}
                        </span>
                      </div>
                      <ChevronDown className={`h-4 w-4 text-text-secondary transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-gold" : ""
                      }`} />
                    </button>
                    
                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-border-subtle/40 pt-3 bg-bg-card/10">
                        <p className="text-xs text-text-secondary leading-relaxed font-sans">
                          {feature.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
