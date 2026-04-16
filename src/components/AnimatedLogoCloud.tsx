'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedLogoCloud.module.css';

const logos = [
  // Inner ring
  { name: 'Apple', src: 'https://www.vectorlogo.zone/logos/apple/apple-icon.svg', top: '50%', left: '75%', size: 48, delay: 0 },
  { name: 'Google', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg', top: '71%', left: '62%', size: 56, delay: 0.2 },
  { name: 'Tesla', src: 'https://www.vectorlogo.zone/logos/tesla/tesla-icon.svg', top: '71%', left: '37%', size: 58, delay: 0.6 },
  { name: 'Pepsi', src: 'https://www.vectorlogo.zone/logos/pepsi/pepsi-icon.svg', top: '50%', left: '25%', size: 45, delay: 0.3 },
  { name: 'Microsoft', src: 'https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg', top: '28%', left: '37%', size: 50, delay: 0.4 },
  { name: 'Nike', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg', top: '28%', left: '62%', size: 52, delay: 0.15 },
  
  // Outer ring
  { name: 'Starbucks', src: 'https://www.vectorlogo.zone/logos/starbucks/starbucks-icon.svg', top: '64%', left: '92%', size: 48, delay: 0.45 },
  { name: 'Toyota', src: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg', top: '86%', left: '76%', size: 45, delay: 0.25 },
  { name: 'Netflix', src: 'https://www.vectorlogo.zone/logos/netflix/netflix-icon.svg', top: '95%', left: '50%', size: 46, delay: 0.8 },
  { name: 'Amazon', src: 'https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg', top: '86%', left: '23%', size: 60, delay: 0.5 },
  { name: 'Team Shiksha', src: '/shiksha.png', top: '64%', left: '7%', size: 54, delay: 0.1 },
  { name: 'McDonalds', src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg', top: '36%', left: '7%', size: 52, delay: 0.55 },
  { name: 'Cisco', src: 'https://www.vectorlogo.zone/logos/cisco/cisco-icon.svg', top: '14%', left: '23%', size: 40, delay: 0.35 },
  { name: 'Nvidia', src: 'https://www.vectorlogo.zone/logos/nvidia/nvidia-icon.svg', top: '5%', left: '50%', size: 44, delay: 0.65 },
  { name: 'Meta', src: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg', top: '14%', left: '76%', size: 56, delay: 0.2 },
  { name: 'Mastercard', src: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg', top: '36%', left: '92%', size: 50, delay: 0.7 }
];

export default function AnimatedLogoCloud() {
  return (
    <div className={styles.cloudContainer}>
      <div className={styles.glowOrb}></div>
      <div className={styles.glowOrbSecondary}></div>
      
      {logos.map((logo, index) => {
        return (
          <motion.div
            key={index}
            className={styles.logoItem}
            style={{
              top: logo.top,
              left: logo.left,
              '--logo-size': `clamp(40px, 10vw + ${logo.size / 5}px, ${logo.size + 24}px)`
            } as React.CSSProperties}
            animate={{
              y: [0, -15, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: logo.delay,
            }}
            whileHover={{ scale: 1.15, zIndex: 10, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={logo.src} 
              alt={logo.name} 
              className={styles.image} 
            />
          </motion.div>
        );
      })}
    </div>
  );
}
