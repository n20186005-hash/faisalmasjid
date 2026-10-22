(() => {
  const key = 'faisalmasjid_cookie_preferences', deniedKey = 'faisalmasjid_analytics_denied', gaId = 'G-HXM22WWPKP';
  const en = document.documentElement.lang === 'en';
  const messages = en ? {
    on: 'Analytics allowed in this browser.', off: 'Analytics rejected in this browser.',
    tab: 'Analytics is off for this tab while its refusal remains available. The shared browser choice may differ and other tabs may still have permission.',
    session: 'Analytics is off for this tab, including navigation and refresh. The permanent choice could not be saved; stored permission may remain in other tabs. Clear site data in browser settings to remove stored permission.',
    page: 'Analytics is off on this page. Storage is unavailable; stored permission may remain in other tabs. Clear site data in browser settings before navigating or refreshing.'
  } : {
    on: 'اس براؤزر میں تجزیات کی اجازت ہے۔', off: 'اس براؤزر میں تجزیات مسترد ہیں۔',
    tab: 'اس ٹیب میں تجزیات اس کی محفوظ بندش دستیاب رہنے تک بند ہیں۔ براؤزر کا مشترک انتخاب مختلف ہو سکتا ہے اور دوسرے ٹیب میں اجازت باقی ہو سکتی ہے۔',
    session: 'اس ٹیب میں تجزیات بند ہیں، صفحہ بدلنے اور ریفریش پر بھی۔ مستقل انتخاب محفوظ نہیں ہوا؛ محفوظ اجازت دوسرے ٹیب میں باقی رہ سکتی ہے۔ براؤزر کی ترتیبات میں سائٹ کا ڈیٹا مٹائیں۔',
    page: 'اس صفحے پر تجزیات بند ہیں۔ ذخیرہ دستیاب نہیں؛ محفوظ اجازت دوسرے ٹیب میں باقی رہ سکتی ہے۔ آگے جانے یا ریفریش سے پہلے براؤزر کی ترتیبات میں سائٹ کا ڈیٹا مٹائیں۔'
  };
  function read() {
    try {
      const raw = JSON.parse(localStorage.getItem(key) || 'null');
      const denied = window.__faisalmasjidDenied || sessionStorage.getItem(deniedKey) === '1';
      return { analytics: !denied && raw?.analytics === true, decided: !!denied || typeof raw?.analytics === 'boolean', denied: !!denied, storedDenial: raw?.analytics === false, failed: false };
    } catch { return { analytics: false, decided: false, denied: !!window.__faisalmasjidDenied, failed: true }; }
  }
  function denySession() {
    window.__faisalmasjidDenied = true; applyRuntime(false);
    try { sessionStorage.setItem(deniedKey, '1'); return sessionStorage.getItem(deniedKey) === '1'; } catch { return false; }
  }
  function clearVeto() {
    try {
      sessionStorage.getItem(deniedKey);
      sessionStorage.removeItem(deniedKey);
      return sessionStorage.getItem(deniedKey) === null;
    } catch { return false; }
  }
  function rollbackGrant() {
    try {
      localStorage.setItem(key, JSON.stringify({ analytics: false }));
      if (JSON.parse(localStorage.getItem(key) || 'null')?.analytics === false) return true;
    } catch {}
    try {
      localStorage.removeItem(key);
      return localStorage.getItem(key) === null;
    } catch { return false; }
  }
  function applyRuntime(allowed) {
    window['ga-disable-' + gaId] = !allowed;
    if (!allowed) {
      if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' });
      for (const part of document.cookie.split(';')) {
        const name = part.split('=')[0].trim();
        if (/^_ga(?:_|$)/.test(name)) for (const domain of ['', '; domain=' + location.hostname, '; domain=.faisalmasjid.com']) document.cookie = name + '=; Max-Age=0; path=/' + domain;
      }
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    if (!window.__faisalmasjidLoaded) window.gtag('consent', 'default', { analytics_storage: 'denied' });
    window.gtag('consent', 'update', { analytics_storage: 'granted' });
    if (window.__faisalmasjidLoaded) return;
    window.__faisalmasjidLoaded = true;
    window.gtag('js', new Date()); window.gtag('config', gaId, { allow_google_signals: false, allow_ad_personalization_signals: false });
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId; document.head.appendChild(script);
  }
  function updateUI(state, message) {
    const checkbox = document.getElementById('analytics'); if (checkbox) checkbox.checked = state.analytics;
    document.querySelectorAll('[data-consent-status]').forEach(node => { node.textContent = message; });
    const banner = document.getElementById('cookie-banner');
    if (state.decided && !state.failed && (!state.denied || state.storedDenial)) banner?.classList.add('hidden'); else banner?.classList.remove('hidden');
  }
  function apply() {
    const state = read(); applyRuntime(state.analytics);
    updateUI(state, state.failed ? messages.page : state.denied && !state.storedDenial ? messages.tab : state.decided ? (state.analytics ? messages.on : messages.off) : '');
    return state;
  }
  function save(value) {
    value = value === true; let sessionDenied = false, saved = false;
    if (!value) {
      sessionDenied = denySession();
      try {
        localStorage.setItem(key, JSON.stringify({ analytics: false }));
        saved = JSON.parse(localStorage.getItem(key) || 'null')?.analytics === false;
      } catch {}
    } else {
      // Verify reads and veto removal before publishing a shared grant.
      try {
        if (read().failed || !clearVeto()) throw Error('Choice unavailable');
        localStorage.setItem(key, JSON.stringify({ analytics: true }));
        if (JSON.parse(localStorage.getItem(key) || 'null')?.analytics !== true) throw Error('Choice not retained');
        window.__faisalmasjidDenied = false;
        const state = read();
        if (state.failed || !state.analytics) throw Error('Choice unavailable');
        saved = true;
      } catch {
        rollbackGrant();
        sessionDenied = denySession();
      }
    }
    let state = apply();
    if (saved && value && (state.failed || !state.analytics)) {
      rollbackGrant();
      sessionDenied = denySession(); saved = false; state = apply();
    }
    const result = { saved, analytics: state.analytics, message: saved ? (state.analytics ? messages.on : messages.off) : (sessionDenied ? messages.session : messages.page) };
    updateUI(state, result.message);
    if (!saved) document.getElementById('cookie-banner')?.classList.remove('hidden');
    return result;
  }
  window.FaisalmasjidConsent = { read, save };
  apply();
  const checkbox = document.getElementById('analytics');
  document.querySelectorAll('[data-cookie-accept]').forEach(node => node.addEventListener('click', () => save(true)));
  document.querySelectorAll('[data-cookie-reject]').forEach(node => node.addEventListener('click', () => save(false)));
  document.getElementById('cookie-settings')?.addEventListener('submit', event => { event.preventDefault(); save(checkbox?.checked === true); });
  window.addEventListener('storage', apply);
})();
