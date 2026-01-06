import React from 'react';
import styles from './SocialProof.module.css';

export const SocialProof: React.FC = () => {
  return (
    <section className={styles.socialProof}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Why work with us?</h2>
          <p className={styles.subheading}>
            A new consultancy bringing Silicon Valley-caliber expertise to Tanzania's business community.
          </p>
        </div>

        <div className={styles.capabilitiesGrid}>
          <div className={styles.capability}>
            <div className={styles.capabilityIcon}>🎓</div>
            <h3 className={styles.capabilityTitle}>Silicon Valley-Trained Expertise</h3>
            <p className={styles.capabilityDescription}>
              Advanced training in AI, Machine Learning, and global design standards. We bring the same technical rigor and creative excellence used by top US tech companies and international design studios.
            </p>
          </div>

          <div className={styles.capability}>
            <div className={styles.capabilityIcon}>🌍</div>
            <h3 className={styles.capabilityTitle}>Tanzania-Based & Available</h3>
            <p className={styles.capabilityDescription}>
              Based right here in Dar es Salaam. We understand local business realities, market dynamics, and can meet face-to-face. No time zones, no cultural disconnect.
            </p>
          </div>

          <div className={styles.capability}>
            <div className={styles.capabilityIcon}>💼</div>
            <h3 className={styles.capabilityTitle}>Practical & Flexible</h3>
            <p className={styles.capabilityDescription}>
              From quick Excel analysis to full AI systems, brand design to complete websites. We handle ad-hoc projects and long-term partnerships—whatever your business needs.
            </p>
          </div>

          <div className={styles.capability}>
            <div className={styles.capabilityIcon}>🤝</div>
            <h3 className={styles.capabilityTitle}>Transparent Partnership</h3>
            <p className={styles.capabilityDescription}>
              We're building our reputation project by project. You get our full attention, honest pricing, clear communication, and commitment to delivering measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
