"use client"


import Header from "@/components/header"
import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ShaderShowcase() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/home');
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <ShaderBackground>
      <Header />
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
  );
}
