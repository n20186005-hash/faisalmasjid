/**
 * عام سوالات — اردو اور انگریزی دونوں زبانوں میں ایک ہی ترتیب۔
 * ہر زبان کے صفحے پر یہی سوالات FAQPage JSON-LD اور نظر آنے والے حصے دونوں میں استعمال ہوتے ہیں،
 * اس لیے متن اور structured data میں کبھی تضاد نہیں ہوتا۔
 */

export interface FaqItem {
  q: string;
  a: string;
}

export const faqUr: FaqItem[] = [
  {
    q: 'کیا فیصل مسجد میں داخلے کے لیے ٹکٹ درکار ہے؟',
    a: 'عام طور پر مسجد میں داخلہ مفت ہے اور سیاحتی ٹکٹ درکار نہیں۔ تاہم نماز، جمعہ، رمضان، عید یا سکیورٹی انتظامات کے دوران بعض حصوں تک رسائی محدود ہو سکتی ہے۔',
  },
  {
    q: 'غیر مسلم زائرین مسجد دیکھ سکتے ہیں؟',
    a: 'عمومی طور پر باادب سیاح مسجد کے بیرونی حصوں اور دستیاب اندرونی حصوں کا مشاہدہ کر سکتے ہیں، لیکن مرکزی عبادت گاہ میں رسائی نماز اور انتظامی ہدایات کے مطابق بدل سکتی ہے۔ موقع پر موجود عملے اور سکیورٹی کی ہدایات کو ترجیح دیں۔',
  },
  {
    q: 'لباس کے بارے میں کیا احتیاط ضروری ہے؟',
    a: 'کندھوں اور ٹانگوں کو ڈھانپنے والا سادہ اور باوقار لباس مناسب ہے۔ خواتین کے لیے سر ڈھانپنا احتراماً بہتر اور بعض اوقات ضروری سمجھا جاتا ہے۔ عبادت گاہ میں داخل ہونے سے پہلے جوتے اتارے جاتے ہیں۔',
  },
  {
    q: 'دورے کے لیے کتنا وقت رکھنا چاہیے؟',
    a: 'فنِ تعمیر، صحن، اندرونی حصے اور تصویری مشاہدے کے لیے تقریباً 60 سے 90 منٹ ایک مناسب عملی مدت ہے۔ جمعہ یا نماز کے اوقات میں اضافی وقت رکھیں۔',
  },
  {
    q: 'بہترین وقت کون سا ہے؟',
    a: 'نسبتاً پرسکون سیاحتی مشاہدے کے لیے عام دفتری دنوں کی صبح یا عصر سے پہلے کا وقت موزوں رہتا ہے۔ غروبِ آفتاب کے قریب عمارت اور مارگلہ پہاڑیوں کی روشنی خاص طور پر خوبصورت ہوتی ہے، مگر نماز کے اوقات کا احترام ضروری ہے۔',
  },
  {
    q: 'کیا پارکنگ اور بیت الخلا موجود ہیں؟',
    a: 'مسجد کے احاطے اور قریب پارکنگ کی جگہیں اور وضو/بیت الخلا کی سہولیات موجود رہتی ہیں، مگر جمعہ، رمضان اور بڑے اجتماعات میں گنجائش اور رسائی بدل سکتی ہے۔ صفائی اور کھلے حصوں کی حالت بھی وقت کے ساتھ مختلف ہو سکتی ہے۔',
  },
  {
    q: 'پبلک ٹرانسپورٹ سے کیسے پہنچیں؟',
    a: 'سی ڈی اے کے شائع شدہ فیڈر روٹ FR-03A میں پی آئی ایم ایس ہسپتال/میٹرو اسٹیشن اور فیصل مسجد شامل ہیں۔ روٹ اور فریکوئنسی میں تبدیلی ممکن ہے، اس لیے روانگی سے پہلے سرکاری کیپٹل ماس ٹرانزٹ معلومات یا ایپ سے تازہ شیڈول دیکھیں۔',
  },
  {
    q: 'کیا مسجد میں فوٹوگرافی کی اجازت ہے؟',
    a: 'بیرونی فنِ تعمیر کی فوٹوگرافی عام سیاحتی سرگرمی ہے، مگر عبادت کرنے والوں کی پرائیویسی، سکیورٹی نشان دہی اور موقع پر موجود ہدایات کا احترام کریں۔ اندرونی حصوں میں فلیش، ٹرائی پوڈ یا مخصوص زاویوں پر پابندی ہو سکتی ہے۔',
  },
  {
    q: 'فیصل مسجد کا مکمل پتہ، پلس کوڈ اور رابطہ نمبر کیا ہے؟',
    a: 'پتہ: شاہ فیصل ایونیو، سیکٹر E-8، اسلام آباد 44000، پاکستان۔ گوگل پلس کوڈ: P2HP+XV اسلام آباد، پاکستان۔ عوامی فہرست میں درج رابطہ نمبر: +92 51 2854860۔ نقاط برائے راستہ: 33.7299, 73.0372۔',
  },
  {
    q: 'کیا فیصل مسجد شام یا رات کے وقت بھی دیکھی جا سکتی ہے؟',
    a: 'غروبِ آفتاب اور رات کی روشنی میں مسجد کا سفید خیمہ نما خاکہ اور چار مینار خاص طور پر نمایاں ہوتے ہیں۔ تاہم عصر، مغرب اور عشاء کی نماز کے اوقات اور سکیورٹی انتظامات کے مطابق کھلے حصوں تک رسائی بدل سکتی ہے؛ رات کے دورے سے پہلے مقامی ٹریفک اور روشنی کا خیال رکھیں۔',
  },
];

export const faqEn: FaqItem[] = [
  {
    q: 'Is there an entry fee or ticket for Faisal Mosque in Islamabad?',
    a: 'Entry to Faisal Mosque is generally free and no tourist ticket is required. During prayer times, Friday prayers, Ramadan, Eid or special security arrangements, access to some sections can be restricted.',
  },
  {
    q: 'What are the visiting hours of Faisal Mosque?',
    a: 'Faisal Mosque is a working mosque, so it follows the daily prayer schedule rather than fixed ticketed opening hours. In practice, respectful visits are possible during most daylight hours; verify on the day, especially around Friday prayers and Ramadan.',
  },
  {
    q: 'Can non-Muslim visitors visit Faisal Mosque?',
    a: 'Yes. Respectful visitors of all backgrounds can usually see the exterior courtyards and the parts of the interior that are open at the time. Access to the main prayer hall varies with prayer times and on-site instructions — always follow staff and security guidance.',
  },
  {
    q: 'What is the dress code for visiting Faisal Mosque?',
    a: 'Wear simple, modest clothing that covers shoulders and legs. Women are advised — and sometimes required — to cover their heads. Shoes are removed before entering the prayer hall.',
  },
  {
    q: 'How much time should I plan for a visit?',
    a: 'Around 60 to 90 minutes is a practical window for the architecture, courtyards, interior and photography. Allow extra time on Fridays or during prayer hours.',
  },
  {
    q: 'What is the best time of day to visit?',
    a: 'Weekday mornings or the period before Asr tend to be calmer for sightseeing. Around sunset the white tent-like roof and the Margalla Hills backdrop are at their most photogenic, as long as prayer times are respected.',
  },
  {
    q: 'How do I reach Faisal Mosque by public transport, and is parking available?',
    a: 'CDA feeder route FR-03A links PIMS Hospital / Metro Station with Faisal Mosque; routes and frequency can change, so check the official Capital Mass Transit information before departure. Taxis and ride-hailing are widely used, and general parking is available in and around the complex, though capacity drops on Fridays and during major gatherings.',
  },
  {
    q: 'Is photography allowed inside Faisal Mosque?',
    a: 'Photography of the exterior architecture is a normal visitor activity. Respect the privacy of worshippers, avoid security installations and follow on-site instructions; flash, tripods or specific angles may be restricted inside.',
  },
  {
    q: 'What is the exact address, plus code and phone number of Faisal Mosque?',
    a: 'Shah Faisal Ave, Sector E-8, Islamabad 44000, Pakistan. Google Plus Code: P2HP+XV Islamabad, Pakistan. Publicly listed phone: +92 51 2854860. Coordinates: 33.7299, 73.0372.',
  },
  {
    q: 'Can Faisal Mosque be visited in the evening or at night?',
    a: 'Yes — after sunset the illuminated white shell and four minarets are especially striking. Access to open areas still varies with Asr, Maghrib and Isha prayers and with security arrangements, so check local traffic and lighting before a night visit.',
  },
  {
    q: 'Are restrooms, ablution facilities and wheelchair access available?',
    a: 'Ablution and restroom facilities are available within the complex, and much of the broad courtyard is level, but some routes, level changes or steps may need assistance. Confirm the accessible route on site before travelling.',
  },
];
