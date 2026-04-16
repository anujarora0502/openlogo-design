'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'How do I add a logo to my project?',
    answer: 'Simply browse the directory, click on the logo you want, and copy the SVG code directly. You can then paste it intimately into your HTML or React application without needing an external image host.'
  },
  {
    question: 'Are all the logos free to use?',
    answer: 'Absolutely. The Openlogo directory serves high-quality, open-source SVG icons mapped from reliable public domains and vector bases. They are completely free to integrate.'
  },
  {
    question: 'Can I contribute a brand that is missing?',
    answer: 'Yes! Openlogo is fully open-source. You can submit a pull request on our GitHub repository with the verified SVG paths following our submission guidelines.'
  },
  {
    question: 'Do you offer an API?',
    answer: 'Yes, if you upgrade to our Pro plan you gain direct programmatic access to fetch any logo directly from our high-availability CDN utilizing your unique API key.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first item open by default

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Frequently asked questions
        </motion.h2>

        <div className={styles.accordionList}>
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <motion.div 
                key={index}
                className={styles.item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  className={styles.button}
                  onClick={() => toggleOpen(index)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <svg 
                    className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className={styles.contentWrapper}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className={styles.content}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
