'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const pricingPlans = [
  {
    name: 'Hobby',
    price: 'Free',
    period: 'forever',
    features: [
      'Access to standard 200+ logos',
      '500 API calls per month',
      '2 API keys',
      'Basic analytics',
      '48-72 hours of response time'
    ],
    buttonText: 'Get Started',
    isPro: false,
  },
  {
    name: 'Pro',
    price: '$9',
    period: '/ month',
    features: [
      'Access to full 2,000+ logos library',
      'Unlimited API calls per month',
      '10 API keys',
      'Advanced analytics',
      '24/7 priority support'
    ],
    buttonText: 'Upgrade to Pro',
    isPro: true,
  }
];

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>
        <div className={styles.header}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, transparent pricing.
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Start building for free, then upgrade when you need programmatic access and the full expansive library.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index}
              className={`${styles.card} ${plan.isPro ? styles.cardPro : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            >
              <h3 className={styles.planName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>{plan.period}</span>
              </div>
              
              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`${styles.button} ${plan.isPro ? styles.buttonPro : ''}`}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
