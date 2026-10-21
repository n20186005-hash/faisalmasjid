/**
 * موسم کی منطق (صرف سرور سائیڈ استعمال کے لیے)۔
 * یہ ماڈیول موسم کا ڈیٹا تیار کرتا ہے اور مقامی زبان میں الفاظ بناتا ہے،
 * تاکہ زائرین کو صرف عملی مشورہ (مثلاً چھتری لے جائیں یا نہیں) ملے۔
 */

/** فیصل مسجد، اسلام آباد کے طول و عرض (مارگلہ کی پہاڑیوں کے دامن میں) */
export const WEATHER_LAT = 33.730288;
export const WEATHER_LON = 73.0369511;

/** Open-Meteo فاریکاسٹ اینڈ پوائنٹ کا URL بنانا */
export function buildWeatherUrl(lat: number, lon: number, days = 7): string {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation',
    daily:
      'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,uv_index_max',
    timezone: 'auto',
    forecast_days: String(days),
    wind_speed_unit: 'kmh',
  });
  return `https://api.open-meteo.com/v1/forecast?${params.toString()}`;
}

export type Lang = 'ur' | 'en';

interface CodeInfo {
  ur: string;
  en: string;
  symbol: string;
  /** کیا یہ برسات یا گرج چمک والی صورت حال ہے؟ */
  wet: boolean;
}

/** WMO موسم کوڈ کی مقامی زبان میں وضاحت */
const CODE_MAP: Record<number, CodeInfo> = {
  0: { ur: 'صاف آسمان', en: 'Clear sky', symbol: '☀️', wet: false },
  1: { ur: 'زیادہ تر صاف', en: 'Mainly clear', symbol: '🌤️', wet: false },
  2: { ur: 'جزوی ابر آلود', en: 'Partly cloudy', symbol: '⛅', wet: false },
  3: { ur: 'ابر آلود', en: 'Overcast', symbol: '☁️', wet: false },
  45: { ur: 'دھند', en: 'Fog', symbol: '🌫️', wet: false },
  48: { ur: 'اور پالی دھند', en: 'Rime fog', symbol: '🌫️', wet: false },
  51: { ur: 'ہلکی بوندا باندی', en: 'Light drizzle', symbol: '🌦️', wet: true },
  53: { ur: 'معمولی بوندا باندی', en: 'Moderate drizzle', symbol: '🌦️', wet: true },
  55: { ur: 'شدید بوندا باندی', en: 'Dense drizzle', symbol: '🌦️', wet: true },
  56: { ur: 'منجمد بوندا باندی', en: 'Freezing drizzle', symbol: '🌧️', wet: true },
  57: { ur: 'شدید منجمد بوندا باندی', en: 'Freezing drizzle', symbol: '🌧️', wet: true },
  61: { ur: 'ہلکی بارش', en: 'Slight rain', symbol: '🌧️', wet: true },
  63: { ur: 'معمولی بارش', en: 'Moderate rain', symbol: '🌧️', wet: true },
  65: { ur: 'شدید بارش', en: 'Heavy rain', symbol: '🌧️', wet: true },
  66: { ur: 'منجمد بارش', en: 'Freezing rain', symbol: '🌧️', wet: true },
  67: { ur: 'شدید منجمد بارش', en: 'Freezing rain', symbol: '🌧️', wet: true },
  71: { ur: 'ہلکی برف باری', en: 'Slight snow', symbol: '🌨️', wet: true },
  73: { ur: 'معمولی برف باری', en: 'Moderate snow', symbol: '🌨️', wet: true },
  75: { ur: 'شدید برف باری', en: 'Heavy snow', symbol: '❄️', wet: true },
  77: { ur: 'برف کے دانے', en: 'Snow grains', symbol: '🌨️', wet: true },
  80: { ur: 'ہلکی بوندیں', en: 'Rain showers', symbol: '🌦️', wet: true },
  81: { ur: 'معمولی بوندیں', en: 'Rain showers', symbol: '🌦️', wet: true },
  82: { ur: 'شدید بوندیں', en: 'Violent rain showers', symbol: '⛈️', wet: true },
  85: { ur: 'برف کی بوندیں', en: 'Snow showers', symbol: '🌨️', wet: true },
  86: { ur: 'شدید برفانی بوندیں', en: 'Heavy snow showers', symbol: '❄️', wet: true },
  95: { ur: 'گرج چمک', en: 'Thunderstorm', symbol: '⛈️', wet: true },
  96: { ur: 'گرج چمک (اولے)', en: 'Thunderstorm with hail', symbol: '⛈️', wet: true },
  99: { ur: 'شدید گرج چمک (اولے)', en: 'Severe thunderstorm', symbol: '⛈️', wet: true },
};

export function describeCode(code: number, lang: Lang): { text: string; symbol: string; wet: boolean } {
  const info = CODE_MAP[code] ?? { ur: 'موسم کی معلومات دستیاب نہیں', en: 'Weather data unavailable', symbol: '🌡️', wet: false };
  return { text: lang === 'en' ? info.en : info.ur, symbol: info.symbol, wet: info.wet };
}

export interface WeatherHint {
  icon: string;
  text: string;
}

/**
 * زائرین کے لیے عملی مشورہ: کیا چھتری لے جائیں، کیا سورج سے بچاؤ درکار ہے۔
 * محض ڈیٹا کی بنیاد پر مقامی زبان میں مختصر الفاظ۔
 */
export function buildHints(opts: {
  currentCode: number;
  currentPrecip: number;
  todayRainProb: number | null;
  uvMax: number | null;
  lang: Lang;
}): WeatherHint[] {
  const { currentCode, currentPrecip, todayRainProb, uvMax, lang } = opts;
  const hints: WeatherHint[] = [];
  const wet = CODE_MAP[currentCode]?.wet ?? false;
  const rainLikely = wet || currentPrecip > 0.2 || (todayRainProb ?? 0) >= 40;

  if (rainLikely) {
    hints.push({
      icon: '🌂',
      text:
        lang === 'en'
          ? 'Carry an umbrella or a light raincoat — there is a real chance of rain or showers.'
          : 'چھتری یا ہلکا رین کوٹ ساتھ رکھیں — بارش یا بوندوں کا قوی امکان ہے۔',
    });
  } else {
    hints.push({
      icon: '🕶️',
      text:
        lang === 'en'
          ? 'This forecast suggests a lower rain chance; conditions and access can still change.'
          : 'پیش گوئی میں بارش کا امکان کم ہے؛ موسم اور رسائی پھر بھی بدل سکتے ہیں۔',
    });
  }

  if ((uvMax ?? 0) >= 6) {
    hints.push({
      icon: '🧴',
      text:
        lang === 'en'
          ? 'Strong sun: use sunscreen, a hat and water, especially midday.'
          : 'تیز دھوپ: سن اسکرین، ٹوپی اور پانی کا استعمال کریں، خاص طور پر دوپہر میں۔',
    });
  }

  if ((uvMax ?? 0) > 0 && (uvMax ?? 0) < 6 && !rainLikely) {
    hints.push({
      icon: '🌿',
      text:
        lang === 'en'
          ? 'Check the latest conditions and local instructions before any outdoor visit.'
          : 'بیرونی دورے سے پہلے تازہ حالات اور مقامی ہدایات دیکھیں۔',
    });
  }

  return hints;
}

/** ISO تاریخ (YYYY-MM-DD) کو مقامی زبان میں ہفتہ/دن کے نام سے بنانا */
export function formatDayLabel(iso: string, lang: Lang): string {
  const date = new Date(`${iso}T00:00:00`);
  const weekday = date.toLocaleDateString(lang === 'en' ? 'en-US' : 'ur-PK', { weekday: 'short' });
  const day = date.toLocaleDateString(lang === 'en' ? 'en-US' : 'ur-PK', { day: 'numeric', month: 'short' });
  return lang === 'en' ? `${weekday}, ${day}` : `${day} · ${weekday}`;
}
