import PageShell, { runPageInteraction } from '../PageShell.jsx';
import styles from './styles/TermsOfUsePage.css?inline';

export default function TermsOfUsePage() {
  return (
    <PageShell
      pageId="termsOfUse"
      title="Terms of Use | Track Loved Ones by People Connect"
      description="Official Terms of Use for the Track Loved Ones mobile app and web platform, operated by People Connect at 2A-108 NIT Faridabad, Haryana 121001. Covers peer-to-peer location tracking, Section 79 IT Act intermediary marketplace rules, and DPDPA Section 6 granular consent."
      styles={styles}
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
            <button className="menu-toggle" type="button" aria-label="Toggle menu" aria-expanded="false" data-legacy-onclick={"var m=document.getElementById('navMenu');var o=m.classList.toggle('open');this.setAttribute('aria-expanded',o);"} onClick={(event) => runPageInteraction("var m=document.getElementById('navMenu');var o=m.classList.toggle('open');this.setAttribute('aria-expanded',o);", event, event.currentTarget)}>☰</button>
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
                  <a href="/disclaimer">Disclaimer Notice</a>
                  <a href="/privacy-policy">Privacy Policy &amp; DPDP 2023</a>
                  <a href="/refunds-cancellation">Refunds &amp; KYC Cancellation</a>
                  <a href="/terms-of-use" className="active" aria-current="page">Terms of Use</a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="content">
          <h1>Terms of Use</h1>
          <div className="meta-info">Last Updated: October 2026 · Issued by People Connect (Regd. Office: 2A-108 NIT Faridabad, Haryana 121001)</div>
          <p>By accessing or using the <strong>Track Loved Ones</strong> mobile application and web platform, you agree to be legally bound by these Terms of Use outlined by <strong>People Connect</strong>, a sole proprietorship firm having its registered office at 2A-108 NIT Faridabad, Haryana 121001 ("People Connect", "we", "us", or "our").</p>
          <h2>1. Scope of Service &amp; Intermediary Role</h2>
          <p>The platform provides two distinct functionalities: a Peer-to-Peer Location Safety Tracker and an Opportunities Facilitator Marketplace. Regarding all job and business listings, the Platform acts strictly as an information mediator (<strong>Intermediary</strong>) under Section 79 of the Information Technology Act, 2000. The platform does not pre-screen postings, act as an employer, or intervene in workforce hiring disputes.</p>
          <h2>2. Granular Privacy Rights &amp; Controls</h2>
          <p>In alignment with Section 6 of the DPDPA, your consent is unbundled and separate for every processing activity. You hold an unconditional right to turn off location assignment for any individual contact or revoke device system tracking permissions at any time. All coordinates streaming will immediately cease.</p>
          <h2>3. Prohibited Marketplace Actions</h2>
          <div className="highlight-box">
            <strong style={{color: '#123424'}}>🚫 Prohibited Conduct Policy:</strong> Users and corporate recruiters are strictly prohibited from soliciting private location tracking links from other users through marketplace posts, publishing deceptive job descriptions, or engaging in behavioral tracking of minors for commercial gain.
          </div>
          <p>The Platform reserves the absolute right to remove any reported listing, ban non-compliant corporate profiles immediately, and report violations to appropriate Indian regulatory authorities.</p>
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
