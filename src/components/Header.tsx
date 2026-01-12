"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();
  const isDashboard = pathname === '/dashboard';

  return (
    <header className={`${styles.header} ${isScrolled || isDashboard ? styles.scrolled : ''}`}>
      <div className={styles.innerContainer}>
        <Link href="/" className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <div className={styles.logoCircle}>
              <div className={styles.logoDot}></div>
            </div>
          </div>
          <span className={styles.logoText}>Openlogo</span>
        </Link>
        
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="#" className={styles.link}>Docs</Link>
          <Link href="#" className={styles.link}>Features</Link>
          <Link href="#" className={styles.link}>Pricing</Link>
          <Link href="#" className={styles.link}>About</Link>
        </nav>

        <div className={styles.actions}>
          {isDashboard ? (
            <div className={styles.profile}>
              <div className={styles.avatar}>A</div>
              <span className={styles.username}>Anuj</span>
            </div>
          ) : (
            <Link href="/dashboard" className={styles.ctaButton}>Get Started</Link>
          )}
        </div>
      </div>
    </header>
  );
}
