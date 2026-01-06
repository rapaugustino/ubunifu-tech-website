import React from 'react';
import { ServiceCard } from './ServiceCard';
import styles from './Services.module.css';

// Simple SVG Icons
const StrategyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.2 7.8 12 12l-4.2 4.2"/><path d="M7.8 7.8 12 12l4.2 4.2"/></svg>
); // Compass-like

const EngineeringIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
); // Code

const CreativeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 5l5-5"/></svg>
); // Pen/Tool

const TrainingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
); // Book

const services = [
  {
    title: 'Web Development & Digital Presence',
    description: 'Professional websites and web applications that establish your online presence. From simple informational sites to e-commerce platforms and complex web apps—we build modern, mobile-responsive solutions with CMS capabilities so you can manage your own content. Includes hosting coordination and ongoing maintenance.',
    icon: <EngineeringIcon />,
    tags: ['Website Development', 'E-commerce', 'CMS', 'Web Hosting']
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Turn your data into actionable insights. Whether it\'s Excel spreadsheets or complex databases—we clean, analyze, and visualize your data to inform strategic decisions. From quick ad-hoc analysis to comprehensive BI dashboards and KPI tracking systems.',
    icon: <StrategyIcon />,
    tags: ['Excel Analysis', 'BI Dashboards', 'Data Visualization', 'KPIs']
  },
  {
    title: 'Brand Design & Visual Identity',
    description: 'World-class creative work that makes you stand out. Complete visual identity development including logos, style guides, marketing collateral, and UI/UX design. We create cohesive branding across digital and print that resonates with Tanzanian audiences.',
    icon: <CreativeIcon />,
    tags: ['Logo Design', 'Brand Identity', 'Marketing Materials', 'UI/UX']
  },
  {
    title: 'AI & Automation Solutions',
    description: 'Custom artificial intelligence and machine learning solutions for specific business challenges. From predictive analytics and customer segmentation to process automation—we implement practical AI that delivers measurable value, built with ethical and responsible practices.',
    icon: <EngineeringIcon />,
    tags: ['Machine Learning', 'Predictive Models', 'Automation', 'AI Solutions']
  },
  {
    title: 'Digital Strategy & Training',
    description: 'Comprehensive digital transformation roadmaps and capacity building. We assess your current digital maturity, develop implementation strategies, and provide training workshops to enhance your team\'s digital skills—from data literacy to digital project management.',
    icon: <TrainingIcon />,
    tags: ['Digital Strategy', 'Training Workshops', 'Transformation', 'Consulting']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>Comprehensive <span className="text-gradient">Digital Solutions.</span></h2>
          <p className={styles.subheading}>From web development to AI implementation—we deliver end-to-end digital transformation services tailored for Tanzanian businesses and organizations.</p>
        </div>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};
