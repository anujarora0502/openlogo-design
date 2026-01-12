"use client";

import React from 'react';
import styles from './SeeInAction.module.css';

const SeeInAction = () => {
  const [query, setQuery] = React.useState('google.com');
  const [status, setStatus] = React.useState<'success' | 'not-found'>('success');

  /* Real-time search logic */
  React.useEffect(() => {
    const normalized = query.toLowerCase().trim();
    if (normalized.includes('google')) {
      setStatus('success');
    } else {
      setStatus('not-found');
    }
  }, [query]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side: Interactive Demo Card */}
        <div className={styles.demoWrapper}>
          <div className={styles.glowEffect}></div>
          <div className={styles.demoCard}>
            {/* Search Row */}
            <div className={styles.searchRow}>
              <div className={styles.searchInputWrapper}>
                <svg className={styles.searchIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  className={styles.searchInput} 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter domain name..."
                />
              </div>
            </div>

            {/* Result Box */}
            <div className={styles.resultBox}>
              {status === 'success' ? (
                <>
                  <div className={styles.resultHeader}>
                    <div className={styles.logoInfo}>
                      <div className={styles.logoThumbnail}>
                        {/* Mock Google 'G' Logo */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                      <div>
                        <span className={styles.companyName}>Google</span>
                        {/* URL removed as requested */}
                      </div>
                    </div>
                  </div>

                  <div className={styles.detailsGrid}>
                    {/* Primary Color card removed as requested */}
                    <div className={styles.detailCard}>
                      <span className={styles.detailLabel}>Format</span>
                      <div className={styles.formatBadges}>
                        <span className={styles.badge}>SVG</span>
                        <span className={styles.badge}>PNG</span>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.notFoundState}>
                  <p className={styles.notFoundText}>Logo not found</p>
                  <button className={styles.requestButton}>Request Logos</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className={styles.contentWrapper}>
          <h2 className={styles.heading}>
            Try it yourself.<br />
            Instant logo retrieval.
          </h2>
          <p className={styles.subtext}>
            Search for any company domain to find the best available brand assets. Get high-quality, transparent logos ready for your projects.
          </p>

          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Standardized logo formats
            </div>
            <div className={styles.featureItem}>
              <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Transparent backgrounds
            </div>
            <div className={styles.featureItem}>
               <svg className={styles.checkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              High-resolution assets
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeInAction;
