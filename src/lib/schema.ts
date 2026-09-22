/**
 * JSON-LD builder — دونوں زبانوں کے صفحے ایک ہی entity (Faisal Masjid, Islamabad) بیان کرتے ہیں۔
 * @id جان بوجھ کر ڈومین کی جڑ پر رکھا گیا ہے تاکہ اردو اور انگریزی ورژن نالج گراف میں ایک ہی نوں پر مرکوز رہیں۔
 */
import { govtTourismUrl, photos, siteMeta } from '../data/site';
import type { FaqItem } from '../data/faq';

const DESCRIPTION = `Comprehensive visitor guide to ${siteMeta.englishName} (${siteMeta.latinName}) in ${siteMeta.cityLatin}, ${siteMeta.regionLatin}, ${siteMeta.countryLatin}: history, architecture, visiting hours, free entry, dress code, transport and map.`;

/** TouristAttraction + Mosque اسکیما (صفحے کے مکمل URL کے ساتھ) */
export function buildAttractionSchema(pageUrl: string | undefined) {
  const rootUrl = pageUrl ?? `https://${siteMeta.name}`;
  const base = rootUrl.endsWith('/') ? rootUrl : `${rootUrl}/`;
  const root = base.includes('/en/') ? base.replace(/\/en\/$/, '/') : base;
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Mosque'],
    '@id': `${root}#attraction`,
    name: siteMeta.latinName,
    alternateName: [
      siteMeta.attractionName,
      siteMeta.alternateName,
      siteMeta.officialName,
      siteMeta.englishName,
      `${siteMeta.cityLatin} ${siteMeta.latinName}`,
      `${siteMeta.city} ${siteMeta.attractionName}`,
    ],
    description: DESCRIPTION,
    url: base,
    image: [photos.hero.src, photos.courtyard.src, photos.night.src],
    isAccessibleForFree: true,
    telephone: siteMeta.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMeta.streetAddress,
      addressLocality: siteMeta.cityLatin,
      addressRegion: siteMeta.regionLatin,
      postalCode: siteMeta.postalCode,
      addressCountry: siteMeta.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteMeta.latitude,
      longitude: siteMeta.longitude,
    },
    hasMap: siteMeta.mapsShareUrl,
    sameAs: [siteMeta.mapsShareUrl, govtTourismUrl, 'https://en.wikipedia.org/wiki/Faisal_Mosque'],
    containedInPlace: {
      '@type': 'AdministrativeArea',
      name: siteMeta.regionLatin,
      containedInPlace: { '@type': 'Country', name: siteMeta.countryLatin },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteMeta.rating,
      reviewCount: siteMeta.reviewCount,
      bestRating: 5,
    },
  };
}

/** FAQPage اسکیما — نظر آنے والے سوالات اور structured data ایک ہی ذریعے سے */
export function buildFaqSchema(items: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** BreadcrumbList — جغرافیائی تدرج (ملک › علاقہ › شہر › مقام) */
export function buildBreadcrumbSchema(pageUrl: string | undefined, trail: { name: string; url?: string }[]) {
  if (!pageUrl) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      ...(entry.url ? { item: entry.url } : {}),
    })),
  };
}
