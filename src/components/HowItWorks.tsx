import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Upload your documents',
    body: 'Drag and drop PDFs, Word files, or spreadsheets into your workspace. Insight indexes them in seconds.',
  },
  {
    number: '02',
    title: 'Ask anything',
    body: 'Type a question like "What are the payment terms in the Sanlam contract?" and Insight finds the answer — with the exact page and paragraph cited.',
  },
  {
    number: '03',
    title: 'Extract, generate, export',
    body: 'Run a batch extraction across 50 documents. Generate a report. Download a CSV. Work the way your team already works.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <span className="eyebrow">How it works</span>
        <h2 className={styles.heading}>From upload to answer<br />in under a minute</h2>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
