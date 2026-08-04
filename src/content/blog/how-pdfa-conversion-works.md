---
title: "How Client-Side PDF/A Conversion Works"
description: "A deep dive into browser-based PDF parsing, sRGB ICC profile injection, and ISO 19005 compliance verification."
pubDate: 2026-08-04
author: "PDFAfy Engineering"
readTime: "7 min read"
tags: ["Architecture", "Engineering", "PDF/A", "WebAssembly"]
featured: false
---

Most online file conversion tools upload user documents to remote cloud servers, run server-side tools (like Ghostscript or pdf2pdfa), and stream the output back. While effective, this model creates data privacy risks and server latency.

PDFAfy takes a different approach: **100% Client-Side In-Browser Conversion**. Here is a technical breakdown of how our engine transforms PDFs into ISO-compliant PDF/A files directly inside your browser memory session.

---

## The 4-Step Conversion Pipeline

### Step 1: Binary Buffer Parsing
When you select a file, the browser reads its ArrayBuffer into local JavaScript memory. Our parser analyzes the `%PDF-` header, xref cross-reference tables, and indirect object dictionary catalog without uploading a single byte to external servers.

### Step 2: XMP Metadata Packet Injection
ISO 19005 requires a valid XML XMP metadata packet embedded at `/Catalog /Metadata`. PDFAfy generates and injects structured RDF metadata containing:
- `pdfaid:part` (1, 2, or 3)
- `pdfaid:conformance` (B)
- Synchronized `dc:title`, `dc:creator`, and `dc:description` matching the PDF Information dictionary.

### Step 3: sRGB OutputIntent & Color Space Mapping
To eliminate device-dependent color ambiguities, PDFAfy embeds a standardized 3,144-byte **sRGB IEC61966-2.1 ICC Profile** stream into the document catalog under `/OutputIntents` (`GTS_PDFA1`).

### Step 4: Object Sanitization & Font Embedding
Our sanitizer iterates through all indirect document dictionaries:
- Sets the `/F 4` (Print flag) on all Annotation dictionaries (`/Annot`, `/Link`, `/Widget`).
- Attaches embedded TrueType binary font streams (`/FontFile2`) and `/CIDSet` streams for missing font descriptors.
- Enforces transparency rules for PDF/A-1b or builds transparency page groups (`/Group`) for PDF/A-2b.
