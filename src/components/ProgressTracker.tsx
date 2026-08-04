import React from 'react';
import type { ConversionProgress } from '../utils/pdfaConverter';
import { UploadCloud, CheckCircle2, ShieldCheck, FileCheck, Loader2 } from 'lucide-react';

interface ProgressTrackerProps {
  progress: ConversionProgress;
}

const steps = [
  { id: 'uploading', label: 'Upload PDF', icon: UploadCloud },
  { id: 'validating', label: 'Validate Input', icon: FileCheck },
  { id: 'converting', label: 'Convert to PDF/A', icon: Loader2 },
  { id: 'verifying', label: 'Verify Compliance', icon: ShieldCheck },
  { id: 'completed', label: 'Download', icon: CheckCircle2 },
];

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  const getStepIndex = (step: ConversionProgress['step']) => {
    switch (step) {
      case 'uploading': return 0;
      case 'validating': return 1;
      case 'converting': return 2;
      case 'verifying': return 3;
      case 'completed': return 4;
      default: return 0;
    }
  };

  const currentIndex = getStepIndex(progress.step);

  return (
    <div className="w-full bg-white rounded-2xl border border-[#ebebeb] p-6 shadow-sm space-y-6">
      {/* Step Indicators */}
      <div className="grid grid-cols-5 gap-2 relative">
        {/* Connecting progress bar track */}
        <div className="absolute top-4 left-[10%] right-[10%] h-[2px] bg-[#ebebeb] -z-0">
          <div
            className="h-full bg-[#171717] transition-all duration-500 ease-out"
            style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {steps.map((step, idx) => {
          const isDone = idx < currentIndex || progress.step === 'completed';
          const isCurrent = idx === currentIndex && progress.step !== 'completed';
          const Icon = step.icon;

          return (
            <div key={step.id} className="flex flex-col items-center text-center z-10">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDone
                    ? 'bg-[#171717] text-white ring-4 ring-white shadow-xs'
                    : isCurrent
                    ? 'bg-white border-2 border-[#171717] text-[#171717] ring-4 ring-white shadow-xs'
                    : 'bg-[#fafafa] border border-[#ebebeb] text-[#888888]'
                }`}
              >
                {isCurrent && progress.step === 'converting' ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Icon className="w-4 h-4" />
                )}
              </div>
              <span
                className={`mt-2 text-[11px] font-medium transition-colors hidden sm:block ${
                  isDone || isCurrent ? 'text-[#171717]' : 'text-[#888888]'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress Bar & Status Text */}
      <div className="space-y-2 pt-2">
        <div className="flex items-center justify-between text-xs font-mono text-[#4d4d4d]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0070f3] animate-pulse"></span>
            {progress.message}
          </span>
          <span className="font-semibold text-[#171717]">{progress.progress}%</span>
        </div>

        <div className="w-full h-2 rounded-full bg-[#f5f5f5] overflow-hidden border border-[#ebebeb]">
          <div
            className="h-full bg-gradient-to-r from-[#171717] via-[#0070f3] to-[#50e3c2] transition-all duration-300 ease-out"
            style={{ width: `${progress.progress}%` }}
          />
        </div>

        {progress.detail && (
          <p className="text-[11px] font-mono text-[#888888] text-center pt-1">
            {progress.detail}
          </p>
        )}
      </div>
    </div>
  );
};
