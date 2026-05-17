const CONSENT_KEY = "heda-gdpr-consent";

export function hasConsent(): boolean {
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export function getInitialConsentState(): boolean {
  const consent = localStorage.getItem(CONSENT_KEY);
  return !consent;
}

export function setConsent(value: "accepted" | "rejected"): void {
  localStorage.setItem(CONSENT_KEY, value);
}