import React from 'react';
import styles from './InsightFeatures.module.css';

const features = [
  {
    title: 'Ask your documents anything',
    body: 'Upload any PDF or Word file and ask questions in plain English or Swahili. Get cited answers — not summaries.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: 'Extract structured data',
    body: 'Pull tables, names, numbers, and dates out of hundreds of documents automatically. Export to CSV or JSON in one click.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M3 15h18M9 3v18" />
      </svg>
    ),
  },
  {
    title: 'Generate documents',
    body: 'Use your knowledge base to draft contracts, reports, and proposals with your organisation\'s own information.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: 'Team workspaces',
    body: 'Invite colleagues, share document libraries, and keep each project\'s knowledge separate with role-based access.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Pay as you go',
    body: 'No annual subscriptions. Top up with credit and pay only for what you use. Works with M-Pesa and card.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: 'Your data stays yours',
    body: 'Documents are stored in your workspace and never used to train shared AI models. Each workspace is fully isolated.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export const InsightFeatures: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className="eyebrow">Ubunifu Insight</span>
        <h2 className={styles.heading}>Everything your team needs<br />to work with documents</h2>
        <p className={styles.subheading}>
          One platform for Q&A, extraction, and generation — built for African teams working with real documents.
        </p>

        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureBody}>{feature.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://insight.ubunifutech.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Start for free — no credit card required
          </a>
        </div>
      </div>
    </section>
  );
};
