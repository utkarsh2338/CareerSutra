"use client"

import { SignInButton, useUser } from '@clerk/nextjs';

export default function HeroContent() {
  const { isSignedIn } = useUser();

  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10"></span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic instrument">CareerSutra</span> 
          <br />
          <span className="font-light tracking-tight text-white">AI Powered Personalied Career Advisor</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Unlock your true potential with CareerSathi! Sign up today and explore AI-powered personalized roadmaps designed exclusively for your success..
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Pricing
          </button>
          {isSignedIn ? (
            <button
              className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
              onClick={() => window.location.href = '/'}
            >
              Get Started
            </button>
          ) : (
            <SignInButton mode="modal">
              <button className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer">
                Get Started
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </main>
  );
}

