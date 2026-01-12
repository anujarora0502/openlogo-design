import styles from './Hero.module.css';
import CodeWindow from './CodeWindow';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBackground}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Perfect company logos <br />
            <span className={styles.highlight}>for your next project.</span>
          </h1>
          <p className={styles.description}>
            Access hundreds of high-quality company logos instantly through our simple API. 
            Built for developers, trusted by designers. Stop searching Google Images.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/dashboard" className={styles.primaryBtn}>
              Start Building for Free 
              <span className={styles.arrow}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 1L11 6L6 11M0 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
            <Link href="#" className={styles.secondaryBtn}>
              &lt;/&gt; View Documentation
            </Link>
          </div>
        </div>
        
        <div className={styles.visual}>
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
