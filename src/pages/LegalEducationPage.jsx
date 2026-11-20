import PageShell from '../PageShell.jsx';
import styles from './styles/LegalEducationPage.css?inline';

export default function LegalEducationPage() {
  return (
    <PageShell pageId="legalEducation" title={"Citizen Legal Education Series | Track Loved Ones"} description={""} styles={styles}>
      <div>
        <header className="header">
          <div className="nav-container">
            <a href="/" className="logo-lockup">
              <img src="/assets/legal-education-logo.png" alt="TrackLovedOnes shield logo" className="logo-img" />
              <span className="logo-text">
                <span className="logo-name">TrackLovedOnes</span>
                <span className="logo-tagline">Always connect with your world</span>
              </span>
            </a>
            <a href="/" className="back-home">← Back to Home</a>
          </div>
        </header>
        <main className="content">
          <div className="kicker">Public Legal Education Series · YouTube Channel Engine</div>
          <h1>Citizen Legal Education &amp; Public Literacy Initiative</h1>
          <p className="subtitle">We provide general knowledge about Indian laws and prevailing acts which are of interest to the general public. We publish one video on daily basis on our YouTube channel and all the monetization for providing you the services are realized from there.</p>
          <div className="hero-banner">
            <div className="banner-kicker">Our Ethical Funding Philosophy</div>
            <h2>Why We Educate Citizens Instead of Selling Family Coordinates</h2>
            <p>Most family safety apps sustain themselves by quietly leasing user location histories to corporate data aggregators or forcing expensive subscriptions on working parents. We take a different path: our daily YouTube educational video series explains Indian laws in simple language. The viewership revenue from this public legal literacy initiative directly sustains our domestic server operations, allowing us to keep family GPS sharing 100% free and unmonetized by advertisers.</p>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="yt-btn">
              <span>▶ Watch &amp; Subscribe on YouTube</span>
            </a>
          </div>
          <div className="belief-box">
            <div className="belief-icon">⚖️</div>
            <p className="belief-text">At People Connect we believe that knowledge and education is the only key that help you to stand against wrongdoing.</p>
          </div>
          <div className="disclaimer-box">
            <h4>Educational Disclaimer Reminder</h4>
            <p>All simple-language legal updates, constitutional summaries, and citizen guides provided through our video channel are meant for educational and informational use only. This content does not constitute formal legal advice. Viewing our videos does not create an attorney-client relationship. For specific court matters, always talk to a registered legal professional in India.</p>
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
