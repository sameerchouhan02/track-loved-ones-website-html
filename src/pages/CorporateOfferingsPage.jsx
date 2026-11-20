import PageShell, { runPageInteraction } from '../PageShell.jsx';
import styles from './styles/CorporateOfferingsPage.css?inline';

export default function CorporateOfferingsPage() {
  return (
    <PageShell pageId="corporateOfferings" title={"Business Expansion & Corporate Offerings | Track Loved Ones · People Connect"} description={""} styles={styles}>
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
              <li><a href="/corporate-offerings" className="active" aria-current="page">Corporate Offerings</a></li>
              <li><a href="/vision-mission-values">Vision &amp; Values</a></li>
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
          <div className="kicker">People Connect · Business Expansion &amp; Verified Opportunities Place</div>
          <h1>Business Expansion Opportunities &amp; Corporate Offerings</h1>
          <div className="explicit-policy-box">
            <h4>Dedicated Business Expansion Place (No Workforce Surveillance)</h4>
            <p>
              <strong>People Connect through its brand Track Loved Ones does not provide</strong> enterprise field safety circles or workforce tracking. We offer a dedicated <strong>Business Expansion Opportunities place</strong>. Organizations and business owners looking for expansion of their business can post legitimate business expansion opportunities (dealerships, franchises, distribution networks, agency partnerships) and verified job openings post-verification in compliance with the laws of India.
            </p>
          </div>
          <div className="tabs-bar">
            <button className="tab-btn active" data-legacy-onclick={"switchTab('overview')"} onClick={(event) => runPageInteraction("switchTab('overview')", event, event.currentTarget)}>Offerings Overview &amp; KYC</button>
            <button className="tab-btn" data-legacy-onclick={"switchTab('postings')"} onClick={(event) => runPageInteraction("switchTab('postings')", event, event.currentTarget)}>Verified Expansion &amp; Job Opportunities</button>
            <button className="tab-btn" data-legacy-onclick={"switchTab('create')"} onClick={(event) => runPageInteraction("switchTab('create')", event, event.currentTarget)}>Post Business Expansion Opportunity</button>
            <button className="tab-btn" data-legacy-onclick={"switchTab('agreement')"} onClick={(event) => runPageInteraction("switchTab('agreement')", event, event.currentTarget)}>Employer Intermediary Agreement</button>
          </div>
          <div id="tab-overview" className="tab-content active">
            <div className="pillars-grid">
              <div className="pillar-card">
                <div>
                  <div className="pillar-icon">📈</div>
                  <div className="pillar-kicker">Primary Corporate Offering</div>
                  <h3>Business Expansion Place</h3>
                  <p>A dedicated marketplace for organizations and business owners looking for expansion of their business. Post state/district dealerships, master franchises, wholesale distributorships, and authorized commercial partnerships.</p>
                </div>
                <div className="pillar-footer" style={{color: '#B45309'}}>
                  ✓ Franchise, Dealership &amp; Distribution
                </div>
              </div>
              <div className="pillar-card">
                <div>
                  <div className="pillar-icon">💼</div>
                  <div className="pillar-kicker">Compliant Talent Recruitment</div>
                  <h3>Verified Job Postings</h3>
                  <p>Post verified professional employment vacancies to a trusted community post-validation. Strict prohibitions protect applicants from illegal candidate fee exploitation and fraudulent recruiters.</p>
                </div>
                <div className="pillar-footer" style={{color: '#123424'}}>
                  ✓ Zero Candidate Application Fees
                </div>
              </div>
              <div className="pillar-card">
                <div>
                  <div className="pillar-icon">🛡️</div>
                  <div className="pillar-kicker">Statutory Anti-Fraud KYC</div>
                  <h3>MCA Check &amp; Location Isolation</h3>
                  <p>Mandatory MCA CIN/GSTIN validation with an INR 250 KYC fee. Corporate accounts have 100% location blindness with ZERO access to personal family tracking circles or user device coordinates.</p>
                </div>
                <div className="pillar-footer" style={{color: '#047857'}}>
                  ✓ INR 250 Fee · 100% Location Blindness
                </div>
              </div>
            </div>
            <div className="banner-action">
              <div style={{maxWidth: 600}}>
                <div style={{fontSize: 11, fontFamily: 'monospace', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: 6}}>Looking for Expansion of Your Business?</div>
                <h2 style={{fontSize: 24, marginBottom: 8}}>Post Your Business Expansion Opportunity</h2>
                <p style={{fontSize: '13.5px', color: '#D1D5DB', margin: 0, textAlign: 'justify'}}>
                  Validate your Corporate Identity Number (CIN/GSTIN) against the Ministry of Corporate Affairs, accept the 4 statutory DPDP Act clauses, and reach verified business partners and franchisees across India.
                </p>
              </div>
              <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                <button data-legacy-onclick={"switchTab('create')"} onClick={(event) => runPageInteraction("switchTab('create')", event, event.currentTarget)} className="banner-btn" style={{border: 'none', cursor: 'pointer'}}>Post Opportunity Now →</button>
                <button data-legacy-onclick={"switchTab('postings')"} onClick={(event) => runPageInteraction("switchTab('postings')", event, event.currentTarget)} className="banner-btn-secondary" style={{border: 'none', cursor: 'pointer'}}>Browse Verified Posts</button>
              </div>
            </div>
            <div className="kyc-box">
              <div className="kyc-header">
                <div>
                  <div style={{fontSize: 11, fontFamily: 'monospace', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--primary-light)'}}>Statutory Intermediary Standard</div>
                  <h3>Corporate KYC Verification &amp; Anti-Fraud Policy</h3>
                </div>
                <span className="fee-badge">Strictly Non-Refundable · INR 250 Fee</span>
              </div>
              <p>Under Section 79 of the Information Technology Act, 2000, Track Loved Ones acts strictly as an intermediary. To uphold our safe harbour status and shield prospective commercial partners and job-seekers from fraudulent shell companies, every entity undergoes corporate identity checks before posting:</p>
              <div className="check-grid">
                <div className="check-item">
                  <strong>1. Ministry of Corporate Affairs (MCA) Validation</strong>
                  Verification of corporate CIN, GSTIN registration, active bank mandate, and registered office physical address in India.
                </div>
                <div className="check-item">
                  <strong>2. Authorized Officer Verification</strong>
                  PAN card and authorized signatory verification of the business director, partner, or recruiter posting opportunities on the platform.
                </div>
              </div>
              <div className="alert-amber">
                <strong>Mandatory Fee Notice:</strong> Because this nominal charge directly covers non-recoverable third-party identity API calls and verification costs, the INR 250 fee is non-refundable once initiated, regardless of verification outcome.
              </div>
            </div>
            <div className="prohibit-card">
              <h3>Prohibited Conduct Policy for Businesses &amp; Employers</h3>
              <p>Users, corporate recruiters, and businesses are <strong>strictly prohibited</strong> from soliciting private location tracking links from candidates or users through marketplace posts, publishing deceptive job descriptions or fake dealership claims, demanding unauthorized application fees, or attempting to monitor minors.</p>
              <p style={{margin: 0}}>Any violation results in immediate forfeiture of corporate KYC status, lifetime banning from People Connect, and mandatory reporting to Indian law enforcement authorities.</p>
            </div>
          </div>
          <div id="tab-postings" className="tab-content">
            <h2 style={{fontSize: 22, color: 'var(--primary)', marginBottom: 6}}>Verified Business Expansion &amp; Job Opportunities</h2>
            <p style={{color: 'var(--text-muted)', fontSize: 14, marginBottom: 25}}>All listings verified via MCA CIN/GSTIN registry in compliance with the laws of India:</p>
            <div className="opp-card">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10}}>
                <div>
                  <span className="opp-tag expansion">Business Expansion · Master Franchise</span>
                  <span className="verified-tag">✓ MCA Active · KYC Cleared</span>
                  <h3 style={{fontSize: 18, color: 'var(--primary)', marginTop: 6}}>State Master Franchisee &amp; Commercial Distribution Partner</h3>
                  <div style={{fontSize: 12, color: 'var(--text-muted)'}}>
                    <strong>Zenith Health &amp; Safety Solutions Pvt Ltd</strong> · CIN: U85100MH2021PTC354920
                  </div>
                </div>
                <div style={{textAlign: 'right', fontSize: 12}}>
                  <span style={{color: '#92400E', fontWeight: 'bold'}}>Investment: ₹10 Lakhs - ₹25 Lakhs</span>
                </div>
              </div>
              <p style={{fontSize: 13, color: 'var(--text-muted)', marginBottom: 15, textAlign: 'justify'}}>
                Inviting established commercial distributors, pharmacy retail owners, and business entrepreneurs looking to expand our certified emergency response kits and healthcare diagnostics chain across tier-2 cities.
              </p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 12, fontSize: 12, color: 'var(--text-muted)'}}>
                <span>📍 Territory: Pune &amp; Western Maharashtra</span>
                <button data-legacy-onclick={"alert('Inquiry submitted! Corporate partner will contact you under DPDP Act provisions.')"} onClick={(event) => runPageInteraction("alert('Inquiry submitted! Corporate partner will contact you under DPDP Act provisions.')", event, event.currentTarget)} style={{background: '#B45309', color: '#ffffff', border: 'none', padding: '7px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer'}}>Contact for Expansion →</button>
              </div>
            </div>
            <div className="opp-card">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10}}>
                <div>
                  <span className="opp-tag expansion">Business Expansion · Dealership</span>
                  <span className="verified-tag">✓ MCA Active · KYC Cleared</span>
                  <h3 style={{fontSize: 18, color: 'var(--primary)', marginTop: 6}}>Authorized Solar Energy &amp; EV Charger Dealership Network</h3>
                  <div style={{fontSize: 12, color: 'var(--text-muted)'}}>
                    <strong>SuryaTech Clean Energy India Pvt Ltd</strong> · CIN: U40106DL2020PTC368941
                  </div>
                </div>
                <div style={{textAlign: 'right', fontSize: 12}}>
                  <span style={{color: '#92400E', fontWeight: 'bold'}}>Investment: ₹15 Lakhs - ₹35 Lakhs</span>
                </div>
              </div>
              <p style={{fontSize: 13, color: 'var(--text-muted)', marginBottom: 15, textAlign: 'justify'}}>
                Seeking verified local business owners to establish authorized solar rooftop installation depots, commercial EV charging partnerships, and regional customer service centers.
              </p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 12, fontSize: 12, color: 'var(--text-muted)'}}>
                <span>📍 Territory: Jaipur, Kota &amp; Jodhpur (Rajasthan)</span>
                <button data-legacy-onclick={"alert('Inquiry submitted! Corporate partner will contact you under DPDP Act provisions.')"} onClick={(event) => runPageInteraction("alert('Inquiry submitted! Corporate partner will contact you under DPDP Act provisions.')", event, event.currentTarget)} style={{background: '#B45309', color: '#ffffff', border: 'none', padding: '7px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer'}}>Contact for Expansion →</button>
              </div>
            </div>
            <div className="opp-card">
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 10, marginBottom: 10}}>
                <div>
                  <span className="opp-tag job">Job Vacancy · Legal &amp; Compliance</span>
                  <span className="verified-tag">✓ MCA Active · KYC Cleared</span>
                  <h3 style={{fontSize: 18, color: 'var(--primary)', marginTop: 6}}>Senior Corporate Compliance &amp; DPDP Act Legal Auditor</h3>
                  <div style={{fontSize: 12, color: 'var(--text-muted)'}}>
                    <strong>TrustShield Corporate Advisors LLP</strong> · CIN: AAZ-9821
                  </div>
                </div>
                <div style={{textAlign: 'right', fontSize: 12}}>
                  <span style={{color: 'var(--primary-light)', fontWeight: 'bold'}}>Full-Time Professional</span>
                </div>
              </div>
              <p style={{fontSize: 13, color: 'var(--text-muted)', marginBottom: 15, textAlign: 'justify'}}>
                Audit corporate vendor contracts and data pipelines for strict alignment with the Digital Personal Data Protection Act, 2023 and Section 79 intermediary safe harbour guidelines.
              </p>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: 12, fontSize: 12, color: 'var(--text-muted)'}}>
                <span>📍 Location: Bengaluru, Karnataka (Hybrid)</span>
                <button data-legacy-onclick={"alert('Application started! Professional CV submission strictly complies with DPDPA 2023.')"} onClick={(event) => runPageInteraction("alert('Application started! Professional CV submission strictly complies with DPDPA 2023.')", event, event.currentTarget)} style={{background: '#123424', color: '#ffffff', border: 'none', padding: '7px 16px', borderRadius: 6, fontWeight: 'bold', cursor: 'pointer'}}>Apply for Opening →</button>
              </div>
            </div>
          </div>
          <div id="tab-create" className="tab-content">
            <h2 style={{fontSize: 22, color: 'var(--primary)', marginBottom: 6}}>Post Business Expansion or Job Opportunity</h2>
            <p style={{color: 'var(--text-muted)', fontSize: 14, marginBottom: 25}}>Organizations and business owners looking for expansion of their business can publish verified postings post-verification:</p>
            <div className="form-box">
              <form onSubmit={(event) => runPageInteraction("event.preventDefault(); alert('Opportunity submitted! Following MCA CIN verification and compliance clearance, your posting will go live within 2 hours.'); this.reset();", event, event.currentTarget)}>
                <div className="form-group">
                  <label>Posting Nature *</label>
                  <select id="posting-type" onChange={(event) => runPageInteraction("toggleExpansionFields(this.value)", event, event.currentTarget)}>
                    <option value="expansion">Business Expansion Opportunity (Franchise, Dealership, Distributorship)</option>
                    <option value="job">Corporate Job Vacancy (Full-Time, Contract)</option>
                  </select>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15}}>
                  <div className="form-group">
                    <label>Company Legal Name *</label>
                    <input type="text" placeholder="e.g. Apex Health Logistics Pvt Ltd" required />
                  </div>
                  <div className="form-group">
                    <label>Corporate CIN / GSTIN *</label>
                    <input type="text" placeholder="e.g. U72900DL2024PTC123456" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Opportunity Title *</label>
                  <input type="text" placeholder="e.g. State Master Franchisee / Regional Solar Equipment Dealership" required />
                </div>
                <div id="expansion-fields" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15}}>
                  <div className="form-group">
                    <label>Expansion Model *</label>
                    <select>
                      <option value="franchise">Master Franchise / Franchisee</option>
                      <option value="dealership">Authorized Dealership Network</option>
                      <option value="distributorship">Wholesale Distributorship</option>
                      <option value="agency">Authorized Sales &amp; Service Agency</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Estimated Investment / Space *</label>
                    <input type="text" placeholder="e.g. ₹5 Lakhs - ₹15 Lakhs / 500 sq.ft space" />
                  </div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15}}>
                  <div className="form-group">
                    <label>Industry / Sector Category *</label>
                    <input type="text" placeholder="e.g. Healthcare, Retail, Clean Energy, Supply Chain" required />
                  </div>
                  <div className="form-group">
                    <label>Target Territory / City / Region *</label>
                    <input type="text" placeholder="e.g. Western Maharashtra, Delhi NCR, Pan-India" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Registered Commercial Physical Address (Static Metadata Only) *</label>
                  <input type="text" placeholder="Official physical address in India" required />
                </div>
                <div className="form-group">
                  <label>Opportunity Description &amp; Partnership Terms *</label>
                  <textarea rows={3} placeholder="Describe the business expansion scope, support provided to business owners, or job specifications..." required defaultValue={""} />
                </div>
                <div className="form-group" style={{background: '#F9FAFB', padding: 14, borderRadius: 8, border: '1px solid var(--border)'}}>
                  <label style={{display: 'flex', gap: 10, cursor: 'pointer', margin: 0, fontSize: 12, fontWeight: 'normal'}}>
                    <input type="checkbox" required style={{width: 'auto', marginTop: 3}} />
                    <span>I declare that this posting is an authentic business expansion or employment offering in compliance with the laws of India. I certify that our entity will not solicit private GPS coordinates or charge unauthorized candidate fees, under penalty of law.</span>
                  </label>
                </div>
                <button type="submit" className="btn-submit">Publish Verified Opportunity to Marketplace →</button>
              </form>
            </div>
          </div>
          <div id="tab-agreement" className="tab-content">
            <h2 style={{fontSize: 22, color: 'var(--primary)', marginBottom: 6}}>Employer &amp; Business Partner Notice and Safe Harbour Agreement</h2>
            <p style={{color: 'var(--text-muted)', fontSize: 14, marginBottom: 25}}>Statutory terms under Section 79 of the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023:</p>
            <div className="form-box">
              <div style={{display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 25, fontSize: 13}}>
                <div style={{background: '#F9FAFB', padding: 16, borderRadius: 10, border: '1px solid var(--border)'}}>
                  <strong>1. STRICT PURPOSE LIMITATION &amp; PROHIBITION OF SECONDARY USE:</strong> Information received through this platform shall be utilized exclusively for evaluating the candidate for the specific business expansion opportunity or job vacancy posted.
                </div>
                <div style={{background: '#F9FAFB', padding: 16, borderRadius: 10, border: '1px solid var(--border)'}}>
                  <strong>2. PROHIBITION OF CONTINUOUS SURVEILLANCE &amp; LOCATION SOLICITATION:</strong> The business entity shall not solicit, demand, or require applicants, candidates, or business associates to generate ongoing peer-to-peer real-time GPS tracking links as a condition of business partnership or employment.
                </div>
                <div style={{background: '#F9FAFB', padding: 16, borderRadius: 10, border: '1px solid var(--border)'}}>
                  <strong>3. DATA ERASURE UPON WITHDRAWAL OF CONSENT:</strong> Pursuant to Section 8 of the DPDPA, 2023, the entity, as an independent Data Fiduciary, covenants to permanently delete all personal data received within 30 days of receiving a written notice of consent revocation.
                </div>
                <div style={{background: '#F9FAFB', padding: 16, borderRadius: 10, border: '1px solid var(--border)'}}>
                  <strong>4. NO EMPLOYMENT OR CONTRACTUAL RELATIONSHIP DISCLAIMER:</strong> Track Loved Ones App acts solely as a technological intermediary; registration creates no agency, partnership, or labor-contractor arrangement between Track Loved Ones App and the company.
                </div>
              </div>
              <button data-legacy-onclick={"alert('Agreement Confirmed! Workspace Token activated. You may now post business expansion opportunities.'); switchTab('create');"} onClick={(event) => runPageInteraction("alert('Agreement Confirmed! Workspace Token activated. You may now post business expansion opportunities.'); switchTab('create');", event, event.currentTarget)} className="btn-submit" style={{width: '100%'}}>
                CONFIRM BUSINESS CREDENTIALS &amp; ACTIVATE WORKSPACE
              </button>
            </div>
          </div>
          <div className="nav-links-bar">
            <a href="/" className="btn-home">← Return to Main Website</a>
            <span style={{fontSize: 13, color: 'var(--text-muted)'}}>© 2026 People Connect. All rights reserved.</span>
          </div>
        </main>
        <footer>
          <p>© 2026 People Connect. Operating consumer applications under the Track Loved Ones Brand registry. All rights reserved.</p>
        </footer>
      </div>
    </PageShell>
  );
}
