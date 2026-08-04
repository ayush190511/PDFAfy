import React from 'react';
import type { ConversionResult } from '../utils/pdfaConverter';
import { Download, RotateCcw, CheckCircle2, ShieldCheck, FileText, Lock } from 'lucide-react';

interface ResultCardProps {
  result: ConversionResult;
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result, onReset }) => {
  const handleDownload = () => {
    const blob = new Blob([result.pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = result.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-[#ebebeb] p-6 sm:p-8 shadow-md space-y-6">
      {/* Compliance Badge Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ebebeb]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg text-[#171717]">Conversion Successful</h3>
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                ISO Compliant
              </span>
            </div>
            <p className="text-xs text-[#888888]">Your document has been converted and verified for long-term archiving.</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onReset}
            className="px-4 py-2 text-xs font-medium rounded-full border border-[#ebebeb] text-[#4d4d4d] hover:text-[#171717] hover:bg-[#fafafa] transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Convert Another
          </button>
          <button
            onClick={handleDownload}
            className="px-5 py-2 text-xs font-semibold rounded-full bg-[#171717] text-white hover:bg-[#333333] transition-colors flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            Download PDF/A
          </button>
        </div>
      </div>

      {/* File & Compliance Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* File Specs */}
        <div className="p-4 rounded-xl bg-[#fafafa] border border-[#ebebeb] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-[#888888] uppercase">File Details</span>
            <FileText className="w-4 h-4 text-[#888888]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[#171717] truncate font-mono">{result.fileName}</div>
            <div className="text-xs text-[#4d4d4d] mt-1 flex items-center gap-3 font-mono">
              <span>Original: {formatSize(result.originalSize)}</span>
              <span>→</span>
              <span className="font-semibold text-emerald-700">Archival: {formatSize(result.convertedSize)}</span>
            </div>
          </div>
        </div>

        {/* Standard Verification Specs */}
        <div className="p-4 rounded-xl bg-[#fafafa] border border-[#ebebeb] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-medium text-[#888888] uppercase">ISO Standard Profile</span>
            <ShieldCheck className="w-4 h-4 text-[#0070f3]" />
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-[#888888]">Standard:</span>
              <span className="font-mono font-semibold text-[#171717]">{result.standard} ({result.complianceDetails.isoStandard})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#888888]">Color Profile:</span>
              <span className="font-mono text-[#171717]">{result.complianceDetails.colorProfile}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#888888]">XMP Metadata:</span>
              <span className="font-mono text-emerald-700 font-medium">Validated & Embedded</span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Guarantee Banner */}
      <div className="p-3 rounded-lg bg-[#f5f5f5] border border-[#ebebeb] flex items-center justify-between text-xs text-[#888888]">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-[#171717]" />
          <span>Processed 100% locally in your browser. No files are stored or uploaded to cloud servers.</span>
        </div>
        <span className="font-mono text-[10px] text-[#4d4d4d] hidden sm:inline">100% Private</span>
      </div>
    </div>
  );
};
