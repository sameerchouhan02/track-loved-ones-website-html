import PageShell, { runPageInteraction } from '../PageShell.jsx';
import styles from './styles/RefundsCancellationPage.css?inline';

export default function RefundsCancellationPage() {
  return (
    <PageShell
      pageId="refundsCancellation"
      title="Refunds, Cancellation & Corporate KYC Policy | Track Loved Ones by People Connect"
      description="Refunds, cancellation, subscription and corporate KYC verification policy for Track Loved Ones, operated by People Connect at 2A-108 NIT Faridabad, Haryana 121001. Details free end-user access, daily law-awareness video requirement, and INR 250 corporate KYC fee terms."
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
                  <a href="/refunds-cancellation" className="active" aria-current="page">Refunds &amp; KYC Cancellation</a>
                  <a href="/terms-of-use">Terms of Use</a>
                </div>
              </li>
            </ul>
          </div>
        </header>
        <main className="content">
          <h1>Refunds &amp; Cancellation Policy</h1>
          <div style={{color: 'var(--text-muted)', fontSize: 13, fontFamily: 'monospace', marginBottom: 20}}>
            Last Updated: October 2026 · Issued by People Connect (Regd. Office: 2A-108 NIT Faridabad, Haryana 121001)
          </div>
          <p>This policy explains the current payment, verification, app-access and job-listing terms for <strong>Track Loved Ones</strong>, a platform owned and operated by <strong>People Connect</strong>, a sole proprietorship firm having its registered office at 2A-108 NIT Faridabad, Haryana 121001. These terms may be updated if our services or pricing change.</p>
          <h2>1. End-User App Subscription</h2>
          <p>As of the date of this policy, Track Loved Ones does not charge end users any app subscription fee. There are no monthly or annual subscription plans, free trials, or automatic subscription renewals for end users at present.</p>
          <h2>2. Daily Law-Awareness Video for Continued App Use</h2>
          <p>To continue using the app, an end user is required to watch one law-awareness video each day. The daily video may be watched either within the app or through our official YouTube channel. This daily video requirement is an app-use condition and is not a subscription or subscription payment.</p>
          <p><strong>Exemptions:</strong> The daily law-awareness video requirement does not apply to child accounts or corporate accounts.</p>
          <h2>3. Corporate Verification &amp; Job Listings</h2>
          <p>Companies must complete the applicable verification process before they can publish job listings. Job listings are currently free for verified companies. No job-posting fee is being charged at present.</p>
          <h2>4. Corporate Verification Fee, Refunds &amp; Cancellation</h2>
          <p>The corporate KYC processing and verification fee remains <strong>INR 250 (inclusive of all applicable statutory taxes)</strong>. This fee is separate from job-listing fees; verified companies can currently post job listings free of charge.</p>
          <table className="fee-table">
            <thead>
              <tr>
                <th>Payment Item</th>
                <th>Fee</th>
                <th>Refund Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Corporate KYC Processing &amp; Verification</strong></td>
                <td>INR 250 (inclusive of all applicable statutory taxes)</td>
                <td><strong style={{color: '#B91C1C'}}>Non-refundable once processing starts</strong></td>
              </tr>
            </tbody>
          </table>
          <p>The INR 250 fee covers third-party identity-verification services. Once the verification process has started, the fee is non-refundable, even if the company does not pass the verification check, subject to applicable law.</p>
          <p>Since there is currently no end-user app subscription, there is no subscription cancellation or recurring subscription payment to stop. If any paid service is introduced in the future, its price, payment, cancellation and refund terms will be displayed before the user or company makes a payment.</p>
          <h2>5. Right to Modify, Amend or Discontinue</h2>
          <p>People Connect (a sole proprietorship firm having its registered office at 2A-108 NIT Faridabad, Haryana 121001) reserves the right, at its discretion, to modify, amend, update, add to, suspend, restrict or discontinue any part of the Track Loved Ones app, its features, services, content, eligibility criteria, policies, terms and conditions, fees or operational procedures, at any time, subject to applicable laws and regulations. Where required by applicable law, or where a change materially affects users, People Connect will provide notice through the app, its website, email or another appropriate communication channel. Continued use of the app or services after an updated policy or terms take effect will be subject to the revised terms, to the extent permitted by law. Nothing in this clause limits any rights that users may have under applicable law.</p>
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
