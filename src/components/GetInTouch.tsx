'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './GetInTouch.module.css';

export default function GetInTouch() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Still have questions?</h2>
          <p className={styles.subtitle}>
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
          
          <button className={styles.primaryButton} onClick={() => alert('Get in touch modal opens here!')}>
            Get in touch
          </button>
        </motion.div>
      </div>
    </section>
  );
}
