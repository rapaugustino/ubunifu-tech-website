import React from 'react';
import styles from './Industries.module.css';

const industries = [
  {
    icon: '🏢',
    title: 'SMEs & Startups',
    description: 'Professional online presence, e-commerce capabilities, and data-driven growth strategies.'
  },
  {
    icon: '🦁',
    title: 'Tourism & Hospitality',
    description: 'Digital marketing, online booking systems, and customer experience management for hotels and safari operators.'
  },
  {
    icon: '🤝',
    title: 'NGOs & Civil Society',
    description: 'Impact measurement, data dashboards, communication platforms, and process automation.'
  },
  {
    icon: '🏥',
    title: 'Healthcare',
    description: 'Patient management systems, data security, health information systems, and digital service delivery.'
  },
  {
    icon: '🏦',
    title: 'Financial Services',
    description: 'Customer analytics, digital channel enhancement, CRM solutions, and secure online platforms.'
  },
  {
    icon: '🌾',
    title: 'Agriculture',
    description: 'Farm management tools, market linkage platforms, supply chain optimization, and yield analytics.'
  },
  {
    icon: '🎓',
    title: 'Education',
    description: 'E-learning platforms, student management systems, and digital educational resources.'
  },
  {
    icon: '🏛️',
    title: 'Government & Public Sector',
    description: 'Citizen engagement platforms, public service delivery tools, and data management systems.'
  },
  {
    icon: '🛒',
    title: 'Retail & Manufacturing',
    description: 'E-commerce solutions, inventory management, supply chain optimization, and customer analytics.'
  }
];

export const Industries: React.FC = () => {
  return (
    <section className={styles.industries}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Serving <span className="text-gradient">All Sectors</span>
          </h2>
          <p className={styles.subheading}>
            From SMEs to large corporations—we deliver digital transformation across Tanzania's key industries.
          </p>
        </div>

        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{industry.icon}</div>
              <h3 className={styles.title}>{industry.title}</h3>
              <p className={styles.description}>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
