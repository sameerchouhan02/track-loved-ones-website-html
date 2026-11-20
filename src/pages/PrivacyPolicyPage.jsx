import PageShell, { runPageInteraction } from '../PageShell.jsx';
import styles from './styles/PrivacyPolicyPage.css?inline';

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      pageId="privacyPolicy"
      title="Privacy Policy & DPDP Act 2023 Compliance | Track Loved Ones by People Connect"
      description="Privacy Policy and Data Transparency statement for Track Loved Ones, a mobile app by People Connect, registered at 2A-108 NIT Faridabad, Haryana 121001. Compliant with India's Digital Personal Data Protection Act, 2023, with Zero-Location-Storage architecture and domestic Indian servers."
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
                  <a href="/privacy-policy" className="active" aria-current="page">Privacy Policy &amp; DPDP 2023</a>
                  <a href="/refunds-cancellation">Refunds &amp; KYC Cancellation</a>
                  <a href="/terms-of-use">Terms of Use</a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="content">
          <h1>Privacy Policy &amp; Data Transparency</h1>
          <div className="meta-info">
            Last Updated: October 2026 | Issued by People Connect, a sole proprietorship firm having its registered office at 2A-108 NIT Faridabad, Haryana 121001, for its Mobile App Track Loved Ones ("Data Fiduciary") in strict compliance with the Digital Personal Data Protection Act (DPDPA), 2023, and Indian Telecom Frameworks.
          </div>
          <p>At <strong>Track Loved Ones</strong>, we construct safety architecture to protect families, not track their lives. Unlike traditional location applications, our system operates on a strict <strong>Zero-Location-Storage Architecture</strong>. Live tracking happens dynamically in processing memory, leaving zero movement footprints on disk storage trails.</p>
          <div className="highlight-notice">
            <h4 style={{marginBottom: 6, color: 'var(--primary)'}}>Our Firm Promise</h4>
            <p style={{margin: 0, fontSize: 14}}>We never sell, rent, or lease your location histories or behavioral data to third-party advertisers or data brokers. Core location features are funded entirely through outbound video media views.</p>
          </div>
          <h2>1. The SIM-Gate Mandate &amp; Account Routing</h2>
          <p>In accordance with Indian Telecommunications frameworks, mobile SIM cards cannot be legally registered under the names of minors. Consequently, the mobile number used to create any account on this platform belongs legally to an adult subscriber.</p>
          <ul>
            <li><strong>Adult Profiles (18+):</strong> Confirms legal ownership or explicit authorization to register the mobile parameter.</li>
            <li><strong>Child Profiles (Under 18):</strong> Must be initiated by a parent or legal guardian. Verifying the SIM-bound One-Time Password (OTP) provides explicit <strong>Verifiable Parental Consent</strong> under Section 9 of the DPDPA. Child accounts are automatically blocked from accessing corporate marketplaces.</li>
          </ul>
          <h2>2. Explicit Processing &amp; Purpose Mapping</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th style={{width: '35%'}}>Category of Personal Data</th>
                <th style={{width: '65%'}}>Specific and Lawful Purpose of Processing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Name, Mobile Number, Email id &amp; Age</strong></td>
                <td>To authenticate your profile via SIM-bound OTP and determine account age-routing (Adult vs. Child).</td>
              </tr>
              <tr>
                <td><strong>Real-Time GPS Location (Background &amp; Foreground)</strong></td>
                <td>To broadcast your live coordinates exclusively to authorized contacts. <strong>Never permanently stored on physical servers.</strong></td>
              </tr>
              <tr>
                <td><strong>Device Address Book / Contacts</strong></td>
                <td>Accessed strictly locally on your device to let you select and link with family. Your contact book is never uploaded to or stored on our servers.</td>
              </tr>
              <tr>
                <td><strong>Professional Profile &amp; Applications</strong></td>
                <td>(Adult Profiles Only) Your submitted name, contact details, and resume details processed solely to transmit your application directly to a company when you click "Apply".</td>
              </tr>
            </tbody>
          </table>
          <h2>3. Minor Protection Analytics Safeguard</h2>
          <p>All data utilized for internal analysis and service improvement is heavily aggregated or Pseudonymised. In strict compliance with Section 9 of the DPDPA, analytics metrics generated by Child Profiles are never used to track, profile, or behaviorally monitor minors for commercial gain. When children stream educational legal content, the app runs an embedded, clean player using the <code>youtube-nocookie.com</code> engine to stop tracking networks from profiling them.</p>
          <h2>4. Data Retention, Domestic Physical Storage, &amp; Erasure</h2>
          <p>In strict compliance with local regulatory data directives under the DPDP Act, 2023, <strong>we explicitly do not host data or services on public cloud environments</strong>. All application configurations, secure profile tokens, and verification parameters are stored and handled exclusively using <strong>secure, dedicated third-party physical in-house server infrastructures situated domestically within the borders of India</strong>.</p>
          <p><strong>Storage on Third-Party Servers:</strong> The personal data we process is stored on servers owned and operated by third-party infrastructure providers engaged by People Connect as Data Processors. This storage is carried out in compliance with the Digital Personal Data Protection Act, 2023: processors are engaged only under a valid written contract, act strictly on our documented instructions, and are required to maintain reasonable security safeguards against unauthorized access, loss, or disclosure. People Connect remains accountable as the Data Fiduciary for all data held on such servers.</p>
          <p>Historical location tracking streams are kept completely fluid within processing memory arrays and automatically purge from physical operations within 3 days. If you close your account via settings, your registration details, profile data, and secure circles are completely and permanently wiped from our domestic physical hard drives within 3 days.</p>
          <h2>5. Your Rights &amp; Grievance Redressal</h2>
          <p>As a Data Principal under the DPDPA, you hold the right to Access your data summary, Correct inaccuracies, Request Erasure, and Nominate a representative in case of incapacity.</p>
          <p>For any grievances or data rights execution, please contact our designated coordinator:</p>
          <div className="highlight-notice" style={{background: 'var(--bg-light)', borderLeftColor: 'var(--primary)'}}>
            <strong>Data Fiduciary Entity:</strong> People Connect (Sole Proprietorship Firm)<br />
            <strong>Registered Office Address:</strong> 2A-108 NIT Faridabad, Haryana 121001, India<br />
            <strong>Grievance Officer:</strong> Amit Shardne<br />
            <strong>Official Communications Address:</strong> privacy@tracklovedones.com<br />
            <strong>Response Timeline:</strong> All statutory requests will be acknowledged instantly and resolved cleanly within 30 days.
          </div>
          <p>Unresolved privacy disputes may be formally escalated to the Data Protection Board of India (DPBI).</p>
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
