import React from 'react';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, tags }) => {
  return (
    <div className={`${styles.card} glass-panel`}>
      <div className={styles.iconWrapper}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};
