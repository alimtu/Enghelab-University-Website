'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-7 lg:left-12 left-6 bg-[#0CC0BA] text-white p-3 rounded-full transition-all cursor-pointer z-50"
        aria-label="Back to top"
      >
        <ChevronUp />
      </button>
    )
  );
}
