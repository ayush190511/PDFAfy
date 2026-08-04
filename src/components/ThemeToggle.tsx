import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Sync state directly with documentElement class
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkDark();

    // Observe changes to html class attribute
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
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

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-9 h-9 rounded-full bg-[#fafafa] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#333333] flex items-center justify-center text-[#171717] dark:text-[#f5f5f5] hover:bg-[#f5f5f5] dark:hover:bg-[#262626] transition-all cursor-pointer shadow-xs"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-[#f5a623] transition-transform rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#171717] transition-transform rotate-0 hover:-rotate-12" />
      )}
    </button>
  );
};
