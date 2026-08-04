import React, { useState, useRef, useCallback } from 'react';
import { StandardSelector } from './StandardSelector';
import { ProgressTracker } from './ProgressTracker';
import { ResultCard } from './ResultCard';
import { convertToPDFA, type PDFAStandard, type ConversionProgress, type ConversionResult } from '../utils/pdfaConverter';
import { Upload, FileText, Shield, AlertCircle, Check } from 'lucide-react';

export const UploadZone: React.FC = () => {
  const [, setFile] = useState<File | null>(null);
  const [selectedStandard, setSelectedStandard] = useState<PDFAStandard>('PDF/A-2b');
  const [progress, setProgress] = useState<ConversionProgress | null>(null);
  const [result, setResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (inputFile: File, standard: PDFAStandard) => {
    if (!inputFile.name.toLowerCase().endsWith('.pdf')) {
      setError('Please select a valid PDF file (.pdf format).');
      return;
    }

    if (inputFile.size > 150 * 1024 * 1024) {
      setError('File size exceeds the 150MB browser limit.');
      return;
    }

    setError(null);
    setFile(inputFile);
    setResult(null);

    try {
      const res = await convertToPDFA(inputFile, standard, (prog) => {
        setProgress(prog);
      });
      setResult(res);
    } catch (err: any) {
      setError(err?.message || 'Failed to process PDF conversion.');
    }
  }, []);

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      processFile(droppedFile, selectedStandard);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      processFile(selectedFile, selectedStandard);
    }
  };

  const handleReset = () => {
    setFile(null);
    setProgress(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div id="upload-zone" className="w-full max-w-4xl mx-auto space-y-6">
      {/* If conversion completed, show Result Card */}
      {result ? (
        <ResultCard result={result} onReset={handleReset} />
      ) : progress ? (
        /* If actively processing, show Progress Tracker */
        <ProgressTracker progress={progress} />
      ) : (
        /* Main Upload & Standard Selector Form */
        <div className="space-y-6">
          {/* Standard Selector Component */}
          <StandardSelector
            selected={selectedStandard}
            onChange={(std) => setSelectedStandard(std)}
          />

          {/* Drag & Drop Upload Zone */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleFileDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`w-full p-8 sm:p-12 rounded-2xl border-2 border-dashed transition-all duration-200 cursor-pointer text-center relative overflow-hidden group ${
              isDragging
                ? 'border-[#171717] bg-[#fafafa] ring-4 ring-[#171717]/10'
                : 'border-[#ebebeb] bg-white hover:border-[#a1a1a1] hover:bg-[#fafafa]/50'
            }`}
          >
            {/* Subtle Gradient Glow in background */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0070f3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            <input
              type="file"
              ref={fileInputRef}
              accept=".pdf,application/pdf"
              onChange={handleFileSelect}
              className="hidden"
            />

            <div className="flex flex-col items-center justify-center space-y-4 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-[#fafafa] border border-[#ebebeb] flex items-center justify-center text-[#171717] group-hover:scale-110 group-hover:bg-[#171717] group-hover:text-white transition-all shadow-xs">
                <Upload className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-[#171717] tracking-tight">
                  Drag & Drop your PDF here, or <span className="underline decoration-1 underline-offset-4 font-medium text-[#0070f3]">browse</span>
                </h3>
                <p className="text-xs text-[#888888]">
                  Supports large files up to 150MB • ISO 19005 Compliant Output
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-[11px] font-mono text-[#888888]">
                <span className="flex items-center gap-1 bg-[#fafafa] px-2.5 py-1 rounded-full border border-[#ebebeb]">
                  <Shield className="w-3 h-3 text-[#50e3c2]" />
                  Zero Storage
                </span>
                <span className="flex items-center gap-1 bg-[#fafafa] px-2.5 py-1 rounded-full border border-[#ebebeb]">
                  <Check className="w-3 h-3 text-[#0070f3]" />
                  Auto Validation
                </span>
                <span className="flex items-center gap-1 bg-[#fafafa] px-2.5 py-1 rounded-full border border-[#ebebeb]">
                  <FileText className="w-3 h-3 text-[#171717]" />
                  {selectedStandard} Output
                </span>
              </div>
            </div>
          </div>

          {/* Error Message Alert */}
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
