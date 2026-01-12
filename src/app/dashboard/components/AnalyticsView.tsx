import styles from './AnalyticsView.module.css';

export default function AnalyticsView() {
  return (
    <div className={styles.container}>


      <div className={styles.grid}>
        {/* Requests Chart */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Requests</h2>
          
          <div className={styles.chartContainer}>
            {/* Background Grid */}
            <div className={styles.chartGrid}>
              {[15, 12, 9, 6, 3, 0].map((val) => (
                <div key={val} className={styles.gridLine}>
                  <span className={styles.yLabel}>{val}</span>
                </div>
              ))}
            </div>

            {/* The Line (SVG) */}
            <div className={styles.chartLineContainer}>
              <svg width="100%" height="100%" viewBox="0 0 600 250" preserveAspectRatio="none" style={{overflow: 'visible'}}>
                {/* A flat line at 0 for now (bottom) */}
                <polyline 
                  points="0,250 100,250 200,250 300,250 400,250 500,250 600,250" 
                  fill="none" 
                  stroke="#818cf8" 
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Dots */}
                <circle cx="0" cy="250" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="100" cy="250" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="200" cy="250" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="300" cy="250" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="400" cy="250" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="500" cy="250" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                <circle cx="600" cy="250" r="3" fill="#ffffff" stroke="#4f46e5" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>

            <div className={styles.xAxis}>
              <span>06 Jan</span>
              <span>07 Jan</span>
              <span>08 Jan</span>
              <span>09 Jan</span>
              <span>10 Jan</span>
              <span>11 Jan</span>
              <span>12 Jan</span>
            </div>
          </div>

          <div className={styles.chartControls}>
            <button className={styles.controlBtn}>Month</button>
            <button className={`${styles.controlBtn} ${styles.controlBtnSecondary}`}>Week</button>
            <button className={styles.controlBtn}>Refresh</button>
          </div>
        </div>

        {/* Usage Donut */}
        <div className={styles.card}>
          <h2 className={styles.cardTitle} style={{textAlign: 'left'}}>Usage</h2>
          <div className={styles.usageContent}>
            <div className={styles.donutWrapper}>
              <svg width="160" height="160">
                <circle
                  className={styles.donutCircle}
                  stroke="#e5e7eb"
                  strokeWidth="20"
                  fill="transparent"
                  r="60"
                  cx="80"
                  cy="80"
                />
                {/* Progress Circle (very small for 0-1 requests) */}
                <circle
                  className={styles.donutCircle}
                  stroke="#818cf8"
                  strokeWidth="20"
                  fill="transparent"
                  r="60"
                  cx="80"
                  cy="80"
                  strokeDasharray="377"
                  strokeDashoffset="376" /* Almost full offset for ~0% */
                  strokeLinecap="round"
                />
              </svg>
              <div className={styles.donutText}>0%</div>
            </div>
            
            <div className={styles.usageLegend}>
              <div className={styles.usageItem}>
                <span className={styles.usageLabel}>Calls</span>
                <span className={styles.usageValue}>1</span>
              </div>
              <div className={styles.usageItem}>
                <span className={styles.usageLabel}>Limit</span>
                <span className={styles.usageValue}>500</span>
              </div>
            </div>
            
            <p className={styles.usageReset}>Resets every month.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
