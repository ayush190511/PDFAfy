---
title: "PDF/A-1 vs PDF/A-2 vs PDF/A-3: Which Standard Should You Choose?"
description: "A comprehensive breakdown of PDF/A-1b, PDF/A-2b, and PDF/A-3b conformance standards to help you choose the right format."
pubDate: 2026-08-03
author: "PDFAfy Standards Committee"
readTime: "6 min read"
tags: ["PDF/A-1", "PDF/A-2", "PDF/A-3", "ISO Standards"]
featured: true
---

# PDF/A-1 vs PDF/A-2 vs PDF/A-3: Which Standard Should You Choose?

The ISO 19005 family has evolved over the years to balance strict archival compliance with modern document features. Understanding the distinctions between **PDF/A-1**, **PDF/A-2**, and **PDF/A-3** ensures you pick the exact specification required for your organization's workflow.

---

## Breakdown of the ISO PDF/A Standards

### 1. PDF/A-1 (ISO 19005-1:2005)
Based on PDF version 1.4, PDF/A-1 is the original foundational standard released in 2005.

- **PDF/A-1a (Accessible)**: Requires logical structure, reading order, and tagged elements for screen readers.
- **PDF/A-1b (Basic)**: Focuses strictly on visual reproducibility.
- **Limitations**: Does not support transparency (alpha channels), JPEG2000 compression, or layers.

### 2. PDF/A-2 (ISO 19005-2:2011)
Based on PDF version 1.7, PDF/A-2 modernized the specification to accommodate advanced design elements.

- **Key Improvements**:
  - Supports **transparency** and opacity blending.
  - Supports **JPEG2000** image compression for smaller file sizes.
  - Allows **Optional Content Groups (Layers)**, crucial for CAD & engineering blueprints.
  - Enables embedding of other PDF/A compliant files within the document.
- **Conformance Levels**: PDF/A-2a (Accessible), PDF/A-2b (Basic), PDF/A-2u (Unicode).

### 3. PDF/A-3 (ISO 19005-3:2012)
Also based on PDF version 1.7, PDF/A-3 introduced a groundbreaking feature: **embedding non-PDF attachments**.

- **Key Innovation**: Allows embedding arbitrary file formats (e.g., XML data, CSV spreadsheets, CAD source files, Word documents) directly inside the PDF/A wrapper.
- **Primary Use Case**: Electronic invoicing standards like **ZUGFeRD** and **Factur-X**, where the PDF contains a human-readable invoice while embedding machine-readable XML data.

---

## Practical Decision Matrix

| Requirement | Recommended Standard |
| :--- | :--- |
| Legacy government mandates specifying ISO 19005-1 | **PDF/A-1b** |
| Standard business documents, contracts, vector art with transparency | **PDF/A-2b** (Most Popular & Versatile) |
| Electronic invoices (ZUGFeRD / Factur-X) requiring embedded XML | **PDF/A-3b** |
| Engineering blueprints with layer toggles | **PDF/A-2b** or **PDF/A-3b** |

---

## Which One Does PDFAfy Support?

PDFAfy allows you to convert to **PDF/A-1b**, **PDF/A-2b**, or **PDF/A-3b** with a single click. For most modern archiving workflows, **PDF/A-2b** is recommended as the optimal balance of compatibility and performance.
