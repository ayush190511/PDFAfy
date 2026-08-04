import React from 'react';
import type { PDFAStandard } from '../utils/pdfaConverter';
import { Info, Check } from 'lucide-react';

interface StandardSelectorProps {
  selected: PDFAStandard;
  onChange: (standard: PDFAStandard) => void;
  disabled?: boolean;
}

const standards: { id: PDFAStandard; name: string; subtitle: string; description: string; badge: string }[] = [
  {
    id: 'PDF/A-2b',
    name: 'PDF/A-2b',
    subtitle: 'ISO 19005-2 (Recommended)',
    description: 'Supports device-independent colors, layers, transparency, and JPEG2000 images. Optimal for standard business documents.',
    badge: 'Popular',
  },
  {
    id: 'PDF/A-1b',
    name: 'PDF/A-1b',
    subtitle: 'ISO 19005-1 (Legacy)',
    description: 'Basic visual preservation based on PDF 1.4. Guarantees consistent visual output across all legacy archival systems.',
    badge: 'Standard',
  },
  {
    id: 'PDF/A-3b',
    name: 'PDF/A-3b',
    subtitle: 'ISO 19005-3 (E-Invoicing)',
    description: 'Allows embedding arbitrary file attachments (e.g. XML spreadsheets, ZUGFeRD / Factur-X e-invoices) directly in the PDF.',
    badge: 'Advanced',
  },
];

export const StandardSelector: React.FC<StandardSelectorProps> = ({ selected, onChange, disabled }) => {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-mono font-medium uppercase tracking-wider text-[#4d4d4d] dark:text-[#a3a3a3] flex items-center gap-1.5">
          <span>Target ISO Standard</span>
          <Info className="w-3.5 h-3.5 text-[#888888] dark:text-[#737373]" />
        </label>
        <span className="text-xs font-mono text-[#888888] dark:text-[#737373]">100% Validated</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {standards.map((std) => {
          const isSelected = selected === std.id;
          return (
            <button
              key={std.id}
              type="button"
              disabled={disabled}
              onClick={() => onChange(std.id)}
              className={`text-left p-3.5 rounded-xl border transition-all text-xs relative flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'border-[#171717] dark:border-[#f5f5f5] bg-[#fafafa] dark:bg-[#171717] ring-1 ring-[#171717] dark:ring-white shadow-xs'
                  : 'border-[#ebebeb] dark:border-[#262626] bg-white dark:bg-[#121212] hover:border-[#a1a1a1] dark:hover:border-[#404040] hover:bg-[#fafafa]/50 dark:hover:bg-[#171717]/50'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-[#171717] dark:text-[#f5f5f5] font-mono">{std.name}</span>
                  {isSelected && (
                    <div className="w-4 h-4 rounded-full bg-[#171717] dark:bg-[#f5f5f5] text-white dark:text-[#0a0a0a] flex items-center justify-center">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                  )}
                </div>
                <div className="text-[11px] font-mono text-[#888888] dark:text-[#a3a3a3] mb-2">{std.subtitle}</div>
                <p className="text-[11px] text-[#4d4d4d] dark:text-[#a3a3a3] leading-normal">{std.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
