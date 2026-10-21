# Faisal Masjid visitor guide

Independent Urdu (RTL) and English guide with three Urdu legal pages. It does not represent the mosque, grant admission, sell tickets or take bookings.

## Build

Use pinned Node/pnpm versions. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build` and `pnpm verify`. `pnpm exec wrangler deploy --dry-run` rehearses bundling without publishing. The actual Cloudflare project is `faisalmasjid`, identified by the official repository build check; the old check failure is historical.

Static HTML covers existing Urdu/English homes, three Urdu legal pages and 404. The explicit Worker serves ASSETS, applies HTTPS/apex redirects preserving path/query, marks errors noindex and retains `/api/weather` as a server endpoint. Generated dist remains ignored/untracked as in the baseline. All source and public resources must be committed.

## Evidence scope

Sources reviewed 20 October 2026 are linked on the guide. IIUI distinguishes construction, inauguration and first regular Friday prayer. Architecture and a dated map listing do not establish current visitor permission. Fees, non-Muslim admission, dress, photography and facilities need confirmation with the administration. Nearby places are candidates for separate checks.

The Open-Meteo forecast uses a fixed destination point through the same-site endpoint, not visitor geolocation. It is a model forecast and does not prove access or safety. Failure is shown as unavailable.

## Privacy and photographs

Analytics is off by default. Strict-boolean consent and a tab-session veto protect prior-grant withdrawal if permanent writes fail. If both storage mechanisms fail, the message states the current-page limit. Maps are external links; photographs are local and individually credited. There is no account, booking, contact form or email submission. The old service worker is retired, clearing only its own cache namespace.

See ATTRIBUTION.md for image authors, dates, sources, licences and changes. Local source/HTTP tests are not formal visual acceptance; production and actual browser review are separate gates.
