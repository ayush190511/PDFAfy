import React, { useEffect, useState } from 'react';
import { Upload, ShieldCheck, Sun, Moon, ArrowUp } from 'lucide-react';

export const FloatingBar: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Sync theme with html.dark class
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();

    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    // 2. Scroll visibility listener: show ONLY when scrolled down > 200px
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pdfafy-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pdfafy-theme', 'light');
    }
  };

  const scrollToTopOrUpload = () => {
    const uploadEl = document.getElementById('upload-zone');
    if (uploadEl) {
      uploadEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <aside
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
          : 'translate-y-16 opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/90 dark:bg-[#121212]/90 backdrop-blur-xl border border-[#ebebeb] dark:border-[#262626] shadow-xl text-xs font-mono text-[#171717] dark:text-[#f5f5f5]">
        {/* ISO Standard Status */}
        <div className="flex items-center gap-2 pr-2 border-r border-[#ebebeb] dark:border-[#262626]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-semibold">ISO 19005 Ready</span>
        </div>

        {/* Quick Upload Action Button */}
        <button
          onClick={scrollToTopOrUpload}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#171717] dark:bg-[#f5f5f5] text-white dark:text-[#0a0a0a] font-medium hover:bg-[#333333] dark:hover:bg-[#e5e5e5] transition-colors cursor-pointer shadow-xs"
        >
          <Upload className="w-3.5 h-3.5" />
          <span>Upload PDF</span>
        </button>

        {/* Quick Theme Switcher */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          className="w-7 h-7 rounded-full bg-[#fafafa] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#262626] flex items-center justify-center text-[#171717] dark:text-[#f5f5f5] hover:bg-[#f5f5f5] dark:hover:bg-[#262626] transition-colors cursor-pointer"
        >
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-[#f5a623]" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-[#171717]" />
          )}
        </button>

        {/* Privacy Security Indicator */}
        <div className="hidden sm:flex items-center gap-1 text-[11px] text-[#888888] dark:text-[#a3a3a3] pl-1">
          <ShieldCheck className="w-3.5 h-3.5 text-[#50e3c2]" />
          <span>100% Client Private</span>
        </div>

        {/* Scroll Top Icon */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-7 h-7 rounded-full bg-[#fafafa] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#262626] flex items-center justify-center text-[#888888] hover:text-[#171717] dark:hover:text-[#f5f5f5] transition-colors cursor-pointer ml-1"
          title="Scroll to Top"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
