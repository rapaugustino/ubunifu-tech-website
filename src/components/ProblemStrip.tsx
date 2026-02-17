import React from 'react';
import styles from './ProblemStrip.module.css';

const items = [
  {
    label: 'The problem',
    body: 'Most business software is built for US or European companies and adapted for everyone else. It shows.',
  },
  {
    label: 'Our approach',
    body: 'We build from scratch for Africa — starting in Tanzania, with pricing models, languages, and workflows that match.',
  },
  {
    label: 'Starting with AI',
    body: 'Ubunifu Insight puts AI document tools in the hands of teams who currently do this work manually in Excel and WhatsApp.',
  },
];

export const ProblemStrip: React.FC = () => {
  return (
    <div className={styles.strip}>
      <div className={`container ${styles.inner}`}>
        {items.map((item) => (
          <div key={item.label} className={styles.item}>
            <p className={styles.label}>{item.label}</p>
            <p className={styles.body}>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
