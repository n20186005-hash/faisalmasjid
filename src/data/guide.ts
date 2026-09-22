/**
 * فیصل مسجد (اسلام آباد) کے لیے اضافی رہنمائی مواد — دونوں زبانوں میں۔
 * اصول: غیر منافع بخش، غیر تجارتی، قسم کے لحاظ سے غیر جانبدار (کوئی مخصوص کاروبار نہیں)۔
 * موسمی حقائق اسلام آباد کے طویل المدت ریکارڈ پر مبنی ہیں؛ کوئی بیرونی ایجنسی منسوب نہیں کی گئی۔
 */

export type Bi = { ur: string; en: string };

/* ───────────────────────── ۱) ربع سالانہ حکمتِ عملی ───────────────────────── */
export interface Quarterly {
  season: Bi;
  months: Bi;
  climate: Bi;
  advice: Bi;
  bestFor: Bi;
}
export const quarterly: Quarterly[] = [
  {
    season: { ur: 'موسمِ سرما (دسمبر–فروری)', en: 'Winter (Dec–Feb)' },
    months: { ur: 'دسمبر تا فروری', en: 'December to February' },
    climate: {
      ur: 'دن 12–18°C، صبح کا دھند اور کبھی کبھی دھواں آلودہ فضاء؛ دوپہر میں آسمان صاف اور روشن ہوتا ہے۔',
      en: 'Days 12–18°C, morning fog and occasional smog; afternoons are clear and bright.',
    },
    advice: {
      ur: 'صبح جلد نکلیں اور دھند چھٹنے کا انتظار کریں؛ گرم لباس رکھیں۔ دھواں آلودہ دنوں میں ماسک اور مختصر دورہ بہتر ہے۔',
      en: 'Start early and wait for the fog to lift; bring warm clothing. On smoggy days a mask and a shorter visit are wiser.',
    },
    bestFor: { ur: 'صاف دنوں میں فوٹوگرافی اور پرسکون سیر', en: 'Photography and calm walks on clear days' },
  },
  {
    season: { ur: 'بہار اور پیشگی گرما (مارچ–مئی)', en: 'Spring & pre-summer (Mar–May)' },
    months: { ur: 'مارچ تا مئی', en: 'March to May' },
    climate: {
      ur: '22–33°C کے درمیان نرم درجہ حرارت، مارگلہ پہاڑیوں پر سبزہ اور پرندوں کی بہار؛ مئی کے آخر سے گرمی بڑھتی ہے۔',
      en: 'Mild 22–33°C, green Margalla Hills and active birdlife; heat builds toward late May.',
    },
    advice: {
      ur: 'سال کا سب سے متوازن وقت: صبح یا دیر سہ پہر میں جائیں، پیدل راستوں اور پرندوں کا لطف لیں۔',
      en: 'The most balanced time of year: go in the morning or late afternoon and enjoy the trails and birdlife.',
    },
    bestFor: { ur: 'خاندانی سیر، نماز اور قدرتی مشاہدہ', en: 'Family visits, prayer and nature watching' },
  },
  {
    season: { ur: 'گرما اور مون سون (جون–ستمبر)', en: 'Summer & monsoon (Jun–Sep)' },
    months: { ur: 'جون تا ستمبر', en: 'June to September' },
    climate: {
      ur: 'جون–جولائی میں 38–42°C کی شدید گرمی؛ لیٹ جون سے ستمبر تک مون سون، شام کی گرج چمک اور ہریالی بھرے پہاڑ۔',
      en: 'Harsh 38–42°C in Jun–Jul; monsoon from late June to September with evening storms and green hills.',
    },
    advice: {
      ur: 'صرف صبح سویرے یا غروب کے قریب جائیں، پانی اور ٹوپی ساتھ رکھیں، دوپہر کی دھوپ سے پرہیز کریں۔',
      en: 'Visit only at dawn or near sunset, carry water and a hat, and avoid the midday sun.',
    },
    bestFor: { ur: 'ہریالی والے پہاڑوں کی فوٹوگرافی، شام کی سیر', en: 'Green-hill photography and evening walks' },
  },
  {
    season: { ur: 'خزاں (اکتوبر–نومبر)', en: 'Autumn (Oct–Nov)' },
    months: { ur: 'اکتوبر تا نومبر', en: 'October to November' },
    climate: {
      ur: '20–30°C کا سب سے پرسکون موسم، صاف نیلے آسمان، کم نمی اور تہواروں کا موسم۔',
      en: 'The most pleasant 20–30°C, clear blue skies, low humidity and the festival season.',
    },
    advice: {
      ur: 'سال کا بہترین مجموعی وقت: پورا دن نکالیں، ارد گرد کے مقامات بھی شامل کریں۔',
      en: 'The best overall window of the year: spend a full day and include the surrounding landmarks.',
    },
    bestFor: { ur: 'مکمل دن کا دورہ اور ارد گرد کی سیر', en: 'Full-day visits and surrounding sightseeing' },
  },
];

/* ─────────────── ۲) موسم، فضائی معیار اور قدرتی ماحول کا تجزیہ ─────────────── */
export const climateNature: { intro: Bi; points: { icon: string; title: Bi; body: Bi }[] } = {
  intro: {
    ur: 'یہ تجزیہ اسلام آباد کے طویل المدت موسمی ریکارڈ اور مقامی قدرتی ماحول پر مبنی ہے، تاکہ آپ مدتِ سفر کا اندازہ لگا سکیں۔',
    en: 'This analysis draws on Islamabad’s long-term climate record and the local natural environment, so you can estimate the best travel window.',
  },
  points: [
    {
      icon: '🌡️',
      title: { ur: 'موسمیاتی چکر', en: 'Climate pattern' },
      body: {
        ur: 'اسلام آباد کا موسم ذیلی استوائی ہے: گرمیاں طویل اور گرم، مون سون جون کے آخر سے ستمبر تک، اور سردیاں نرم مگر کبھی کبھی دھند والی۔ سالانہ درجہ حرارت تقریباً 2°C سے 42°C تک جاتا ہے۔',
        en: 'Islamabad has a subtropical climate: long hot summers, a monsoon from late June to September, and mild but sometimes foggy winters. Annual temperatures range from about 2°C to 42°C.',
      },
    },
    {
      icon: '🌫️',
      title: { ur: 'فضائی معیار', en: 'Air quality' },
      body: {
        ur: 'نومبر سے جنوری تک صبح کی دھند اور پرفضا آلودگی بڑھ سکتی ہے، خاص طور پر سستی ہوا میں۔ ان دنوں دورہ مختصر رکھیں اور حساس افراد ماسک استعمال کریں؛ دوپہر میں حالات عام طور پر بہتر ہو جاتے ہیں۔',
        en: 'From November to January, morning fog and particulate pollution can rise, especially in calm air. Keep visits short on those days and have sensitive travellers use a mask; afternoons usually improve.',
      },
    },
    {
      icon: '🐆',
      title: { ur: 'قدرتی ماحول اور حیاتیات', en: 'Nature & wildlife' },
      body: {
        ur: 'مسجد کے عقب میں مارگلہ ہلز نیشنل پارک ہے، جہاں پرندوں کی بہت سی اقسام، چھوٹے جنگلی جانور اور کبھی کبھی چیتے کے آثار ملتے ہیں۔ قریب ہی راول جھیل اور سیدپور گاؤں قدرتی اور ثقافتی مشاہدے کے لیے موزوں ہیں۔',
        en: 'Behind the mosque lies Margalla Hills National Park, home to many bird species, small mammals and occasional leopard signs. Nearby Rawal Lake and Saidpur Village are good for nature and cultural observation.',
      },
    },
    {
      icon: '💧',
      title: { ur: 'پانی اور سبز مشق', en: 'Water & green practice' },
      body: {
        ur: 'موسم گرما میں پانی کی کھپت زیادہ ہوتی ہے؛ اپنا بوتل ساتھ رکھیں اور عبادت گاہ کے احترام میں پانی اور کوڑا ضائع کرنے سے گریز کریں۔ بارش کے موسم میں نالیاں اور پگڈنڈیاں پھسلن والی ہو سکتی ہیں۔',
        en: 'Water use rises in summer; carry your own bottle and, out of respect for the place of worship, avoid waste. In the rainy season, drains and trails can be slippery.',
      },
    },
  ],
};

/* ─────────────── ۳) سفری تشکیل کے مطابق تجاویز ─────────────── */
export interface Plan {
  id: string;
  icon: string;
  title: Bi;
  summary: Bi;
  duration: Bi;
  tips: Bi[];
}
export const groupPlans: Plan[] = [
  {
    id: 'family',
    icon: '👨‍👩‍👧‍👦',
    title: { ur: 'خاندان (بچوں کے ساتھ)', en: 'Families with children' },
    summary: {
      ur: 'فراخ صحن بچوں کے لیے کشادہ ہے؛ مختصر، لچکدار دورہ رکھیں اور نماز کے اوقات کا احترام کریں۔',
      en: 'The broad courtyard suits children; keep the visit short and flexible, and respect prayer times.',
    },
    duration: { ur: '60–90 منٹ', en: '60–90 minutes' },
    tips: [
      { ur: 'صبح سویرے جائیں تاکہ گرمی اور ہجوم دونوں کم رہیں۔', en: 'Arrive early so both heat and crowds stay low.' },
      { ur: 'پانی، ٹوپی اور ہلکا اسنیکس ساتھ رکھیں؛ عبادت گاہ کے اندر کھانا نہ کھلائیں۔', en: 'Carry water, a hat and a light snack; do not eat inside the prayer hall.' },
      { ur: 'بچوں کو جوتے اتارنے اور شور نہ کرنے کی عادت دیں۔', en: 'Teach children to remove shoes and keep noise low.' },
      { ur: 'مسجد کے بعد قریبی شہری پارک یا سیدپور گاؤں کا آپشن رکھیں۔', en: 'After the mosque, keep a nearby city park or Saidpur Village as an option.' },
    ],
  },
  {
    id: 'photo',
    icon: '📷',
    title: { ur: 'فوٹوگرافی اور قدرت', en: 'Photography & nature' },
    summary: {
      ur: 'روشنی کا بہترین کھیل صبح اور غروب ہے؛ مارگلہ پہاڑیوں کے ساتھ سفید خیمہ نما ڈھانچہ زاویوں سے بھرا ہے۔',
      en: 'The best light is at dawn and sunset; the white tent-like structure against the Margalla Hills offers endless angles.',
    },
    duration: { ur: '2–3 گھنٹے', en: '2–3 hours' },
    tips: [
      { ur: 'سورج نکلنے یا ڈوبنے کے آس پاس کا وقت چنیں؛ نیلی گھڑی (blue hour) شہر کی روشنیوں کے لیے موزوں ہے۔', en: 'Pick the window around sunrise or sunset; blue hour suits the city lights.' },
      { ur: 'اندرونی خطاطی کی فلیش سے تصویر نہ بنائیں اور عبادت کرنے والوں کی پرائیویسی کا خیال رکھیں۔', en: 'Avoid flash on interior calligraphy and respect worshippers’ privacy.' },
      { ur: 'ٹرائی پوڈ اور ڈرون کے لیے مقامی ہدایات کی پابندی کریں (اندرونی حصوں میں اکثر ممنوع)۔', en: 'Follow local rules for tripods and drones (often prohibited indoors).' },
      { ur: 'مون سون میں سبز پہاڑ اور بادلوں کا امتزاج زبردست ہوتا ہے۔', en: 'In monsoon, green hills and clouds make a striking combination.' },
    ],
  },
  {
    id: 'accessible',
    icon: '♿',
    title: { ur: 'کم طاقت / رسائی پذیر سفر', en: 'Low-effort / accessible visit' },
    summary: {
      ur: 'صحن زیادہ تر ہموار ہے؛ گاڑی کو مرکزی دروازے کے قریب اتارنے اور بیٹھنے کی جگہوں کا انتظام کریں۔',
      en: 'The courtyard is mostly level; plan a drop-off near the main gate and seating along the way.',
    },
    duration: { ur: '45–60 منٹ', en: '45–60 minutes' },
    tips: [
      { ur: 'جمعہ، رمضان اور عید کے ہجوم سے پرہیز کریں؛ عام دنوں میں آرام سے گھومیں۔', en: 'Avoid Friday, Ramadan and Eid crowds; tour calmly on ordinary days.' },
      { ur: 'موقع پر قابلِ رسائی راستہ اور ریمپ کی تصدیق کر لیں۔', en: 'Confirm the accessible route and ramps on site.' },
      { ur: 'اپنا وہیل چیئر یا سہارا ساتھ رکھیں؛ سائے والی جگہیں ترجیح دیں۔', en: 'Bring your wheelchair or support; prefer shaded spots.' },
      { ur: 'پانی اور دوایاں سفری بیگ میں رکھیں۔', en: 'Keep water and medicines in your travel bag.' },
    ],
  },
];

/* ─────────────── ۴) عمومی راستے (نصف دن / پورا دن) ─────────────── */
export interface RouteStep { time: Bi; text: Bi; }
export interface Route { id: string; title: Bi; summary: Bi; steps: RouteStep[]; }
export const routes: Route[] = [
  {
    id: 'half',
    title: { ur: 'نصفِ دن کا راستہ', en: 'Half-day route' },
    summary: {
      ur: 'مسجد کے مرکزی حصے، صحن اور ایک قریبی نگاہ کا مقام — فٹ اور پرسکون۔',
      en: 'The mosque’s core, courtyard and one nearby viewpoint — compact and relaxed.',
    },
    steps: [
      { time: { ur: 'صبح 8:00', en: '8:00 AM' }, text: { ur: 'مرکزی دروازے سے داخلہ، بیرونی خیمہ نما ڈھانچہ کا مشاہدہ۔', en: 'Enter at the main gate and view the exterior tent-like structure.' } },
      { time: { ur: '8:30', en: '8:30' }, text: { ur: 'صحن اور (دستیاب ہو تو) اندرونی ہال کی سیر، خطاطی کا مشاہدہ۔', en: 'Walk the courtyard and, if open, the interior hall and calligraphy.' } },
      { time: { ur: '9:30', en: '9:30' }, text: { ur: 'مارگلہ کے نظارے والے زاویے سے تصویریں، پانی کا وقفہ۔', en: 'Photos from Margalla-view angles, then a water break.' } },
      { time: { ur: '10:00', en: '10:00' }, text: { ur: 'قریبی شہری علاقے میں ہلکا ناشتہ یا چائے (قسم کے لحاظ سے)۔', en: 'A light breakfast or tea in a nearby city area (by type, not a specific place).' } },
    ],
  },
  {
    id: 'full',
    title: { ur: 'پورے دن کا راستہ', en: 'Full-day route' },
    summary: {
      ur: 'مسجد کے ساتھ مارگلہ، سیدپور اور شام کو راول جھیل — اسلام آباد کا ایک پورا منظر۔',
      en: 'The mosque plus Margalla, Saidpur and Rawal Lake at sunset — a full Islamabad panorama.',
    },
    steps: [
      { time: { ur: 'صبح 8:00', en: '8:00 AM' }, text: { ur: 'فیصل مسجد: باہروں، صحن اور اندرونی حصہ (دستیابی کے مطابق)۔', en: 'Faisal Mosque: exterior, courtyard and interior as available.' } },
      { time: { ur: '10:00', en: '10:00' }, text: { ur: 'ڈiman-e-Koh یا مارگلہ ٹریل 3/5 سے پہاڑوں کا نظارہ۔', en: 'Daman-e-Koh or Margalla Trail 3/5 for hilltop views.' } },
      { time: { ur: '12:30', en: '12:30' }, text: { ur: 'سیدپور گاؤں میں ثقافتی وقفہ اور دوپہر کا کھانا (قسم کے لحاظ سے)۔', en: 'A cultural break at Saidpur Village and lunch by type.' } },
      { time: { ur: '3:00', en: '3:00 PM' }, text: { ur: 'پاکستان مونومنٹ اور میوزیم کا مختصر دورہ۔', en: 'A short visit to the Pakistan Monument & Museum.' } },
      { time: { ur: '5:30', en: '5:30 PM' }, text: { ur: 'شام کو راول جھیل کے اطراف پرسکون واک اور غروب۔', en: 'A calm lakeside walk and sunset at Rawal Lake.' } },
    ],
  },
];

/* ─────────────── ۵) زائرین کی سہولیات (قسم کے لحاظ سے غیر جانبدار) ─────────────── */
export interface Service { id: string; icon: string; title: Bi; body: Bi; }
export const visitorServices: Service[] = [
  {
    id: 'wc',
    icon: '🚻',
    title: { ur: 'وضو اور بیت الخلا', en: 'Ablution & restrooms' },
    body: {
      ur: 'مسجد کمپلیکس میں وضو اور بیت الخلا کی سہولیات موجود ہیں، مگر دستیابی اور صفائی ہجوم اور دیکھ بھال کے مطابق بدل سکتی ہے۔ عبادت کے اوقات سے پہلے استعمال کرنا آسان رہتا ہے۔',
      en: 'Ablution and restroom facilities are available within the complex, though availability and cleanliness vary with crowds and upkeep. Using them before prayer times is easier.',
    },
  },
  {
    id: 'parking',
    icon: '🅿️',
    title: { ur: 'پارکنگ', en: 'Parking' },
    body: {
      ur: 'احاطے اور قریب عمومی پارکنگ کی گنجائش ہے۔ جمعہ، رمضان، عید اور بڑے اجتماعات میں سکیورٹی عملہ گاڑیوں کو متبادل حصوں کی طرف بھیج سکتا ہے؛ مقررہ فیس کے بارے میں کوئی مستقل عوامی نرخ فرض نہ کریں۔',
      en: 'General parking exists in and around the complex. On Fridays, during Ramadan, Eid and large gatherings, security may redirect vehicles to alternative areas; do not assume a fixed public fee.',
    },
  },
  {
    id: 'accessibility',
    icon: '♿',
    title: { ur: 'رسائی پذیری', en: 'Accessibility' },
    body: {
      ur: 'وسیع صحن کے کئی حصے ہموار ہیں، مگر بعض راستوں، داخلی تبدیلیوں یا سیڑھیوں کے باعث مدد درکار ہو سکتی ہے۔ مخصوص قابلِ رسائی راستہ اور ریمپ سفر سے پہلے موقع پر تصدیق کریں۔',
      en: 'Much of the broad courtyard is level, but some routes, level changes or steps may require assistance. Confirm the accessible route and ramps on site before travelling.',
    },
  },
  {
    id: 'comfort',
    icon: '🚰',
    title: { ur: 'پانی اور آرام', en: 'Water & rest' },
    body: {
      ur: 'یہ عبادت گاہ ہے، مکمل سیاحتی لاؤنج نہیں۔ گرمی میں اپنی پانی کی بوتل ساتھ رکھیں اور محدود نشستوں کا انتظام کریں۔',
      en: 'This is a place of worship rather than a full visitor lounge. Carry your own water in warm weather and expect limited seating.',
    },
  },
  {
    id: 'dining',
    icon: '🍽️',
    title: { ur: 'کھانا اور مشروبات', en: 'Food & drinks' },
    body: {
      ur: 'عبادت کے مرکزی حصے میں کھانا ترجیح نہ دیں۔ قریبی شہری سیکٹرز میں پاکستانی روایتی کھانا، چائے، بیکری، کیفے اور خاندانی ریستوران جیسی اقسام دستیاب ہیں — کسی مخصوص مقام کی سفارش نہیں کی جاتی۔',
      en: 'Avoid eating in the main prayer area. Nearby city sectors offer Pakistani cuisine, tea, bakeries, cafés and family restaurants — no specific venue is recommended.',
    },
  },
  {
    id: 'lodging',
    icon: '🛏️',
    title: { ur: 'قیام و رہائش', en: 'Lodging' },
    body: {
      ur: 'اسلام آباد کے مرکزی سیکٹرز میں ہوٹل، گیسٹ ہاؤس اور سروسڈ اپارٹمنٹ جیسی مختلف رہائشی اقسام ملتی ہیں؛ ترجیح اور بجٹ کے مطابق انتخاب کریں۔ یہ رہنما کسی کاروبار کی توثیق نہیں کرتا۔',
      en: 'Islamabad’s central sectors offer hotels, guest houses and serviced apartments of various types; choose by preference and budget. This guide does not endorse any business.',
    },
  },
  {
    id: 'shopping',
    icon: '🛍️',
    title: { ur: 'خریداری اور سہولت اسٹور', en: 'Shopping & convenience' },
    body: {
      ur: 'قریبی تجارتی مراکز میں جنرل اسٹور، سپرمارکیٹ، فارمیسی اور سہولت اسٹور جیسی خدمات عام ہیں۔ مذہبی مقام کے اندر خریداری پر انحصار نہ کریں۔',
      en: 'Nearby commercial centres have general stores, supermarkets, pharmacies and convenience shops. Do not rely on shopping inside the religious site.',
    },
  },
  {
    id: 'fuel',
    icon: '⛽',
    title: { ur: 'ایندھن اور برقی گاڑی چارجنگ', en: 'Fuel & EV charging' },
    body: {
      ur: 'شہری سیکٹرز میں روایتی فیول اسٹیشن اور محدود برقی گاڑی چارجنگ سہولیات مل سکتی ہیں۔ چارجر کی قسم، دستیابی اور اوقات روانگی سے پہلے متعلقہ نقشہ یا آپریٹر پر چیک کریں۔',
      en: 'City sectors have conventional fuel stations and limited EV charging. Check the connector type, availability and hours on the relevant map or operator before departure.',
    },
  },
];

/* ─────────────── ۶) سائنسی پہلو اور زائرین کی ذمہ داری ─────────────── */
export const responsibility: {
  intro: Bi;
  points: { icon: string; title: Bi; body: Bi }[];
} = {
  intro: {
    ur: 'یہ ایک آزاد، غیر منافع بخش معلوماتی منصوبہ ہے۔ ایک پر امن، قابلِ قدر مقام کو برقرار رکھنے میں زائرین کا کردار اہم ہے۔',
    en: 'This is an independent, non-profit information project. Visitors play an important role in keeping a peaceful, valued site intact.',
  },
  points: [
    { icon: '🤝', title: { ur: 'عبادت گاہ کا احترام', en: 'Respect the place of worship' }, body: { ur: 'یہاں روزمرہ عبادت ہوتی ہے؛ آواز، لباس اور نماز کے دوران چلنے پھرنے میں احتیاط کریں۔', en: 'Daily worship happens here; be careful with voice, dress and movement during prayers.' } },
    { icon: '📸', title: { ur: 'فوٹوگرافی کا اخلاق', en: 'Photography ethics' }, body: { ur: 'لوگوں، خواتین کے حصوں یا نماز کے قریبی مناظر کی بغیر اجازت تصویر نہ بنائیں۔', en: 'Do not photograph people, women’s sections or close prayer scenes without permission.' } },
    { icon: '♻️', title: { ur: 'صاف ستھرا رکھیں', en: 'Keep it clean' }, body: { ur: 'کوڑا اپنے ساتھ لے جائیں یا مخصوص ڈبوں میں ڈالیں؛ پانی اور پلاسٹک کا بے جا استعمال نہ کریں۔', en: 'Take litter with you or use the designated bins; avoid wasteful water and plastic use.' } },
    { icon: '🌱', title: { ur: 'قدرتی ماحول کی حفاظت', en: 'Protect the natural setting' }, body: { ur: 'مارگلہ کے پودوں اور جنگلی حیات کو مت ڈھیلیں؛ پگڈنڈیوں سے باہر نہ جائیں۔', en: 'Do not disturb Margalla’s plants and wildlife; stay on the marked trails.' } },
  ],
};
