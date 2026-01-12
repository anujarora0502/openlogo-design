import styles from './ApiKeysView.module.css';
import Link from 'next/link';

export default function ApiKeysView() {
  return (
    <div className={styles.grid}>
      {/* Left Column: Generate Key */}
      <div className={styles.leftCol}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.keyIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
              </svg>
            </div>
            <h2 className={styles.cardTitle}>Generate Key</h2>
          </div>
          
          <p className={styles.cardDescription}>
            Create a unique key to authenticate your application requests securely.
          </p>

          <form>
            <div className={styles.formGroup}>
              <label className={styles.label}>Description</label>
              <input type="text" placeholder="e.g. Production Mobile App" className={styles.input} />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Expiry Period</label>
              <div className={styles.selectWrapper}>
                <select className={styles.select}>
                  <option>1 Year</option>
                  <option>6 Months</option>
                  <option>30 Days</option>
                  <option>Never</option>
                </select>
              </div>
            </div>

            <button type="button" className={styles.submitBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
              Generate New Key
            </button>
          </form>
        </div>

        <div className={styles.securityTip}>
          <div className={styles.tipHeader}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            Security Tip
          </div>
          <p className={styles.tipText}>
            Never share your secret keys. Use environment variables to store them securely in your production environment.
          </p>
        </div>
      </div>

      {/* Right Column: Active Keys */}
      <div className={styles.card}>
        <div className={styles.keysHeader}>
          <h2 className={styles.cardTitle}>Active API Keys</h2>
          <span className={styles.badge}>2 keys found</span>
        </div>
        <p className={styles.subtext}>Manage and monitor your existing access credentials</p>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Description</th>
                <th>Created At</th>
                <th>Expiring At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.keyName}>Test Environment</td>
                <td>Jan 9, 2026</td>
                <td>Never</td>
                <td>
                  <div className={styles.actions}>
                    <svg className={`${styles.actionIcon} ${styles.deleteIcon}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={styles.keyName}>Production API</td>
                <td>Dec 15, 2025</td>
                <td>Dec 15, 2026</td>
                <td>
                  <div className={styles.actions}>
                    <svg className={`${styles.actionIcon} ${styles.deleteIcon}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}


