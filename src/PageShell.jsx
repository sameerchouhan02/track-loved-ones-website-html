import { useEffect, useMemo, useState } from 'react';

const pageScripts = {
  home: '/scripts/home.js',
  consent: '/scripts/consent.js',
  corporateOfferings: '/scripts/corporate-offerings.js'
};

const pageLinks = {
  consent: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'
    }
  ]
};
const emptyMeta = [];

export function getConsentContext() {
  const data = window.__CONSENT_DATA__ || {};
  const query = new URLSearchParams(window.location.search);
  const code = data.code || data.token || window.__CONSENT_CODE__ || query.get('code') || query.get('token') || '';

  return {
    code: String(code),
    childName: data.safeChildName || data.childName || 'Minor Child',
    maskedChildPhone: data.maskedChildPhone || 'XXXXXXXXXX'
  };
}

function toggleMenu(button) {
  const menu = document.getElementById('navMenu');
  if (!menu) {
    console.error('Navigation menu was not found.');
    return;
  }

  const isOpen = menu.classList.toggle('open');
  button.setAttribute('aria-expanded', String(isOpen));
}

export function runPageInteraction(source, event, element) {
  const handler = source.replace(/\s+/g, ' ').trim();
  const compactHandler = handler.replace(/\s/g, '');

  if (compactHandler === "varm=document.getElementById('navMenu');varo=m.classList.toggle('open');this.setAttribute('aria-expanded',o);") {
    toggleMenu(element);
    return;
  }

  if (event.type === 'submit') {
    event.preventDefault();
    const message = handler.match(/^event\.preventDefault\(\);\s*alert\('([^']*)'\);\s*this\.reset\(\);?$/);
    if (message) {
      window.alert(message[1]);
      element.reset();
      return;
    }
  }

  const alertThenSwitch = handler.match(/^alert\('([^']*)'\);\s*switchTab\('([^']*)'\);?$/);
  if (alertThenSwitch) {
    window.alert(alertThenSwitch[1]);
    if (typeof window.switchTab === 'function') {
      window.switchTab(alertThenSwitch[2]);
    } else {
      console.error('Corporate tab handler is not available.');
    }
    return;
  }

  const alertOnly = handler.match(/^alert\('([^']*)'\);?$/);
  if (alertOnly) {
    window.alert(alertOnly[1]);
    return;
  }

  const call = handler.match(/^([A-Za-z_$][\w$]*)\((.*?)\);?$/);
  if (!call) {
    console.error('Unsupported page interaction:', source);
    return;
  }

  const [, functionName, argument] = call;
  const allowedFunctions = new Set([
    'cancelSOS',
    'changeLanguage',
    'closeDeclarationModal',
    'expireNow',
    'formatAadhaarInput',
    'handleCancel',
    'handleSendAadhaarOtp',
    'handleSendOtp',
    'openDeclarationModal',
    'resetTimer',
    'submitConsent',
    'switchTab',
    'toggleExpansionFields',
    'toggleFaq',
    'triggerSOS',
    'updateButtonState'
  ]);
  if (!allowedFunctions.has(functionName) || typeof window[functionName] !== 'function') {
    console.error(`Page interaction "${functionName}" is not available.`);
    return;
  }

  if (argument === '') {
    window[functionName]();
  } else if (argument === 'this') {
    window[functionName](element);
  } else if (argument === 'this.value') {
    window[functionName](element.value);
  } else {
    const literal = argument.match(/^(['"])([\s\S]*)\1$/);
    if (!literal) {
      console.error(`Unsupported argument for page interaction "${functionName}".`);
      return;
    }
    window[functionName](literal[2]);
  }
}

export default function PageShell({
  pageId,
  title,
  description,
  styles,
  headMeta = emptyMeta,
  canonicalUrl,
  structuredData,
  children
}) {
  const [runtimeError, setRuntimeError] = useState('');
  const consentContext = useMemo(
    () => (pageId === 'consent' ? getConsentContext() : null),
    [pageId]
  );

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.content;
    let createdDescriptionMeta = false;

    document.title = title || 'Track Loved Ones';
    document.documentElement.lang = 'en';

    if (description) {
      const meta = descriptionMeta || document.createElement('meta');
      if (!descriptionMeta) {
        meta.name = 'description';
        document.head.appendChild(meta);
        createdDescriptionMeta = true;
      }
      meta.content = description;
    }

    const metaElements = headMeta.map((attributes) => {
      const meta = document.createElement('meta');
      Object.entries(attributes).forEach(([name, value]) => meta.setAttribute(name, value));
      document.head.appendChild(meta);
      return meta;
    });

    const links = [...(pageLinks[pageId] || [])];
    if (canonicalUrl) {
      links.push({ rel: 'canonical', href: canonicalUrl });
    }

    const addedLinks = links.map((attributes) => {
      const link = document.createElement('link');
      Object.entries(attributes).forEach(([name, value]) => {
        if (name === 'crossOrigin') {
          link.crossOrigin = value;
        } else {
          link.setAttribute(name, value);
        }
      });
      link.dataset.pageShellLink = pageId;
      document.head.appendChild(link);
      return link;
    });

    let structuredDataScript;
    if (structuredData) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      metaElements.forEach((meta) => meta.remove());
      addedLinks.forEach((link) => link.remove());
      structuredDataScript?.remove();

      const meta = document.querySelector('meta[name="description"]');
      if (createdDescriptionMeta) {
        meta?.remove();
      } else if (meta && previousDescription !== undefined) {
        meta.content = previousDescription;
      }
    };
  }, [canonicalUrl, description, headMeta, pageId, structuredData, title]);

  useEffect(() => {
    const scriptPath = pageScripts[pageId];
    if (!scriptPath) {
      return undefined;
    }

    setRuntimeError('');
    if (consentContext) {
      window.__CONSENT_CODE__ = consentContext.code;
    }

    const script = document.createElement('script');
    script.src = scriptPath;
    script.async = false;
    script.onerror = () => setRuntimeError('Some interactive features could not be loaded. Please refresh the page.');
    document.body.appendChild(script);

    return () => script.remove();
  }, [consentContext, pageId]);

  return (
    <>
      <style>{styles}</style>
      {runtimeError && <p className="runtime-error" role="alert">{runtimeError}</p>}
      {pageId === 'consent' && !consentContext.code && (
        <p className="runtime-warning" role="status">
          This consent page needs a valid code in its link before OTP verification can work.
        </p>
      )}
      <div className="page-content">{children}</div>
    </>
  );
}
