'use client';

import React from 'react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Gradient mesh background */}
      <div className={styles.gradientMesh} aria-hidden="true" />

      {/* Dot grid overlay */}
      <div className={styles.dotGrid} aria-hidden="true" />

      {/* Floating geometric shapes */}
      <div className={styles.shapes} aria-hidden="true">
        <div className={`${styles.shape} ${styles.shapeRing}`}>
          <svg viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
          </svg>
        </div>
        <div className={`${styles.shape} ${styles.shapeSquare}`} />
        <div className={`${styles.shape} ${styles.shapeDot}`} />
        <div className={`${styles.shape} ${styles.shapeCircleFill}`} />
        <div className={`${styles.shape} ${styles.shapeCross}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>
        <div className={`${styles.shape} ${styles.shapeHexagon}`}>
          <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="24,2 44,14 44,34 24,46 4,34 4,14" />
          </svg>
        </div>
        <div className={`${styles.shape} ${styles.shapeBlueRing}`}>
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        {/* Node connection graphic */}
        <div className={styles.nodeGraphic}>
          <svg viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connection lines */}
            <line x1="80" y1="60" x2="200" y2="100" stroke="rgba(5, 150, 105, 0.15)" strokeWidth="1.5" />
            <line x1="200" y1="100" x2="260" y2="60" stroke="rgba(30, 64, 175, 0.12)" strokeWidth="1.5" />
            <line x1="200" y1="100" x2="160" y2="190" stroke="rgba(5, 150, 105, 0.12)" strokeWidth="1.5" />
            <line x1="80" y1="60" x2="60" y2="160" stroke="rgba(30, 64, 175, 0.1)" strokeWidth="1" />
            <line x1="60" y1="160" x2="160" y2="190" stroke="rgba(5, 150, 105, 0.1)" strokeWidth="1" />
            <line x1="260" y1="60" x2="280" y2="170" stroke="rgba(30, 64, 175, 0.1)" strokeWidth="1" />
            <line x1="160" y1="190" x2="280" y2="170" stroke="rgba(5, 150, 105, 0.08)" strokeWidth="1" />

            {/* Nodes */}
            <circle cx="80" cy="60" r="8" fill="rgba(5, 150, 105, 0.12)" stroke="rgba(5, 150, 105, 0.3)" strokeWidth="1.5" />
            <circle cx="80" cy="60" r="3" fill="rgba(5, 150, 105, 0.6)" />

            <circle cx="200" cy="100" r="10" fill="rgba(30, 64, 175, 0.1)" stroke="rgba(30, 64, 175, 0.25)" strokeWidth="1.5" />
            <circle cx="200" cy="100" r="4" fill="rgba(30, 64, 175, 0.5)" />

            <circle cx="260" cy="60" r="7" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1.5" />
            <circle cx="260" cy="60" r="3" fill="rgba(59, 130, 246, 0.5)" />

            <circle cx="160" cy="190" r="9" fill="rgba(5, 150, 105, 0.1)" stroke="rgba(5, 150, 105, 0.25)" strokeWidth="1.5" />
            <circle cx="160" cy="190" r="3.5" fill="rgba(5, 150, 105, 0.5)" />

            <circle cx="60" cy="160" r="6" fill="rgba(30, 64, 175, 0.08)" stroke="rgba(30, 64, 175, 0.2)" strokeWidth="1" />
            <circle cx="60" cy="160" r="2.5" fill="rgba(30, 64, 175, 0.4)" />

            <circle cx="280" cy="170" r="6" fill="rgba(5, 150, 105, 0.08)" stroke="rgba(5, 150, 105, 0.2)" strokeWidth="1" />
            <circle cx="280" cy="170" r="2.5" fill="rgba(5, 150, 105, 0.4)" />
          </svg>
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        {/* Location badge */}
        <div className={`${styles.locationBadge} ${styles.fadeUp} ${styles.delay1}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Arusha, Tanzania
        </div>

        <h1 className={`${styles.title} ${styles.fadeUp} ${styles.delay2}`}>
          We build software<br />
          <span className={styles.titleGradient}>for Africa.</span>
        </h1>

        <p className={`${styles.subtitle} ${styles.fadeUp} ${styles.delay3}`}>
          Ubunifu Technologies builds products and provides consulting for businesses
          in Tanzania — from AI-powered tools to custom websites, designed for how
          this market actually works.
        </p>

        <div className={`${styles.actions} ${styles.fadeUp} ${styles.delay4}`}>
          <a href="#products" className={styles.btnPrimary}>
            See our products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
          </a>
          <a href="#contact" className={styles.btnSecondary}>Get in touch</a>
        </div>

        {/* Trust indicators */}
        <div className={`${styles.trust} ${styles.fadeUp} ${styles.delay5}`}>
          <div className={styles.trustItem}>
            <span className={styles.trustDot} />
            Ubunifu Insight — Live
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            M-Pesa & Card payments
          </div>
          <div className={styles.trustDivider} />
          <div className={styles.trustItem}>
            English & Swahili
          </div>
        </div>
      </div>
    </section>
  );
};
