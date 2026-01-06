'use client';

import React from 'react';
import { Button } from './ui/Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>Tanzania-Based Digital Experts</div>
          <h1 className={styles.title}>
            Digital Transformation <br />
            <span className="text-gradient">Delivered.</span>
          </h1>
          <p className={styles.subtitle}>
            <strong>Technology. Strategy. Results.</strong> Silicon Valley-trained expertise, right here in Tanzania. From Excel analysis to AI systems, web development to brand design—we deliver complete digital solutions that drive real business growth.
          </p>
          <div className={styles.actions}>
            <Button size="lg" variant="primary" onClick={() => scrollToSection('contact')}>Get Free Consultation</Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>View Our Work</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
