// =============================================================================
// Roofing Knights: site content and business facts
// -----------------------------------------------------------------------------
// This is the ONE file to edit when new details arrive (email confirmation,
// hours, service area, project photos, more reviews, warranty terms, etc.).
// Anything with `placeholder: true` is shown on the site with a visible
// "Placeholder" / "Marcador de posición" mark. Do not invent facts here.
//
// UI strings (English and Spanish) live in src/copy.js. Keep facts here.
// =============================================================================

import logoWebp from './assets/logo.webp'
import logo512Webp from './assets/logo-512.webp'
import logo256Webp from './assets/logo-256.webp'
import logo256Png from './assets/logo-256.png'
import roofJobJpg from './assets/gallery/completed-shingle-roof.jpg'
import roofJobWebp from './assets/gallery/completed-shingle-roof.webp'

export const siteConfig = {
  brand: {
    name: 'Roofing Knights',
    legalName: 'Roofing Knights',
    logo: {
      webp: logoWebp,
      webp512: logo512Webp,
      webp256: logo256Webp,
      png256: logo256Png,
      alt: 'Roofing Knights logo: a knight’s helmet and armor over a blue roof, with the company name on a black shield',
    },
  },

  // Main line: BBB profile, CSLB record, existing site, and company flyer (Nov 25, 2026).
  phone: {
    display: '(800) 362-5997',
    tel: '+18003625997',
    label: 'main',
  },

  // Flyer marks this number with a WhatsApp icon, next to the 800 main line.
  // Also used as the local Los Angeles number. Source: company flyer, Nov 25, 2026.
  whatsapp: {
    display: '(213) 440-2978',
    tel: '+12134402978',
    waUrl: 'https://wa.me/12134402978',
  },

  // Published on the existing website https://roofingknightsca.com/contact/
  // Alexander is still confirming the contact email — easy to swap here.
  email: {
    address: 'roofingknights24@gmail.com',
    source: 'Existing website (roofingknightsca.com/contact/), pending confirmation',
    confirm: true,
  },

  // BBB listing (screenshot + live profile). CSLB lists the same suite with a
  // "WILLSHIRE" typo; this site uses the BBB / existing-website spelling.
  address: {
    line1: '626 Wilshire Blvd #410',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90017',
    zipFull: '90017-2915',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=626+Wilshire+Blvd+%23410%2C+Los+Angeles%2C+CA+90017',
  },

  social: {
    tiktok: {
      handle: '@roofing.knights',
      url: 'https://www.tiktok.com/@roofing.knights',
    },
    // Current public website (WordPress). Not linked as a CTA on this new site.
    existingWebsite: 'https://roofingknightsca.com/',
  },

  // Hours published on the BBB profile, retrieved Nov 25, 2026.
  // Saturday and Sunday were not listed — do not assume closed.
  // The existing WordPress site claims "24/7 Support"; that conflicts with
  // these hours, so this site does not claim 24/7.
  hours: {
    source: 'BBB profile, retrieved November 25, 2026',
    days: [
      { dayKey: 'monday', time: '8:00 AM – 5:00 PM', verified: true },
      { dayKey: 'tuesday', time: '8:00 AM – 5:00 PM', verified: true },
      { dayKey: 'wednesday', time: '8:00 AM – 5:00 PM', verified: true },
      { dayKey: 'thursday', time: '8:00 AM – 5:00 PM', verified: true },
      { dayKey: 'friday', time: '8:00 AM – 5:00 PM', verified: true },
      { dayKey: 'saturday', time: null, verified: false, placeholder: true },
      { dayKey: 'sunday', time: null, verified: false, placeholder: true },
    ],
  },

  // No published service-area list was found on BBB, CSLB, or the existing site.
  serviceArea: {
    placeholder: true,
  },

  bbb: {
    rating: 'A-',
    accredited: true,
    accreditedSince: 'October 17, 2025',
    businessStarted: 'March 27, 2024',
    entity: 'Corporation',
    url: 'https://www.bbb.org/us/ca/los-angeles/profile/roofing-contractors/roofing-knights-1216-1000035069',
    categories: ['Roofing Contractors', 'Residential Roofing'],
    // A BBB directory card and Alexander’s screenshot showed “A”.
    // The official profile (and the accredited category listing) show “A-”.
    // This site uses the official profile rating.
  },

  license: {
    number: '1120662',
    classification: 'C-39 Roofing',
    board: 'California Contractors State License Board',
    issued: 'May 10, 2024',
    expires: 'May 31, 2028',
    statusAsOf: 'November 25, 2026',
    status: 'Current and active',
    verifyUrl: 'https://www.cslb.ca.gov/1120662',
    sosEntityNumber: '6143179', // CA Secretary of State, from BBB
    // OWNER NOTE (not displayed on the site). CSLB page retrieved Nov 25, 2026
    // also says: “This registration may be suspended on 12/19/2026 for failure
    // to comply with one or more provisions of law.” Workers’ compensation
    // shows a cancellation date of 09/05/2026. Do not claim “bonded and
    // insured” until this is cleared. Confirm with the client before launch.
  },

  people: {
    ceo: {
      name: 'Ivette Banda',
      titleKey: 'ceo',
      source: 'BBB profile and CSLB personnel record',
    },
    rmo: {
      name: 'Noel Perez',
      titleKey: 'rmo',
      source: 'CSLB license record',
    },
  },

  // Service ids must match keys in src/copy.js (services.*).
  // Repair / replacement / installation: listed on roofingknightsca.com/services/.
  // Insurance + free consultation: company flyer, November 25, 2026.
  services: [
    { id: 'insurance', featured: true, verified: true, source: 'Company flyer, November 25, 2026' },
    { id: 'repair', featured: true, verified: true, source: 'roofingknightsca.com/services/' },
    { id: 'replacement', featured: true, verified: true, source: 'roofingknightsca.com/services/' },
    { id: 'installation', featured: true, verified: true, source: 'roofingknightsca.com/services/' },
    { id: 'inspections', featured: false, verified: false, placeholder: true },
  ],

  // Insurance offer from the Spanish company flyer (verbatim Spanish in copy.js).
  insuranceOffer: {
    source: 'Company flyer, November 25, 2026',
  },

  // First item is a real completed-job photo cropped from the flyer
  // (logo, text, and graphic bars removed). Additional slots are placeholders.
  projects: [
    {
      id: 'shingle-job-flyer',
      image: roofJobJpg,
      webp: roofJobWebp,
      verified: true,
      source: 'Company flyer, November 25, 2026',
    },
    { id: 'placeholder-2', placeholder: true },
    { id: 'placeholder-3', placeholder: true },
    { id: 'placeholder-4', placeholder: true },
    { id: 'placeholder-5', placeholder: true },
    { id: 'placeholder-6', placeholder: true },
  ],

  // Quotes from the BBB profile “Latest Reviews” (retrieved Nov 25, 2026).
  // A third review (Maria R, in Spanish) was not included: BBB name redaction
  // garbled the available text. Confirm the full wording before adding it.
  // Generic quotes on roofingknightsca.com were not used (no names, and the
  // “Roof Repair” blurb describes a replacement).
  reviews: [
    {
      id: 'bbb-marcfore13',
      name: 'marcFore13 F',
      text: 'I had a great experience with Knights Roofing. The team was professional, punctual, and communicated clearly throughout the entire project.',
      source: 'BBB',
      sourceUrl:
        'https://www.bbb.org/us/ca/los-angeles/profile/roofing-contractors/roofing-knights-1216-1000035069',
      verified: true,
    },
    {
      id: 'bbb-nancy-m',
      name: 'Nancy M',
      text: 'I am very satisfied with the repair of my house roof, this company was very helpful with the whole process from paperwork with questions and with all the process until it was approved and paid by my insurance company. I Would definitely recommend them they are very reliable and very professional.',
      source: 'BBB',
      sourceUrl:
        'https://www.bbb.org/us/ca/los-angeles/profile/roofing-contractors/roofing-knights-1216-1000035069',
      verified: true,
    },
    { id: 'placeholder-1', placeholder: true },
    { id: 'placeholder-2', placeholder: true },
  ],

  form: {
    // TODO: replace mailto with a real form backend (Formspree, Netlify Forms, etc.).
    method: 'mailto',
  },
}

export function formatAddress(includeZipFull = false) {
  const a = siteConfig.address
  const zip = includeZipFull ? a.zipFull : a.zip
  return `${a.line1}, ${a.city}, ${a.state} ${zip}`
}

export function mailtoQuote({ name, phone, email, address, service, message }) {
  const to = siteConfig.email.address
  const subject = encodeURIComponent('Quote request from roofingknights website')
  const lines = [
    `Name: ${name || ''}`,
    `Phone: ${phone || ''}`,
    `Email: ${email || ''}`,
    `Property address: ${address || ''}`,
    `Service: ${service || ''}`,
    '',
    message || '',
  ]
  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:${to}?subject=${subject}&body=${body}`
}
