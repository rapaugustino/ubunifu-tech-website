import React from 'react';
import styles from './PricingTeaser.module.css';

export const PricingTeaser: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <span className="eyebrow">Pricing</span>
          <h2 className={styles.heading}>Simple pricing. No surprises.</h2>
          <p className={styles.body}>
            Ubunifu Insight runs on a pay-as-you-go credit model. You top up when you need to,
            and pay only for what you use — no annual contracts, no seat fees.
          </p>
          <p className={styles.body}>
            New accounts start with free credits so you can explore the platform before spending anything.
          </p>
          <a
            href="https://insight.ubunifutech.com/pricing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            See Insight pricing
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7"/><path d="M7 7h10v10"/>
            </svg>
          </a>
        </div>

        <div className={styles.card}>
          <p className={styles.cardLabel}>Pay as you go</p>
          <p className={styles.cardPrice}>Top up anytime</p>
          <ul className={styles.cardFeatures}>
            <li>No monthly fee</li>
            <li>No seat charges</li>
            <li>Credits never expire</li>
            <li>M-Pesa & card accepted</li>
            <li>Free credits to start</li>
          </ul>
          <a
            href="https://insight.ubunifutech.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardBtn}
          >
            Get started free
          </a>
        </div>
      </div>
    </section>
  );
};
