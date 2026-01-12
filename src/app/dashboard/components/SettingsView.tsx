import styles from './SettingsView.module.css';

export default function SettingsView() {
  return (
    <div className={styles.grid}>
      {/* User Info */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>User Info</h2>
        
        <div className={styles.formGroup}>
          <div className={styles.inputWrapper}>
            <span className={styles.floatingLabel}>Username</span>
            <input type="text" defaultValue="Anuj" className={styles.input} />
          </div>
        </div>

        <div className={styles.formGroup} style={{marginBottom: '32px'}}>
          <div className={styles.inputWrapper}>
            <span className={styles.floatingLabel}>Email</span>
            <input type="email" defaultValue="anujarora0502@gmail.com" className={styles.input} />
          </div>
        </div>

        <button className={`${styles.btn} ${styles.btnPrimary}`}>Save</button>
      </div>

      {/* Change Password */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Change Password</h2>

        <div className={styles.formGroup}>
           <input type="password" placeholder="Current Password" className={styles.input} />
           {/* Eye icon would go here absolute positioned */}
        </div>

        <div className={styles.formGroup} style={{marginBottom: '32px'}}>
           <input type="password" placeholder="New Password" className={styles.input} />
        </div>

        <button className={`${styles.btn} ${styles.btnPrimary}`}>Change password</button>
      </div>

      {/* Plan */}
      <div className={styles.card}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px'}}>
          <h2 className={styles.cardTitle} style={{marginBottom: 0}}>Plan</h2>
          <span style={{color: '#4f46e5', fontWeight: 600, fontSize: '13px'}}>Active</span>
        </div>
        
        <div style={{marginBottom: 'auto'}}>
          <h3 style={{fontSize: '16px', fontWeight: 600, marginBottom: '8px', color: '#111827'}}>Hobby</h3>
          <p className={styles.settingsText}>
            Empower your projects with essential tools, at no cost.
          </p>
        </div>

        <button className={`${styles.btn} ${styles.btnPrimary}`}>Upgrade</button>
      </div>

      {/* Settings / Danger Zone */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Setting</h2>
        <p className={styles.settingsText}>
          Download your account data and move to other device with ease.
        </p>
        <button className={`${styles.btn} ${styles.btnPrimary}`}>Download</button>

        <p className={styles.settingsText} style={{marginTop: '24px'}}>
          This will permanently delete your account and all associated data.
        </p>
        <button className={`${styles.btn} ${styles.btnDanger}`}>Delete Account</button>
      </div>
    </div>
  );
}
