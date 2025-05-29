
"use client";

import { useState, useEffect } from 'react';

// Default to a common mobile breakpoint (e.g., 768px for tablets and below)
const MOBILE_BREAKPOINT = 768;

export function useIsMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    // Ensure window is defined (runs only on client-side)
    if (typeof window === 'undefined') {
      return;
    }

    const checkDevice = () => {
      setIsMobileView(window.innerWidth < breakpoint);
    };

    // Initial check
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, [breakpoint]);

  return isMobileView;
}
