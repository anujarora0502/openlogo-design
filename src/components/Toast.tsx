"use client";

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

interface ToastData {
  id: number;
  title: string;
  message: string;
  exiting?: boolean;
}

let toastId = 0;
const listeners: Set<(toast: ToastData) => void> = new Set();

/** Call this from anywhere to show a toast */
export function showToast(title: string, message: string) {
  const toast: ToastData = { id: ++toastId, title, message };
  listeners.forEach((fn) => fn(toast));
}

export default function ToastContainer() {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dismiss = useCallback((id: number) => {
    // Mark as exiting for animation
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );
    // Remove after animation
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 300);
  }, []);

  useEffect(() => {
    const handler = (toast: ToastData) => {
      setToasts((prev) => [...prev, toast]);
      // Auto-dismiss after 4 seconds
      setTimeout(() => dismiss(toast.id), 4000);
    };
    listeners.add(handler);
    return () => { listeners.delete(handler); };
  }, [dismiss]);

  if (!mounted) return null;

  return createPortal(
    <div className={styles.toastContainer} aria-live="polite">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${styles.toast} ${toast.exiting ? styles.exiting : ''}`}
          role="alert"
        >
          <div className={styles.toastContent}>
            {/* Warning/info icon */}
            <svg
              className={styles.toastIcon}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.168 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 6a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6zm0 9a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>

            <div className={styles.toastBody}>
              <div className={styles.toastTitle}>{toast.title}</div>
              <div className={styles.toastMessage}>{toast.message}</div>
            </div>

            <button
              className={styles.toastClose}
              onClick={() => dismiss(toast.id)}
              aria-label="Dismiss notification"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>,
    document.body
  );
}
