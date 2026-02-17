import React from 'react';
import styles from './Stats.module.css';

const stats = [
  {
    value: '< 60s',
    label: 'Time to first answer',
    note: 'From upload to cited response',
  },
  {
    value: 'Pay as you go',
    label: 'Pricing model',
    note: 'No lock-in, no annual contract',
  },
  {
    value: 'Tanzania-first',
    label: 'Built for',
    note: 'Swahili support, local payment methods',
  },
];

export const Stats: React.FC = () => {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
            <p className={styles.note}>{stat.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
