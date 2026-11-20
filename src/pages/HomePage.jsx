import PageShell, { runPageInteraction } from '../PageShell.jsx';
import styles from './styles/HomePage.css?inline';

export default function HomePage() {
  return (
    <PageShell pageId="home" title={"Track Loved Ones - Always connect with your world"} description={"Secure, consent-driven location sharing with automated 24-hour permission expiry, zero data commodification, and constitutional privacy safeguards."} styles={styles}>
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
            <ul className="nav-menu">
              <li><a href="#about">About Ecosystem</a></li>
              <li><a href="#privacy-guarantee">Privacy Guarantee</a></li>
              <li><a href="#emergency-sos">Emergency SOS</a></li>
              <li><a href="/legal-education">Legal Education</a></li>
              <li><a href="/corporate-offerings">Corporate Offerings</a></li>
              <li><a href="/vision-mission-values">Vision &amp; Values</a></li>
              <li className="dropdown">
                <a href="#legal">Legal Policies ▾</a>
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
        <section className="hero-section">
          <div className="hero-container">
            <div>
              <div className="hero-badge">
                <span>🛡️</span>
                <span>100% Free · Funded by Citizen Legal Education</span>
              </div>
              <h1 className="hero-title">
                Real-Time Family Safety. <br />
                <span style={{color: 'var(--accent-gold)'}}>Zero Surveillance Guilt.</span>
              </h1>
              <p className="hero-subtitle">
                Always connect with your world by choosing exactly who you wish to connect with. We send the invite on your behalf. Protected by our automated 24-hour permission expiry standard, so family sharing remains a conscious, mutual daily choice.
              </p>
              <div className="hero-pills">
                <div className="pill"><span className="check">✓</span> Automated 24h Permission Expiry</div>
                <div className="pill"><span className="check">✓</span> Zero Location Database Logs</div>
                <div className="pill"><span className="check">✓</span> Domestic Sovereign Servers</div>
                <div className="pill"><span className="check">✓</span> 1-Tap SOS Dispatch</div>
              </div>
              <div className="hero-cta-row">
                <a href="#about" className="btn-outline-lg">
                  <span>Explore Ecosystem</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section-wrap">
          <div className="sec-kicker">Transparent Operational Blueprint</div>
          <h2 className="sec-title">About Our Ecosystem</h2>
          <p className="sec-sub">Engineered to balance unconditional family care with uncompromised human dignity.</p>
          <div className="ecosystem-grid">
            <div className="eco-card-main">
              <h3>Built for Family Protection, Not Data Mining</h3>
              <p>Track Loved Ones was founded on a simple truth: you shouldn't have to surrender your family's personal whereabouts to advertising cartels just to ensure your child arrived safely at school or your elderly parents reached home.</p>
              <p>Track Loved Ones is the consumer brand of <strong>People Connect</strong>, the company that builds, operates and stands behind every part of this ecosystem.</p>
              <p>We eliminated persistent tracking databases. In our ecosystem, coordinates flow directly in encrypted volatile memory and dissolve the moment the mutual session concludes. No location history is ever archived or monetized.</p>
              <div style={{fontSize: 13, fontWeight: 'bold', color: 'var(--primary-light)'}}>
                ✓ DPDP Act 2023 Compliant · Zero-History Architecture
              </div>
            </div>
            <div className="eco-card-highlight">
              <div style={{fontSize: 11, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: 1, color: 'var(--accent-gold)', marginBottom: 6}}>Ethical Business Model</div>
              <h3>Funded by Public Legal Literacy</h3>
              <p>Unlike conventional tracking apps that silently bundle GPS histories into hedge fund datasets, our domestic operations are funded ethically through our daily legal education video channel on YouTube.</p>
              <p>Every single day, we break down an Indian legal statute section-by-section for ordinary citizens. The monetization from this public service sustains our entire server footprint, keeping our family app 100% free forever.</p>
              <a href="/legal-education" style={{color: 'var(--accent-gold)', fontSize: 13, fontWeight: 'bold', textDecoration: 'none'}}>Learn About Our YouTube Legal Series →</a>
            </div>
          </div>
        </section>
        <section id="privacy-guarantee" style={{background: '#F9FAFB', padding: '70px 24px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)'}}>
          <div style={{maxWidth: 1100, margin: '0 auto'}}>
            <div className="sec-kicker">Statutory Commitments</div>
            <h2 className="sec-title">PRIVACY &amp; CONVENIENCE GUARANTEE</h2>
            <p className="sec-sub">Three non-negotiable promises that safeguard your digital liberty every single day.</p>
            <div className="guarantee-grid">
              <div className="g-card">
                <div>
                  <div className="g-icon">⏱️</div>
                  <h4>Automated 24-Hour Permission Expiry</h4>
                  <p>For your complete privacy, all tracking permissions automatically expire after 24 hours. A fresh request must be sent and accepted every day to resume sharing. We believe continuous tracking should always be a conscious choice.</p>
                </div>
                <span className="g-tag">Active Expiry Standard</span>
              </div>
              <div className="g-card">
                <div>
                  <div className="g-icon">📶</div>
                  <h4>You Choose Who to Connect With</h4>
                  <p>You decide who you wish to connect with, and we send the invite on your behalf. Nobody is added without your choice, and the connection only starts once your loved one accepts.</p>
                </div>
                <span className="g-tag">Invite on Your Behalf</span>
              </div>
              <div className="g-card">
                <div>
                  <div className="g-icon">⚖️</div>
                  <h4>YouTube Channel Service Monetization</h4>
                  <p>We provide general knowledge about Indian laws, Section wise of all prevailing acts which are of interest to general public. We publish one video on daily basis on our YouTube channel and all the monetization for providing you the services are realized from there.</p>
                </div>
                <span className="g-tag">Educational Funding</span>
              </div>
            </div>
            <div className="simulator-box">
              <div className="sim-header">
                <div>
                  <div style={{fontSize: 11, fontFamily: 'monospace', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: 4}}>Live Simulator</div>
                  <div className="sim-title">Automated Permission Expiry Engine</div>
                </div>
                <div className="timer-display" id="expiry-timer">14:28:45</div>
              </div>
              <div className="sim-progress-bar">
                <div className="sim-progress-fill" id="timer-bar" />
              </div>
              <p style={{fontSize: '13.5px', color: '#CBD5E1', marginBottom: 20, lineHeight: '1.6'}}>
                When this clock strikes <strong>00:00:00</strong>, all location relay channels sever automatically. No background GPS runs. No lingering access exists until your loved one consciously grants a fresh 24-hour token.
              </p>
              <div className="sim-controls">
                <button className="btn-sim primary" data-legacy-onclick={"resetTimer()"} onClick={(event) => runPageInteraction("resetTimer()", event, event.currentTarget)}>Grant Fresh 24-Hour Consent (Reset)</button>
                <button className="btn-sim" data-legacy-onclick={"expireNow()"} onClick={(event) => runPageInteraction("expireNow()", event, event.currentTarget)}>Trigger Immediate Expiry (Revoke)</button>
              </div>
            </div>
          </div>
        </section>
        <section id="emergency-sos" className="section-wrap" style={{paddingTop: 0}}>
          <div className="sec-kicker">Distress Protocol</div>
          <h2 className="sec-title">Emergency SOS &amp; Silent Alarm</h2>
          <p className="sec-sub">In critical distress, one long press overrides silent mode on responders' phones and shares immediate coordinates.</p>
          <div className="sos-box">
            <div style={{display: 'flex', alignItems: 'center', gap: 30, flexWrap: 'wrap'}}>
              <button className="sos-btn" id="sos-btn" data-legacy-onclick={"triggerSOS()"} onClick={(event) => runPageInteraction("triggerSOS()", event, event.currentTarget)}>SOS</button>
              <div style={{flex: 1, minWidth: 260}}>
                <h3 style={{color: '#991B1B', fontSize: 18, marginBottom: 6}} id="sos-status-title">Ready for Emergency Dispatch</h3>
                <p style={{fontSize: 13, color: '#7F1D1D', lineHeight: '1.6', marginBottom: 12}} id="sos-status-desc">
                  Press the red button to simulate a 5-second countdown panic alert with emergency contact notification and turn-by-turn responder navigation.
                </p>
                <div id="sos-countdown" style={{display: 'none', fontSize: 14, fontWeight: 'bold', color: '#DC2626', fontFamily: 'monospace'}}>
                  Dispatching telemetry in <span id="countdown-num">5</span>s... <button data-legacy-onclick={"cancelSOS()"} onClick={(event) => runPageInteraction("cancelSOS()", event, event.currentTarget)} style={{background: '#ffffff', border: '1px solid #DC2626', color: '#DC2626', padding: '3px 10px', borderRadius: 6, fontSize: 11, cursor: 'pointer', marginLeft: 8}}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="legal" className="statutory-section">
          <div style={{maxWidth: 1200, margin: '0 auto'}}>
            <div className="sec-kicker">Comprehensive Legal Center</div>
            <h2 className="sec-title">Company Foundations &amp; Statutory Policies</h2>
            <p className="sec-sub">Direct access to all governing charters, legal disclosures, citizen curriculum, and enterprise frameworks:</p>
            <div className="hub-grid">
              <a href="/vision-mission-values" className="hub-card">
                <div>
                  <div className="hub-icon">🌱</div>
                  <h4>Vision, Mission &amp; Values</h4>
                  <p>Our long-term aspirations, human dignity philosophy, and the 6 non-negotiable core values.</p>
                </div>
                <span className="hub-link-text">Read Charter →</span>
              </a>
              <a href="/legal-education" className="hub-card">
                <div>
                  <div className="hub-icon">⚖️</div>
                  <h4>Citizen Legal Education</h4>
                  <p>Section-by-section breakdown of DPDP Act 2023, BNS, IT Act, MV Act, and our YouTube model.</p>
                </div>
                <span className="hub-link-text">Explore Curriculum →</span>
              </a>
              <a href="/corporate-offerings" className="hub-card">
                <div>
                  <div className="hub-icon">🏢</div>
                  <h4>Corporate Offerings</h4>
                  <p>Mandatory recruiter KYC (INR 250 fee), DPDPA fiduciary shift, and workforce field safety circles.</p>
                </div>
                <span className="hub-link-text">Enterprise Portal →</span>
              </a>
              <a href="/disclaimer" className="hub-card">
                <div>
                  <div className="hub-icon">⚠️</div>
                  <h4>Disclaimer Notice</h4>
                  <p>Emergency assistance boundaries, telecom signal dependencies, and non-liability terms.</p>
                </div>
                <span className="hub-link-text">View Disclaimer →</span>
              </a>
              <a href="/privacy-policy" className="hub-card">
                <div>
                  <div className="hub-icon">🔒</div>
                  <h4>Privacy Policy &amp; DPDP 2023</h4>
                  <p>Full statutory transparency, zero-location storage proof, and grievance redressal contacts.</p>
                </div>
                <span className="hub-link-text">Read Privacy Policy →</span>
              </a>
              <a href="/refunds-cancellation" className="hub-card">
                <div>
                  <div className="hub-icon">💳</div>
                  <h4>Refunds &amp; Cancellation</h4>
                  <p>INR 250 Recruiter KYC fee policy, non-refundable third-party check terms, and appeal windows.</p>
                </div>
                <span className="hub-link-text">Read Refund Terms →</span>
              </a>
              <a href="/terms-of-use" className="hub-card">
                <div>
                  <div className="hub-icon">📜</div>
                  <h4>Terms of Use</h4>
                  <p>Section 79 IT Act intermediary protections, acceptable use, and minor safety prohibitions.</p>
                </div>
                <span className="hub-link-text">Read Terms of Use →</span>
              </a>
            </div>
          </div>
        </section>
        <section className="section-wrap">
          <div className="sec-kicker">Common Questions</div>
          <h2 className="sec-title">Frequently Asked Questions</h2>
          <p className="sec-sub">Clear answers regarding privacy, 24-hour expiry, battery consumption, and our educational business model.</p>
          <div style={{maxWidth: 900, margin: '0 auto'}}>
            <div className="faq-item">
              <div className="faq-question" data-legacy-onclick={"toggleFaq(this)"} onClick={(event) => runPageInteraction("toggleFaq(this)", event, event.currentTarget)}>
                <span>Why does tracking permission automatically expire after 24 hours?</span>
                <span>▾</span>
              </div>
              <div className="faq-answer">
                We believe continuous, perpetual tracking should never become an unmonitored default. Requiring a fresh mutual connection request every 24 hours guarantees that both individuals remain fully conscious of and in agreement with location sharing, honoring constitutional privacy norms.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-legacy-onclick={"toggleFaq(this)"} onClick={(event) => runPageInteraction("toggleFaq(this)", event, event.currentTarget)}>
                <span>How is the Track Loved Ones app funded if it is completely free?</span>
                <span>▾</span>
              </div>
              <div className="faq-answer">
                We do not sell personal data, display intrusive ads, or charge monthly subscription fees to families. Instead, our operational and server infrastructure is fully funded through the monetization of our daily educational YouTube video series covering Indian legal acts and citizen rights section-by-section.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-legacy-onclick={"toggleFaq(this)"} onClick={(event) => runPageInteraction("toggleFaq(this)", event, event.currentTarget)}>
                <span>Do you store my location coordinates on your servers?</span>
                <span>▾</span>
              </div>
              <div className="faq-answer">
                No. Our architecture uses Zero-Location-Storage. Coordinates are processed transiently in volatile system memory solely for real-time relay to the family member you chose to connect with. Once delivered to your family member's screen, the telemetry is discarded and never written to hard drives.
              </div>
            </div>
            <div className="faq-item">
              <div className="faq-question" data-legacy-onclick={"toggleFaq(this)"} onClick={(event) => runPageInteraction("toggleFaq(this)", event, event.currentTarget)}>
                <span>How do I connect with a loved one?</span>
                <span>▾</span>
              </div>
              <div className="faq-answer">
                You choose who you wish to connect with, and we send the invite on your behalf. Once they accept, you are connected, without any tedious multi-step pairing.
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-col">
              <div style={{display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12}}>
                <span style={{fontSize: 22}}>🛡️</span>
                <strong style={{color: '#ffffff', fontSize: 16}}>Track Loved Ones</strong>
              </div>
              <p style={{lineHeight: '1.7', marginBottom: 16, textAlign: 'justify'}}>
                Always connect with your world. Built with strict adherence to Indian privacy laws, automated 24-hour permission expiry, zero location storage, and sovereign domestic servers.
              </p>
              <div style={{fontSize: 12, color: 'var(--accent-gold)'}}>
                People Connect · Brand: Track Loved Ones
              </div>
            </div>
            <div className="footer-col">
              <h5>Platform &amp; Features</h5>
              <ul>
                <li><a href="#about">About Our Ecosystem</a></li>
                <li><a href="#privacy-guarantee">Privacy &amp; Convenience Guarantee</a></li>
                <li><a href="#emergency-sos">Emergency SOS Distress</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company &amp; Public Mission</h5>
              <ul>
                <li><a href="/vision-mission-values">Vision, Mission &amp; Values</a></li>
                <li><a href="/legal-education">Citizen Legal Education</a></li>
                <li><a href="/corporate-offerings">Corporate Offerings &amp; KYC</a></li>
                <li><a href="https://www.youtube.com" target="_blank">YouTube Legal Series</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Statutory Legal Center</h5>
              <ul>
                <li><a href="/disclaimer">Disclaimer Notice</a></li>
                <li><a href="/privacy-policy">Privacy Policy (DPDP 2023)</a></li>
                <li><a href="/refunds-cancellation">Refunds &amp; Cancellation (KYC)</a></li>
                <li><a href="/terms-of-use">Terms of Use (IT Act Sec 79)</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 People Connect. Operating through its brand Track Loved Ones. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </PageShell>
  );
}
