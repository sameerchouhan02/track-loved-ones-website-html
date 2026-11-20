import PageShell, { runPageInteraction } from '../PageShell.jsx';
import styles from './styles/DisclaimerPage.css?inline';

const description = 'Official Legal Disclaimer Notice for Track Loved Ones, operated by People Connect (a sole proprietorship firm registered at 2A-108 NIT Faridabad, Haryana 121001). Covers Section 79 IT Act Safe Harbour, DPDP Act 2023 fiduciary shift, emergency SOS limitations, and legal education disclaimers.';
const headMeta = [
  {
    name: 'keywords',
    content: 'Track Loved Ones disclaimer, People Connect Faridabad, Section 79 IT Act intermediary safe harbour, DPDP Act 2023 data fiduciary, family safety app disclaimer, emergency SOS limitations, legal awareness India, People Connect sole proprietorship'
  },
  { name: 'author', content: 'People Connect (Sole Proprietorship Firm, 2A-108 NIT Faridabad, Haryana 121001)' },
  { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large' },
  { property: 'og:type', content: 'website' },
  { property: 'og:site_name', content: 'Track Loved Ones · People Connect' },
  { property: 'og:title', content: 'Legal Disclaimer Notice | Track Loved Ones by People Connect' },
  {
    property: 'og:description',
    content: 'Statutory Legal Disclaimer Notice issued by People Connect (Regd. Office: 2A-108 NIT Faridabad, Haryana 121001) for the Track Loved Ones family safety and marketplace ecosystem.'
  },
  { property: 'og:url', content: 'https://tracklovedones.com/disclaimer' },
  { property: 'og:locale', content: 'en_IN' },
  { name: 'twitter:card', content: 'summary' },
  { name: 'twitter:title', content: 'Legal Disclaimer Notice | Track Loved Ones by People Connect' },
  {
    name: 'twitter:description',
    content: 'Statutory Legal Disclaimer Notice issued by People Connect (Regd. Office: 2A-108 NIT Faridabad, Haryana 121001) for the Track Loved Ones family safety and marketplace ecosystem.'
  }
];
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Legal Disclaimer Notice - Track Loved Ones',
  url: 'https://tracklovedones.com/disclaimer',
  description,
  inLanguage: 'en-IN',
  publisher: {
    '@type': 'Organization',
    name: 'People Connect',
    legalName: 'People Connect (Sole Proprietorship Firm)',
    brand: {
      '@type': 'Brand',
      name: 'Track Loved Ones'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2A-108 NIT',
      addressLocality: 'Faridabad',
      addressRegion: 'Haryana',
      postalCode: '121001',
      addressCountry: 'IN'
    }
  }
};

export default function DisclaimerPage() {
  return (
    <PageShell
      pageId="disclaimer"
      title="Legal Disclaimer Notice | Track Loved Ones by People Connect"
      description={description}
      styles={styles}
      headMeta={headMeta}
      canonicalUrl="https://tracklovedones.com/disclaimer"
      structuredData={structuredData}
    >
      <div>
        <div className="top-banner">
          <span>🇮🇳 Strict Compliance with Digital Personal Data Protection Act, 2023 · Physical in-house Indian servers</span>
          <a href="/privacy-policy">Read Statutory Transparency →</a>
        </div>
        <header className="header">
          <div className="nav-wrap">
            <a href="/" className="brand-link">
              <img src="/assets/brand-logo.png" alt="Track Loved Ones Shield Logo" className="brand-logo" />
              <div className="brand-text">
                <span className="brand-title">Track Loved Ones</span>
                <span className="brand-tagline">Always connect with your world</span>
              </div>
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle menu"
              aria-expanded="false"
              data-legacy-onclick={"var m=document.getElementById('navMenu');var o=m.classList.toggle('open');this.setAttribute('aria-expanded',o);"}
              onClick={(event) => runPageInteraction("var m=document.getElementById('navMenu');var o=m.classList.toggle('open');this.setAttribute('aria-expanded',o);", event, event.currentTarget)}
            >
              ☰
            </button>
            <ul className="nav-menu" id="navMenu">
              <li><a href="/#about">About Ecosystem</a></li>
              <li><a href="/#privacy-guarantee">Privacy Guarantee</a></li>
              <li><a href="/#emergency-sos">Emergency SOS</a></li>
              <li><a href="/legal-education">Legal Education</a></li>
              <li><a href="/corporate-offerings">Corporate Offerings</a></li>
              <li><a href="/vision-mission-values">Vision &amp; Values</a></li>
              <li className="dropdown">
                <a href="/#legal" className="active">Legal Policies ▾</a>
                <div className="dropdown-content">
                  <a href="/disclaimer" className="active" aria-current="page">Disclaimer Notice</a>
                  <a href="/privacy-policy">Privacy Policy &amp; DPDP 2023</a>
                  <a href="/refunds-cancellation">Refunds &amp; KYC Cancellation</a>
                  <a href="/terms-of-use">Terms of Use</a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="content">
          <h1>Legal Disclaimer Notice</h1>
          <div className="meta-info">Last Updated: October 2026 · Issued by People Connect, a sole proprietorship firm having its registered office at 2A-108 NIT Faridabad, Haryana 121001</div>
          <div className="warning-box">
            <strong>⚠️ Emergency Response Limitations:</strong> Track Loved Ones is a secondary peer-to-peer tracking framework. It is not a replacement for professional emergency law enforcement dispatchers, medical response teams, or national security authorities.
          </div>
          <h2>1. Intermediary Safe Harbour Shield (Section 79, IT Act)</h2>
          <p><strong>Track Loved Ones</strong> (the "Platform"), owned and operated by <strong>People Connect</strong>, a sole proprietorship firm having its registered office at 2A-108 NIT Faridabad, Haryana 121001, operates strictly as an information mediator (Intermediary) regarding all job and business listings displayed on the marketplace module. Listings are uploaded independently by corporate users. The Platform does not pre-screen or verify the authenticity, legality, or safety of these businesses or postings. The Platform is not legally responsible for fraudulent posts, employment contracts, salary payment defaults, or any digital/physical harm resulting from marketplace applications. Users must perform their own due diligence before applying.</p>
          <h2>2. Data Isolation &amp; Independent Corporate Fiduciary Shift</h2>
          <p>No external company has access to your real-time GPS coordinates or private tracking circles. Data transmission is triggered strictly when an adult user clicks "Apply". The moment your profile data is transferred to the external business, that entity becomes an independent Data Fiduciary under the DPDP Act, 2023. The Platform assumes no liability for how the recipient company processes, stores, or misuses your personal information once it leaves our secure servers.</p>
          <h2>3. Law Awareness Educational Content Disclaimer</h2>
          <p>All simple-language legal updates, constitutional summaries, and citizen guides provided through our video channel are meant for <strong>educational and informational use only</strong>. This content does not constitute formal legal advice. Viewing our videos does not create an attorney-client relationship. For specific court matters, always talk to a registered legal professional in India.</p>
          <h2>4. Track Accuracy &amp; Signal Disruption</h2>
          <p>Real-time location streaming relies entirely on third-party mobile network providers, positioning satellites, hardware device battery levels, and system-level OS permissions. Features are provided on an "as-is" basis, without guarantees of 100% uninterrupted connectivity or immediate SOS push transmission during regional network outages or hardware failure.</p>
          <div className="nav-links-bar">
            <a href="/" className="btn-home">← Return to Main Website</a>
            <span style={{fontSize: 13, color: 'var(--text-muted)'}}>© 2026 People Connect (Sole Proprietorship Firm, Faridabad)</span>
          </div>
        </main>
        <footer>
          <p>© 2026 People Connect (a sole proprietorship firm). All rights reserved.</p>
          <p style={{marginTop: 6}}>Track Loved Ones is a brand owned, operated, and marketed by <strong>People Connect</strong>, having its registered office at <strong>2A-108 NIT Faridabad, Haryana 121001, India</strong>.</p>
        </footer>
      </div>
    </PageShell>
  );
}
