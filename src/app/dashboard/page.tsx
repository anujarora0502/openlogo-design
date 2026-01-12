"use client";

import { useState } from 'react';
import styles from './dashboard.module.css';
import Header from '@/components/Header';
import ApiKeysView from '@/app/dashboard/components/ApiKeysView';
import AnalyticsView from '@/app/dashboard/components/AnalyticsView';
import SettingsView from '@/app/dashboard/components/SettingsView';

type Tab = 'analytics' | 'api-keys' | 'settings';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('api-keys');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState('User');

  const handleRoleSelect = (role: string) => {
    setUserRole(role);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <div className={styles.titleSection}>
            <h1>Dashboard</h1>
            <p>Manage your account, view analytics, and control your API access.</p>
          </div>
          <div className={styles.headerRight}>
             <div className={styles.dropdownWrapper}>
               <button 
                 className={styles.dropdown}
                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
               >
                {userRole.toUpperCase()}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <div className={styles.dropdownItem} onClick={() => handleRoleSelect('User')}>User</div>
                  <div className={styles.dropdownItem} onClick={() => handleRoleSelect('Admin')}>Admin</div>
                  <div className={styles.dropdownItem} onClick={() => handleRoleSelect('Operator')}>Operator</div>
                </div>
              )}
             </div>

            <div className={styles.tabs}>
              <button 
                className={`${styles.tab} ${activeTab === 'analytics' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('analytics')}
              >
                Analytics
              </button>
              <button 
                className={`${styles.tab} ${activeTab === 'api-keys' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('api-keys')}
              >
                API Keys
              </button>
              <button 
                className={`${styles.tab} ${activeTab === 'settings' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                Settings
              </button>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          {activeTab === 'api-keys' && <ApiKeysView />}
          {activeTab === 'analytics' && <AnalyticsView />}
          {activeTab === 'settings' && <SettingsView />}
        </div>
      </main>
    </div>
  );
}
