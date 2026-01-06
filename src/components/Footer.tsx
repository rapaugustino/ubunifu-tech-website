import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className="text-gradient">UBUNIFU</span> TECHNOLOGIES
          </div>
          <div className={styles.info}>
            <a href="mailto:richardpallangyo@ubunifutech.com" className={styles.email}>
              richardpallangyo@ubunifutech.com
            </a>
          </div>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} Ubunifu Technologies. Digital Transformation & Strategic Consulting for Tanzania.
          </div>
          <div className={styles.links}>
            <Link href="/blog">Blog</Link>
            <Link href="#services">Services</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
