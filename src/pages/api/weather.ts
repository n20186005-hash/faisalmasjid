import type { APIRoute } from 'astro';
import {
  WEATHER_LAT,
  WEATHER_LON,
  buildWeatherUrl,
  describeCode,
  buildHints,
  formatDayLabel,
  type Lang,
} from '../../lib/weather';

// یہ اینڈ پوائنٹ سرور (Cloudflare Workers) پر چلتا ہے اور کیش کیا جاتا ہے۔
export const prerender = false;

interface OpenMeteoResponse {
  current?: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    precipitation: number;
  };
  daily?: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: (number | null)[];
    uv_index_max: (number | null)[];
    sunrise: string[];
    sunset: string[];
  };
}

export const GET: APIRoute = async ({ request, url }) => {
  const langParam = url.searchParams.get('lang');
  const lang: Lang = langParam === 'en' ? 'en' : 'ur';

  const apiUrl = buildWeatherUrl(WEATHER_LAT, WEATHER_LON, 7);

  // سرور سائیڈ کیش (Cloudflare Workers کا Cache API) — بہترین رفتار اور کم درخواستی بوجھ۔
  const cacheKey = new Request(request.url);
  try {
    if (typeof caches !== 'undefined' && caches.default) {
      const cached = await caches.default.match(cacheKey);
      if (cached) return cached;
    }
  } catch {
    /* کیش ناکام ہو تو بھی جاری رہیں */
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 9000);
  let data: OpenMeteoResponse;
  try {
    const res = await fetch(apiUrl, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
      // Cloudflare ایج کیش ہدایت (صرف Workers ماحول میں کارگر)
      cf: { cacheTtl: 600, cacheEverything: true } as Record<string, unknown>,
    });
    if (!res.ok) throw new Error(`upstream ${res.status}`);
    data = (await res.json()) as OpenMeteoResponse;
  } catch {
    clearTimeout(timeout);
    return new Response(
      JSON.stringify({
        ok: false,
        message: lang === 'en' ? 'Weather is temporarily unavailable.' : 'موسم کی معلومات عارضی طور پر دستیاب نہیں۔',
      }),
      { status: 200, headers: { 'content-type': 'application/json; charset=utf-8' } },
    );
  } finally {
    clearTimeout(timeout);
  }

  const cur = data.current;
  const daily = data.daily;
  if (!cur || !daily) {
    return new Response(
      JSON.stringify({ ok: false, message: lang === 'en' ? 'Weather data incomplete.' : 'موسم کا ڈیٹا نامکمل ہے۔' }),
      { status: 200, headers: { 'content-type': 'application/json; charset=utf-8' } },
    );
  }

  const todayCode = daily.weather_code[0];
  const todayRainProb = daily.precipitation_probability_max?.[0] ?? null;
  const todayUv = daily.uv_index_max?.[0] ?? null;

  const currentInfo = describeCode(cur.weather_code, lang);
  const todayInfo = describeCode(todayCode, lang);

  const hints = buildHints({
    currentCode: cur.weather_code,
    currentPrecip: cur.precipitation,
    todayRainProb,
    uvMax: todayUv,
    lang,
  });

  const dailyOut = daily.time.slice(0, 7).map((iso, i) => {
    const info = describeCode(daily.weather_code[i], lang);
    return {
      date: iso,
      label: formatDayLabel(iso, lang),
      symbol: info.symbol,
      text: info.text,
      tmax: Math.round(daily.temperature_2m_max[i]),
      tmin: Math.round(daily.temperature_2m_min[i]),
      rainProb: daily.precipitation_probability_max?.[i] ?? null,
    };
  });

  const payload = {
    ok: true,
    updated: new Date().toISOString(),
    location: lang === 'en' ? 'Faisal Mosque, Islamabad' : 'فیصل مسجد، اسلام آباد',
    current: {
      temp: Math.round(cur.temperature_2m),
      apparent: Math.round(cur.apparent_temperature),
      humidity: Math.round(cur.relative_humidity_2m),
      wind: Math.round(cur.wind_speed_10m),
      symbol: currentInfo.symbol,
      text: currentInfo.text,
    },
    today: {
      symbol: todayInfo.symbol,
      text: todayInfo.text,
      tmax: Math.round(daily.temperature_2m_max[0]),
      tmin: Math.round(daily.temperature_2m_min[0]),
      rainProb: todayRainProb,
      uvMax: todayUv,
      sunrise: daily.sunrise?.[0] ?? null,
      sunset: daily.sunset?.[0] ?? null,
    },
    daily: dailyOut,
    hints,
  };

  const body = JSON.stringify(payload);
  const response = new Response(body, {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300, s-maxage=600, stale-while-revalidate=900',
    },
  });

  // کیش میں رکھیں (best-effort، غیر مطابقتی)
  try {
    if (typeof caches !== 'undefined' && caches.default) {
      void caches.default.put(cacheKey, response.clone());
    }
  } catch {
    /* نظر انداز */
  }

  return response;
};
