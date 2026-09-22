/**
 * واحد ذریعہ: فیصل مسجد (اسلام آباد) سے متعلق تمام زبان سے آزاد حقائق۔
 * قیمتیں، فون، نقاط، درجہ بندی یا روابط بدلنے کے لیے صرف اسی فائل میں ترمیم کریں۔
 */

/** SEO سائٹ کا نام: "مقام کا نام + شہر + سیاحتی رہنما" یکساں ساخت کے مطابق۔ */
export const SITE_NAME = 'فیصل مسجد اسلام آباد — سیاحتی رہنما';
export const SITE_NAME_LATIN = 'Faisal Masjid Islamabad — Visitor Guide';

/** ذیلی صفحات کے عنوان کے ساتھ سائٹ کا نام جوڑنے کا معاون فنکشن۔ */
export const withSiteName = (suffix: string) => `${suffix} | ${SITE_NAME}`;

export const siteMeta = {
  /** اصل ڈومین کا مطلب / عام استعمال ہونے والا نام */
  name: 'فیصل مسجد رہنما',
  /** اردو میں مقام کا نام */
  attractionName: 'فیصل مسجد',
  /** متبادل / سرکاری طرز کا نام */
  alternateName: 'شاہ فیصل مسجد',
  /** لاطینی/انگریزی میں مقام کا نام (نالج گراف اینکرنگ کے لیے) */
  latinName: 'Faisal Masjid',
  officialName: 'Shah Faisal Mosque',
  englishName: 'Faisal Mosque',
  /** شہر */
  city: 'اسلام آباد',
  cityLatin: 'Islamabad',
  /** صوبہ / وفاقی علاقہ */
  region: 'اسلام آباد کیپیٹل ٹیریٹری',
  regionLatin: 'Islamabad Capital Territory',
  /** ملک */
  country: 'پاکستان',
  countryLatin: 'Pakistan',
  countryCode: 'PK',
  postalCode: '44000',
  streetAddress: 'Shah Faisal Ave, E-8',
  address: 'شاہ فیصل ایونیو، سیکٹر E-8، اسلام آباد 44000، پاکستان',
  /** گوگل پلس کوڈ */
  plusCode: 'P2HP+XV اسلام آباد، پاکستان',
  /** عوامی فہرست میں درج رابطہ نمبر */
  phone: '+92 51 2854860',
  phoneHref: 'tel:+92512854860',
  latitude: 33.7299,
  longitude: 73.0372,
  rating: 4.7,
  reviewCount: 74289,
  gaId: 'G-HXM22WWPKP',
  /** گوگل نقشہ کا شیئر لنک (hasMap / sameAs) */
  mapsShareUrl: 'https://maps.app.goo.gl/wE3fcsHKGqjRnXiu5',
  /** گوگل نقشہ کا ایمبیڈ src */
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5910.524596272336!2d73.03464407734857!3d33.72992217328024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbefce01e6917%3A0x3e66e0de3e2598c0!2z6LS56JCo5bCU5riF55yf5a-6!5e1!3m2!1sur!2spk!4v1787566007308!5m2!1sur!2spk',
} as const;

/** آس پاس کے بنیادی نشانات (معنوی جھرمٹ کے لیے) */
export const nearbyLandmarks = {
  primary: 'مارگلہ ہلز نیشنل پارک',
  secondary: 'پاکستان مونومنٹ و میوزیم',
} as const;

/** سرکاری / ادارہ جاتی سیاحتی پورٹل (GOVT_TOURISM_URL) */
export const govtTourismUrl = 'https://tourism.gov.pk/';

/** بیرونی ماخذ — E-E-A-T کے لیے حقیقی اور قابلِ تصدیق روابط */
export const sources = [
  {
    label: 'کیپٹل ڈویلپمنٹ اتھارٹی (CDA) — اسلام آباد',
    href: 'https://www.cda.gov.pk/',
    note: 'شہری انتظام، فیصل مسجد کی دیکھ بھال اور مقامی سہولت سے متعلق عوامی مواد۔',
  },
  {
    label: 'کیپٹل ماس ٹرانزٹ — فیڈر روٹ FR-03A',
    href: 'https://www.cda.gov.pk/metro',
    note: 'پی آئی ایم ایس میٹرو اسٹیشن ↔ فیصل مسجد پبلک ٹرانسپورٹ روٹ کی سرکاری معلومات۔',
  },
  {
    label: 'پاکستان ٹورزم ڈویلپمنٹ کارپوریشن (PTDC)',
    href: 'https://tourism.gov.pk/',
    note: 'اسلام آباد اور آس پاس کے سیاحتی مقامات کے لیے سرکاری سیاحتی پورٹل۔',
  },
  {
    label: 'قومی اسمبلی پاکستان — عوامی دستاویزات',
    href: 'https://na.gov.pk/',
    note: 'مسجد کی دیکھ بھال اور ادارہ جاتی ذمہ داری سے متعلق سرکاری ریکارڈ۔',
  },
  {
    label: 'وکی پیڈیا — Faisal Mosque',
    href: 'https://en.wikipedia.org/wiki/Faisal_Mosque',
    note: 'ڈیزائن مقابلہ، معمار ویدات دالوکے، تعمیر کا دورانیہ اور معماری کی تفصیل۔',
  },
  {
    label: 'گوگل نقشہ — فیصل مسجد کی عوامی فہرست',
    href: 'https://maps.app.goo.gl/wE3fcsHKGqjRnXiu5',
    note: 'پتہ، پلس کوڈ، عمومی اوقات اور مجموعی زائرین کی درجہ بندی (تازہ تصدیق ضروری)۔',
  },
] as const;

/** فوٹر میں دکھائے جانے والے مختصر ماخذ روابط */
export const sourceLinks = [
  { label: 'کیپٹل ڈویلپمنٹ اتھارٹی — اسلام آباد', href: 'https://www.cda.gov.pk/' },
  { label: 'کیپٹل ماس ٹرانزٹ — سرکاری روٹ معلومات', href: 'https://www.cda.gov.pk/metro' },
  { label: 'پاکستان ٹورزم ڈویلپمنٹ کارپوریشن', href: 'https://tourism.gov.pk/' },
  { label: 'قومی اسمبلی پاکستان — عوامی دستاویزات', href: 'https://na.gov.pk/' },
] as const;

export const photos = {
  hero: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Faisal_Mosque_islamabad_01.jpg/1280px-Faisal_Mosque_islamabad_01.jpg',
    alt: 'فیصل مسجد اسلام آباد — مارگلہ پہاڑیوں کے سامنے سفید خیمہ نما مرکزی ہال اور چار مینار کا مرکزی منظر، پاکستان',
    credit: 'فواد جاوید (Fawad4real) · CC BY-SA 4.0 · Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Faisal_Mosque_islamabad_01.jpg',
  },
  courtyard: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Shah_Faisal_Mosque_Courtyard%2C_Islamabad.jpg/1280px-Shah_Faisal_Mosque_Courtyard%2C_Islamabad.jpg',
    alt: 'فیصل مسجد، اسلام آباد — کشادہ صحن، سفید پتھر اور مرکزی عبادت گاہ',
    credit: 'منصور بشیر (BurgerBuoy) · CC BY-SA 4.0 · Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Shah_Faisal_Mosque_Courtyard,_Islamabad.jpg',
  },
  interior: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/The_Quran_at_Faisal_Mosque_main_hall.jpg/1280px-The_Quran_at_Faisal_Mosque_main_hall.jpg',
    alt: 'فیصل مسجد، اسلام آباد — مرکزی ہال کا اندرونی منظر اور قرآنی خطاطی',
    credit: 'Mrfaisal007 · CC BY-SA 3.0 · Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:The_Quran_at_Faisal_Mosque_main_hall.jpg',
  },
  night: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Faisal_Mosque_islamabad_11.jpg/1280px-Faisal_Mosque_islamabad_11.jpg',
    alt: 'رات کے وقت روشن فیصل مسجد، اسلام آباد — چار مینار اور خیمہ نما چھت',
    credit: 'فواد جاوید (Fawad4real) · CC BY-SA 4.0 · Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Faisal_Mosque_islamabad_11.jpg',
  },
  dusk: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Faisal_Mosque_islamabad_16.jpg/1280px-Faisal_Mosque_islamabad_16.jpg',
    alt: 'شام کی سنہری روشنی میں فیصل مسجد، اسلام آباد',
    credit: 'فواد جاوید (Fawad4real) · CC BY-SA 4.0 · Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Faisal_Mosque_islamabad_16.jpg',
  },
} as const;
