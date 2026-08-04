export function generateSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'PDFAfy',
    'url': 'https://pdfafy.com',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'Any',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'description': 'Convert PDF files into ISO 19005-compliant PDF/A documents online for long-term archiving.',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.95',
      'ratingCount': '1240'
    },
    'featureList': [
      'PDF to PDF/A-1b conversion',
      'PDF to PDF/A-2b conversion',
      'PDF to PDF/A-3b conversion',
      'Client-side privacy architecture',
      'Drag and drop upload',
      'Instant verification and download'
    ]
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `https://pdfafy.com${item.url}`
    }))
  };
}
