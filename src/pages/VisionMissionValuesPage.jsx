import PageShell, { runPageInteraction } from '../PageShell.jsx';
import styles from './styles/VisionMissionValuesPage.css?inline';

export default function VisionMissionValuesPage() {
  return (
    <PageShell pageId="visionMissionValues" title={"Vision, Mission & Core Values | Track Loved Ones"} description={""} styles={styles}>
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
              <li><a href="/vision-mission-values" className="active" aria-current="page">Vision &amp; Values</a></li>
              <li className="dropdown">
                <a href="/#legal">Legal Policies ▾</a>
                <div className="dropdown-content">
                  <a href="/disclaimer">Disclaimer Notice</a>
                  <a href="/privacy-policy">Privacy Policy &amp; DPDP 2023</a>
                  <a href="/refunds-cancellation">Refunds &amp; KYC Cancellation</a>
                  <a href="/terms-of-use">Terms of Use</a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="content">
          <div className="kicker">People Connect · Strategic Foundations</div>
          <h1>Vision, Mission &amp; Core Values</h1>
          <p className="subtitle">The philosophical and statutory principles driving our family safety ecosystem, sovereign data architecture, and citizen empowerment initiatives.</p>
          <div className="split-grid">
            <div className="card-dark-gold">
              <div className="card-kicker">Our Long-Term Aspiration</div>
              <h2>Our Vision</h2>
              <p className="card-p">A world where every family stays seamlessly connected and safe without sacrificing personal dignity, surveillance intrusion, or data privacy. We envision technology as an enabler of trust, empowering citizens with transparent control over their digital footprints and eliminating fear through constitutional safety protections.</p>
              <div style={{marginTop: 25, fontSize: 12, color: 'var(--accent-gold)', fontWeight: 'bold'}}>
                ✓ Dignity-first, consent-driven safety for all families
              </div>
            </div>
            <div className="card-dark-green">
              <div className="card-kicker">Our Operational Commitment</div>
              <h2>Our Mission</h2>
              <p className="card-p">To deliver reliable, sub-meter peer-to-peer location safety and emergency assistance that strictly complies with constitutional citizen rights and Indian legal mandates. We democratize family protection by providing our core app 100% free—funded ethically through public legal literacy on YouTube rather than data commodification or surveillance capitalism.</p>
              <div style={{marginTop: 25, fontSize: 12, color: '#34D399', fontWeight: 'bold'}}>
                ✓ Funded by public legal education, not data selling
              </div>
            </div>
          </div>
          <h2 className="values-title">Our Non-Negotiable Core Values</h2>
          <p style={{color: 'var(--text-muted)', fontSize: 14}}>Six foundational pillars governing every line of code, server deployment, and legal policy we establish.</p>
          <div className="values-grid">
            <div className="val-item">
              <div className="val-icon">🤝</div>
              <h3>1. Uncompromising Human Dignity &amp; Consent</h3>
              <p>Every citizen holds unalienable ownership over their physical location. We reject perpetual covert tracking: our mandatory 24-hour permission auto-expiry standard guarantees continuous, conscious mutual consent.</p>
            </div>
            <div className="val-item">
              <div className="val-icon">🔒</div>
              <h3>2. Zero Data Commercialization</h3>
              <p>We never sell, lease, or monetize personal coordinates to data brokers, ad networks, or third parties. Our Zero-Location-Storage architecture processes live telemetry in dynamic memory, leaving zero disk movement trails.</p>
            </div>
            <div className="val-item">
              <div className="val-icon">⚖️</div>
              <h3>3. Legal Literacy as a Public Good</h3>
              <p>We believe knowledge of the law is a citizen lifeline. By funding our infrastructure through educational YouTube videos on prevailing Indian statutes, we keep safety free while building an informed citizenry.</p>
            </div>
            <div className="val-item">
              <div className="val-icon">🇮🇳</div>
              <h3>4. Domestic Data Sovereignty</h3>
              <p>In strict compliance with the DPDP Act 2023, we refuse public foreign clouds. All verification parameters and secure profile tokens reside exclusively on dedicated physical in-house servers located inside India.</p>
            </div>
            <div className="val-item">
              <div className="val-icon">🚨</div>
              <h3>5. Critical Lifeline Reliability</h3>
              <p>When distress strikes, technology must not fail. Single-tap SOS broadcast overrides silent ringers, launches turn-by-turn navigation for responders, and relays coordinates to national helplines in under two seconds.</p>
            </div>
            <div className="val-item">
              <div className="val-icon">👨‍👩‍👧‍👦</div>
              <h3>6. Multi-Generational Family Harmony</h3>
              <p>Engineered with empathy for teenagers seeking independence (via Blur &amp; Ghost modes) and elderly grandparents requiring medical check-ins, balancing protective safety with personal privacy.</p>
            </div>
          </div>
          <div className="guarantee-callout">
            <h4>Our Statutory Guarantee to Citizens</h4>
            <p>We hold ourselves accountable under the Digital Personal Data Protection Act (DPDPA), 2023, the Information Technology Act, 2000, and prevailing Indian telecom guidelines. If our practices ever diverge from our values, any user has the statutory right to request immediate data erasure and lodge a formal inquiry with our Grievance Officer or the Data Protection Board of India.</p>
          </div>
          <div className="nav-links-bar">
            <a href="/" className="btn-home">← Return to Main Website</a>
            <span style={{fontSize: 13, color: 'var(--text-muted)'}}>© 2026 People Connect</span>
          </div>
        </main>
        <footer>
          <p>© 2026 People Connect. All rights reserved.</p>
          <p style={{marginTop: 6}}>Track Loved Ones is a brand marketed by People Connect.</p>
        </footer>
      </div>
    </PageShell>
  );
}
