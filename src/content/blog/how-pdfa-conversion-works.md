---
title: "How PDF/A Conversion Works Under the Hood"
description: "A deep dive into the technical mechanics of PDF/A conversion: XMP metadata injection, OutputIntents, and stream sanitization."
pubDate: 2026-08-04
author: "PDFAfy Engineering"
readTime: "5 min read"
tags: ["Technical", "PDF/A", "Under The Hood", "Engineering"]
featured: false
---

# How PDF/A Conversion Works Under the Hood

When you upload a document to PDFAfy, a sophisticated sequence of PDF parsing and metadata transformations takes place directly in your browser session.

---

## The 4-Stage Conversion Pipeline

1. **Syntax Parsing & Stream Inspection**:
   The input PDF binary stream is loaded. Encryption flags, external font references, and non-conforming interactive form fields or JavaScript actions are analyzed.

2. **Font Subset & Unicode Verification**:
   The font catalog is checked. Font descriptor dictionaries are updated with embedding flags, and Unicode mapping tables (ToUnicode CMaps) are appended.

3. **sRGB OutputIntent Injection**:
   An OutputIntent dictionary specifying `sRGB IEC61966-2.1` as the target color space is registered in the PDF Catalog (`/OutputIntents`).

4. **ISO XMP Packet Assembly**:
   An XML metadata stream containing `pdfaid:part` (1, 2, or 3) and `pdfaid:conformance` ('B') is serialized and appended to the catalog, completing ISO 19005 compliance.
