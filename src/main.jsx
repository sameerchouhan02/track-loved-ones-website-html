import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './app.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('React root element was not found.');
}

const routes = {
  '/': 'home',
  '/index.html': 'home',
  '/corporate-offerings': 'corporateOfferings',
  '/disclaimer': 'disclaimer',
  '/legal-education': 'legalEducation',
  '/privacy-policy': 'privacyPolicy',
  '/refunds-cancellation': 'refundsCancellation',
  '/terms-of-use': 'termsOfUse',
  '/vision-mission-values': 'visionMissionValues',
  '/home.html': 'home',
  '/home': 'home',
  '/c': 'consent',
  '/c.html': 'consent',
  '/corporate-offerings.html': 'corporateOfferings',
  '/disclaimer.html': 'disclaimer',
  '/legal-education.html': 'legalEducation',
  '/privacy-policy.html': 'privacyPolicy',
  '/refunds-cancellation.html': 'refundsCancellation',
  '/terms-of-use.html': 'termsOfUse',
  '/vision-mission-values.html': 'visionMissionValues'
};
const pathname = window.location.pathname.replace(/\/+$/, '').toLowerCase() || '/';

createRoot(root).render(<App pageId={routes[pathname]} />);
