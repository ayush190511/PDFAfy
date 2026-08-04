import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Initial theme check
    const savedTheme = localStorage.getItem('pdfafy-theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('pdfafy-theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle dark mode"
      className="w-9 h-9 rounded-full bg-[#fafafa] dark:bg-[#1f1f1f] border border-[#ebebeb] dark:border-[#333333] flex items-center justify-center text-[#171717] dark:text-[#f5f5f5] hover:bg-[#f5f5f5] dark:hover:bg-[#262626] transition-all cursor-pointer shadow-xs"
    >
      {theme === 'light' ? (
        <Moon className="w-4 h-4 text-[#171717] transition-transform rotate-0 hover:-rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-[#f5a623] transition-transform rotate-0 hover:rotate-45" />
      )}
    </button>
  );
};
