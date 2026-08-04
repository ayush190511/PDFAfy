---
title: "PDF/A-1 vs PDF/A-2 vs PDF/A-3: Which Standard Should You Choose?"
description: "A comprehensive breakdown of PDF/A-1b, PDF/A-2b, and PDF/A-3b conformance standards to help you choose the right format."
pubDate: 2026-08-03
author: "PDFAfy Standards Committee"
readTime: "6 min read"
tags: ["PDF/A-1", "PDF/A-2", "PDF/A-3", "ISO Standards"]
featured: true
---

The ISO 19005 family has evolved over the years to balance strict archival compliance with modern document features. Understanding the distinctions between **PDF/A-1**, **PDF/A-2**, and **PDF/A-3** ensures you pick the exact specification required for your organization's workflow.

---

## Detailed Breakdown of ISO PDF/A Standards

<div class="space-y-10 my-12 not-prose">

  <!-- PDF/A-1 Card Block -->
  <div class="p-8 rounded-3xl bg-[#fafafa] dark:bg-[#121212] border border-[#ebebeb] dark:border-[#262626] space-y-4 shadow-xs">
    <div class="flex items-center justify-between">
      <span class="px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#171717] dark:bg-[#f5f5f5] text-white dark:text-[#0a0a0a]">
        PDF/A-1
      </span>
      <span class="text-xs font-mono text-[#888888]">ISO 19005-1:2005 (PDF 1.4)</span>
    </div>

    <h3 class="text-xl font-bold text-[#171717] dark:text-[#f5f5f5]">
      1. PDF/A-1: The Foundational Archival Standard
    </h3>

    <p class="text-sm text-[#4d4d4d] dark:text-[#a3a3a3] leading-relaxed">
      Based on PDF version 1.4, PDF/A-1 is the original foundational standard released in 2005. It was created to solve the fundamental problem of unembedded fonts and uncalibrated colors.
    </p>

    <div class="pt-2 space-y-2 text-xs text-[#4d4d4d] dark:text-[#a3a3a3]">
      <div class="flex items-start gap-2">
        <span class="font-bold text-[#171717] dark:text-[#f5f5f5]">• PDF/A-1b (Basic):</span>
        <span>Focuses strictly on visual reproducibility across readers.</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="font-bold text-[#171717] dark:text-[#f5f5f5]">• PDF/A-1a (Accessible):</span>
        <span>Requires logical reading structure and tagged elements.</span>
      </div>
      <div class="flex items-start gap-2 text-amber-700 dark:text-amber-400 font-medium pt-1">
        <span>⚠️ Limitation:</span>
        <span>Does not support transparency (alpha channels), JPEG2000 compression, or layers.</span>
      </div>
    </div>
  </div>

  <!-- PDF/A-2 Card Block -->
  <div class="p-8 rounded-3xl bg-[#fafafa] dark:bg-[#121212] border border-[#0070f3]/40 dark:border-[#0070f3]/50 ring-1 ring-[#0070f3]/20 space-y-4 shadow-xs">
    <div class="flex items-center justify-between">
      <span class="px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#0070f3] text-white">
        PDF/A-2
      </span>
      <span class="text-xs font-mono text-[#0070f3] font-semibold">ISO 19005-2:2011 (PDF 1.7) — Most Popular</span>
    </div>

    <h3 class="text-xl font-bold text-[#171717] dark:text-[#f5f5f5]">
      2. PDF/A-2: Modern Features & Transparency Support
    </h3>

    <p class="text-sm text-[#4d4d4d] dark:text-[#a3a3a3] leading-relaxed">
      Based on PDF version 1.7, PDF/A-2 modernized the specification to accommodate advanced graphic design elements without compromising archival integrity.
    </p>

    <div class="pt-2 space-y-2.5 text-xs text-[#4d4d4d] dark:text-[#a3a3a3]">
      <div class="flex items-start gap-2">
        <span class="font-bold text-[#0070f3]">✓ Transparency Support:</span>
        <span>Allows drop shadows, opacity blending, and vector graphic effects.</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="font-bold text-[#0070f3]">✓ Layer Support (OCG):</span>
        <span>Essential for CAD drawings, architectural blueprints, and multilingual documents.</span>
      </div>
      <div class="flex items-start gap-2">
        <span class="font-bold text-[#0070f3]">✓ JPEG2000 & PDF Embedding:</span>
        <span>Smaller file sizes and ability to embed PDF/A sub-documents.</span>
      </div>
    </div>
  </div>

  <!-- PDF/A-3 Card Block -->
  <div class="p-8 rounded-3xl bg-[#fafafa] dark:bg-[#121212] border border-[#ebebeb] dark:border-[#262626] space-y-4 shadow-xs">
    <div class="flex items-center justify-between">
      <span class="px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#50e3c2] text-[#0a0a0a]">
        PDF/A-3
      </span>
      <span class="text-xs font-mono text-[#888888]">ISO 19005-3:2012 (PDF 1.7) — E-Invoicing</span>
    </div>

    <h3 class="text-xl font-bold text-[#171717] dark:text-[#f5f5f5]">
      3. PDF/A-3: Hybrid Document Attachments & E-Invoicing
    </h3>

    <p class="text-sm text-[#4d4d4d] dark:text-[#a3a3a3] leading-relaxed">
      PDF/A-3 retains all features of PDF/A-2 while introducing the ability to embed arbitrary non-PDF file attachments (e.g., XML spreadsheets, CSV data, CAD source files) directly inside the PDF container.
    </p>

    <div class="pt-2 space-y-2 text-xs text-[#4d4d4d] dark:text-[#a3a3a3]">
      <div class="flex items-start gap-2">
        <span class="font-bold text-emerald-700 dark:text-emerald-400">⚡ Primary Use Case:</span>
        <span>Electronic invoicing standards like <strong>ZUGFeRD</strong> and <strong>Factur-X</strong> (human-readable PDF + machine-readable XML data).</span>
      </div>
    </div>
  </div>

</div>

---

## Practical Selection Guide

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-12 not-prose">
  <div class="p-6 rounded-2xl bg-[#fafafa] dark:bg-[#121212] border border-[#ebebeb] dark:border-[#262626] space-y-2">
    <div class="flex items-center justify-between">
      <span class="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#171717] dark:bg-[#f5f5f5] text-white dark:text-[#0a0a0a]">PDF/A-1b</span>
      <span class="text-xs text-[#888888]">ISO 19005-1</span>
    </div>
    <h4 class="font-semibold text-base text-[#171717] dark:text-[#f5f5f5]">Legacy Statutory Submissions</h4>
    <p class="text-xs text-[#4d4d4d] dark:text-[#a3a3a3] leading-relaxed">Best for statutory filings that explicitly require strict ISO 19005-1 compliance without transparency.</p>
  </div>

  <div class="p-6 rounded-2xl bg-[#fafafa] dark:bg-[#121212] border border-[#0070f3]/40 dark:border-[#0070f3]/50 ring-1 ring-[#0070f3]/20 space-y-2">
    <div class="flex items-center justify-between">
      <span class="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-[#0070f3] text-white">PDF/A-2b</span>
      <span class="text-xs text-[#0070f3] font-semibold">Recommended</span>
    </div>
    <h4 class="font-semibold text-base text-[#171717] dark:text-[#f5f5f5]">Business, Legal & Contracts</h4>
    <p class="text-xs text-[#4d4d4d] dark:text-[#a3a3a3] leading-relaxed">Optimal for standard business documents, contracts, blueprints, and graphics with transparency and layers.</p>
  </div>
</div>

---

## Which Standard Does PDFAfy Use?

PDFAfy allows you to convert to **PDF/A-1b**, **PDF/A-2b**, or **PDF/A-3b** with a single click. For 95% of modern business workflows, **PDF/A-2b** is recommended as the optimal balance of compatibility, design integrity, and performance.
