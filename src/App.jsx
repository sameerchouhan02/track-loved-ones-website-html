import { useEffect, useState } from 'react';

const pageLoaders = {
  home: () => import('./pages/HomePage.jsx'),
  consent: () => import('./pages/ConsentPage.jsx'),
  corporateOfferings: () => import('./pages/CorporateOfferingsPage.jsx'),
  disclaimer: () => import('./pages/DisclaimerPage.jsx'),
  legalEducation: () => import('./pages/LegalEducationPage.jsx'),
  privacyPolicy: () => import('./pages/PrivacyPolicyPage.jsx'),
  refundsCancellation: () => import('./pages/RefundsCancellationPage.jsx'),
  termsOfUse: () => import('./pages/TermsOfUsePage.jsx'),
  visionMissionValues: () => import('./pages/VisionMissionValuesPage.jsx')
};

export default function App({ pageId }) {
  const [page, setPage] = useState({ status: 'loading', Component: null });

  useEffect(() => {
    let active = true;
    const loadPage = pageLoaders[pageId];
    setPage({ status: 'loading', Component: null });

    if (!loadPage) {
      setPage({ status: 'missing', Component: null });
      return () => {
        active = false;
      };
    }

    loadPage().then((module) => {
      if (active) {
        setPage({ status: 'ready', Component: module.default });
      }
    }).catch((error) => {
      console.error(`Unable to load page "${pageId}".`, error);
      if (active) {
        setPage({ status: 'error', Component: null });
      }
    });

    return () => {
      active = false;
    };
  }, [pageId]);

  if (page.status === 'loading') {
    return <p className="page-status" role="status">Loading page…</p>;
  }

  if (page.status === 'error') {
    return <p className="page-status" role="alert">This page could not be loaded. Please refresh and try again.</p>;
  }

  if (page.status === 'missing' || !pageId) {
    return (
      <main className="not-found">
        <h1>Page not found</h1>
        <a href="/">Return to Track Loved Ones</a>
      </main>
    );
  }

  const Page = page.Component;
  return Page ? <Page /> : null;
}
