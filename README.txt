Track Loved Ones - React Website
================================

The site has one HTML entry point (`index.html`). All pages are React JSX
components under `src/pages`; each component returns its page content as JSX.
Page styles live alongside the components under `src/pages/styles`, while the
shared `PageShell` handles document metadata and page-specific scripts. Vite
builds a single-page React application.

Requirements
------------
- Node.js 20.19+ (or 22.12+)
- npm

Run locally
-----------
1. Open this project folder in VS Code.
2. Run `npm install` in the integrated terminal.
3. Run `npm run dev`.
4. Open the local URL printed by Vite.

Production build
----------------
- Run `npm run build`.
- Preview with `npm run preview`.
- Vercel builds with `npm run build` and publishes `dist`.

Routes
------
- `/`: main website
- `/c`: parental consent
- `/corporate-offerings`
- `/disclaimer`
- `/legal-education`
- `/privacy-policy`
- `/refunds-cancellation`
- `/terms-of-use`
- `/vision-mission-values`

Legacy `.html` URLs permanently redirect to the clean routes in `vercel.json`.
Page components resolve the requested route in `src/main.jsx`.

Consent page integration
------------------------
The consent page reads its token from `?code=...` (or `?token=...`) and sends
requests to `https://api.tracklovedones.com/api/v1`. The API must allow browser
requests from the website origin through CORS.

A backend can also provide display data before the React entry script:

    window.__CONSENT_DATA__ = {
      code: "consent-token",
      childName: "Minor Child",
      maskedChildPhone: "+91 98XXXXXX12"
    };

Only provide a masked phone number. React renders display values as text.
Do not put an unmasked phone number or Aadhaar number in a URL.
