import PageShell, { getConsentContext, runPageInteraction } from '../PageShell.jsx';
import styles from './styles/ConsentPage.css?inline';

export default function ConsentPage() {
  const { childName: safeChildName, maskedChildPhone } = getConsentContext();
  const timestamp = new Date().toUTCString();
  return (
    <PageShell pageId="consent" title={"TrackLovedOnes - Itemized Child Safety & Parental Consent"} description={""} styles={styles}>
      <div>
        <div className="dialog-container" id="dialogContainer">
          <div className="header">
            <div className="shield-badge">
              <svg viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="header-text">
              <div className="header-title" id="txtTitle">Itemized Privacy &amp; Child Safety Notice</div>
              <div className="header-subtitle" id="txtSubtitle">DPDP Act, 2023 Compliance · Section 9 Child Safety</div>
            </div>
            <button type="button" className="btn-close" data-legacy-onclick={"handleCancel()"} onClick={(event) => runPageInteraction("handleCancel()", event, event.currentTarget)} title="Close">×</button>
          </div>
          <div className="language-bar">
            <div className="lang-label">
              <svg viewBox="0 0 24 24">
                <circle cx={12} cy={12} r={10} />
                <line x1={2} y1={12} x2={22} y2={12} />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Notice Language / भाषा निवडा:</span>
            </div>
            <div className="lang-select-box">
              <select id="langSelect" onChange={(event) => runPageInteraction("changeLanguage(this.value)", event, event.currentTarget)}>
                <option value="en">English (English)</option>
                <option value="hi">हिन्दी (Hindi)</option>
                <option value="mr">मराठी (Marathi)</option>
                <option value="bn">বাংলা (Bengali)</option>
                <option value="te">తెలుగు (Telugu)</option>
                <option value="ta">தமிழ் (Tamil)</option>
                <option value="gu">ગુજરાતી (Gujarati)</option>
                <option value="kn">ಕನ್ನಡ (Kannada)</option>
                <option value="ml">മലയാളം (Malayalam)</option>
                <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
                <option value="or">ଓଡ଼ିଆ (Odia)</option>
                <option value="ur">اردو (Urdu)</option>
                <option value="as">অসমীয়া (Assamese)</option>
                <option value="ne">नेपाली (Nepali)</option>
                <option value="ma">मैथिली (Maithili)</option>
                <option value="sa">संस्कृतम् (Sanskrit)</option>
                <option value="sat">ᱥᱟᱱᱛᱟᱲᱤ (Santali)</option>
                <option value="ks">کٲشُر (Kashmiri)</option>
                <option value="sd">سنڌي (Sindhi)</option>
                <option value="ko">कोंकणी (Konkani)</option>
                <option value="mni">মণিপুরী (Manipuri)</option>
                <option value="brx">बोडो (Bodo)</option>
                <option value="doi">डोगरी (Dogri)</option>
              </select>
            </div>
          </div>
          <div className="child-ribbon">
            <div className="child-pill">
              <span className="pill-label">Child Account:</span>
              <strong className="pill-val">{safeChildName}</strong>
            </div>
            <div className="child-pill">
              <span className="pill-label">Registered Phone:</span>
              <strong className="pill-val">{maskedChildPhone}</strong>
              <span className="privacy-badge" title="Phone masked for child privacy under Section 9 DPDP Act">🔒
                Masked</span>
            </div>
          </div>
          <div className="policy-box">
            <div className="policy-text" id="txtPolicyIntro" style={{marginBottom: 8}} />
            <div className="table-card" id="part1TableCard">
              <div className="table-heading" id="txtPart1Title">PART 1: SPECIFIC PURPOSE &amp; DATA PRACTICES</div>
              <table className="dpdp-table">
                <thead>
                  <tr>
                    <th id="thScope" style={{width: '28%'}}>Scope</th>
                    <th id="thDetails" style={{width: '72%'}}>Policy Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="dpdp-td-head" id="tdPurposeLabel">🎯 Purpose</td>
                    <td id="tdPurposeVal">To monitor your child’s live geographic location solely to ensure
                      their personal safety, trigger geofencing alerts (e.g. arrival at school or home), and
                      transmit coordinates during user-initiated SOS emergencies.</td>
                  </tr>
                  <tr>
                    <td className="dpdp-td-head" id="tdDataLabel" style={{color: '#E6C567'}}>📊 Data Collected</td>
                    <td id="tdDataVal">Timestamps, device battery status, and emergency alert triggers.<br /><span style={{color: '#94a3b8', fontSize: '10.5px'}}>No continuous microphone, camera, or
                        browser monitoring is conducted.</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="policy-text" id="txtPolicyContent" />
          </div>
          <div className="checkboxes-list">
            <label className="checkbox-tile" id="tileRelationship">
              <input type="checkbox" id="chkRelationship" onChange={(event) => runPageInteraction("updateButtonState()", event, event.currentTarget)} />
              <span id="txtChkRelationship" />
            </label>
            <label className="checkbox-tile" id="tileLocation">
              <input type="checkbox" id="chkLocation" onChange={(event) => runPageInteraction("updateButtonState()", event, event.currentTarget)} />
              <span id="txtChkLocation" />
            </label>
            <label className="checkbox-tile" id="tileSimOwner">
              <input type="checkbox" id="chkSimOwner" onChange={(event) => runPageInteraction("updateButtonState()", event, event.currentTarget)} />
              <span id="txtChkSimOwner" />
            </label>
          </div>
          <div className="verification-box" id="verificationBox">
            <div className="verification-label-row">
              <span>Parent / Legal Guardian Aadhaar Number:</span>
              <span className="verification-badge">🔒 Masked ADV Storage (DPDP Compliant)</span>
            </div>
            <div className="input-field-wrap">
              <div className="phone-prefix" style={{fontSize: 15}}>🪪</div>
              <input type="text" id="parentAadhaar" placeholder="Enter 12-digit Aadhaar Number (e.g. 5432 1098 7654)" maxLength={16} onInput={(event) => runPageInteraction("formatAadhaarInput(this)", event, event.currentTarget)} />
              <button type="button" className="btn-send-otp" id="btnSendAadhaarOtp" data-legacy-onclick={"handleSendAadhaarOtp()"} onClick={(event) => runPageInteraction("handleSendAadhaarOtp()", event, event.currentTarget)}>SEND
                OTP</button>
            </div>
            <div style={{fontSize: '10.5px', color: '#94A3B8', marginTop: '-3px', marginBottom: 2}}>
              🛡️ UIDAI &amp; DPDPA Compliance: Raw Aadhaar is NEVER stored. System converts to masked
              <strong>XXXXXXXX1234</strong> &amp; SHA-256 ADV token.
            </div>
            <div className="otp-section" id="aadhaarOtpSection" style={{marginBottom: 8}}>
              <div className="otp-hint">
                <span>Enter 6-digit Aadhaar verification OTP:</span>
                <span className="resend-timer" id="aadhaarResendTimer" />
              </div>
              <div className="input-field-wrap">
                <input type="text" id="aadhaarOtpInput" placeholder="Enter 6-digit Aadhaar OTP" maxLength={6} onInput={(event) => runPageInteraction("updateButtonState()", event, event.currentTarget)} style={{letterSpacing: 5, fontWeight: 700, textAlign: 'center', fontSize: 16}} />
              </div>
            </div>
            <div className="verification-label-row" style={{marginTop: 4}}>
              <span>Parent Mobile Number (Aadhaar Linked / Registered):</span>
              <span className="verification-badge">SMS OTP Verification Gateway</span>
            </div>
            <div className="input-field-wrap">
              <div className="phone-prefix">🇮🇳 +91</div>
              <input type="tel" id="parentPhone" placeholder="Enter 10-digit Parent Mobile No." maxLength={10} />
              <button type="button" className="btn-send-otp" id="btnSendOtp" data-legacy-onclick={"handleSendOtp()"} onClick={(event) => runPageInteraction("handleSendOtp()", event, event.currentTarget)}>SEND OTP</button>
            </div>
            <div className="otp-section" id="otpSection">
              <div className="otp-hint">
                <span>Enter 6-digit verification OTP received on SMS:</span>
                <span className="resend-timer" id="resendTimer" />
              </div>
              <div className="input-field-wrap">
                <input type="text" id="otpInput" placeholder="Enter 6-digit OTP" maxLength={6} onInput={(event) => runPageInteraction("updateButtonState()", event, event.currentTarget)} style={{letterSpacing: 5, fontWeight: 700, textAlign: 'center', fontSize: 16}} />
              </div>
            </div>
          </div>
          <div id="statusHelperText" style={{padding: '0 20px 4px', fontSize: '11.5px', textAlign: 'center', fontWeight: 600, minHeight: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6}}>
          </div>
          <div className="button-row" style={{paddingTop: 8}}>
            <button type="button" className="btn-cancel" data-legacy-onclick={"handleCancel()"} onClick={(event) => runPageInteraction("handleCancel()", event, event.currentTarget)}>Cancel</button>
            <button type="button" className="btn-proceed" id="btnProceed" data-legacy-onclick={"openDeclarationModal()"} onClick={(event) => runPageInteraction("openDeclarationModal()", event, event.currentTarget)}>VERIFY OTP &amp;
              PROCEED</button>
          </div>
        </div>
        <div className="modal-overlay" id="declarationModal">
          <div className="modal-card">
            <div className="modal-header">
              <div>
                <div className="modal-title">
                  <span style={{fontSize: 18}}>📜</span>
                  <span id="modalHeaderTitle">Explicit Legal Consent Declaration</span>
                </div>
                <div className="modal-subtitle">Digital Personal Data Protection Act, 2023 · Statutory Filing</div>
              </div>
              <button type="button" className="btn-close" data-legacy-onclick={"closeDeclarationModal()"} onClick={(event) => runPageInteraction("closeDeclarationModal()", event, event.currentTarget)} title="Close">×</button>
            </div>
            <div className="declaration-card" style={{margin: 0}}>
              <div className="declaration-header" id="txtLegalDeclarationTitle">
                📜 Explicit Legal Consent Declaration (Section 5 &amp; 9 DPDP Act)
              </div>
              <div className="declaration-body" id="txtLegalDeclarationText" />
              <div className="declaration-note">
                ℹ️ By clicking "VERIFY OTP &amp; APPROVE CONSENT" below, this legal declaration along with your verified
                Aadhaar token will be permanently recorded in the immutable compliance audit ledger.
              </div>
            </div>
            <div className="modal-audit-strip">
              <div>🧒 Minor Child: <strong>{safeChildName}</strong></div>
              <div>🪪 Parent Aadhaar: <strong id="modalMaskedAadhaar">XXXXXXXX9123</strong></div>
              <div>📱 Verified Phone: <strong id="modalVerifiedPhone">+91 XXXXXXXXXX</strong></div>
            </div>
            <div className="button-row" style={{padding: '6px 0 0', gap: 10}}>
              <button type="button" className="btn-cancel" data-legacy-onclick={"closeDeclarationModal()"} onClick={(event) => runPageInteraction("closeDeclarationModal()", event, event.currentTarget)}>Go Back &amp; Edit</button>
              <button type="button" className="btn-proceed active" id="btnFinalApprove" data-legacy-onclick={"submitConsent()"} onClick={(event) => runPageInteraction("submitConsent()", event, event.currentTarget)}>VERIFY
                OTP &amp; APPROVE CONSENT</button>
            </div>
          </div>
        </div>
        <div className="dialog-container success-card" id="successContainer">
          <div className="success-icon">✅</div>
          <div className="success-title">Parental Consent Verified &amp; Logged!</div>
          <div className="success-sub">
            Your minor child (<strong>{safeChildName}</strong>)'s account has been successfully approved pursuant to
            the Digital Personal Data Protection Act, 2023. Real-time safety tracking and geofence monitoring are now
            activated.
          </div>
          <div className="success-badge-box">
            <div>🏛️ <strong>Compliance Schema:</strong> DPDP Act 2023 · Section 9 Verified</div>
            <div>🔢 <strong>Audit Transaction ID:</strong> <span id="successTxnId" style={{color: '#00E676', fontWeight: 700}}>TLO-DPDP-PENDING</span></div>
            <div>🪪 <strong>Parent Aadhaar:</strong> <span id="successAadhaar" style={{color: '#00E676', fontWeight: 700}}>XXXXXXXX5678</span> <span style={{fontSize: 10, color: '#cbd5e1'}}>(Masked ADV Record)</span></div>
            <div>⏱️ <strong>Timestamp:</strong> {timestamp}</div>
            <div>🔒 <strong>Child Privacy:</strong> Masked Phone &amp; 24h Telemetry Purge Active</div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
