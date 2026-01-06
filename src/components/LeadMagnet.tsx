'use client';

import React from 'react';
import { Button } from './ui/Button';
import styles from './LeadMagnet.module.css';

export const LeadMagnet: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.leadMagnet}>
      <div className="container">
        <div className={`${styles.wrapper} glass-panel`}>
          <div className={styles.content}>
            <div className={styles.badge}>Special Offer</div>
            <h2 className={styles.heading}>
              Free Business Assessment
            </h2>
            <p className={styles.description}>
              We're building our portfolio and offering free 30-minute consultations for Tanzania businesses. Whether you need help with data, design, or digital strategy—we'll review your situation and identify specific opportunities where our expertise can add value. No obligations.
            </p>
            <ul className={styles.benefits}>
              <li>✓ Review your data (even if it's just Excel spreadsheets)</li>
              <li>✓ Assess your brand and digital presence</li>
              <li>✓ Identify 3 quick-win opportunities</li>
              <li>✓ Get honest advice on what's realistic for your budget</li>
            </ul>
            <div className={styles.cta}>
              <Button size="lg" variant="primary" onClick={scrollToContact}>
                Schedule Free Consultation
              </Button>
            </div>
            <p className={styles.note}>
              Limited to 5 businesses per month while we're building our client base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
