import styles from './CodeWindow.module.css';

export default function CodeWindow() {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.controls}>
          <span className={`${styles.dot} ${styles.red}`}></span>
          <span className={`${styles.dot} ${styles.yellow}`}></span>
          <span className={`${styles.dot} ${styles.green}`}></span>
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.codeBlock}>
          <div className={styles.line}>
            <span className={styles.lineNumber}>1</span>
            <span className={styles.comment}>// use fetch to send GET request</span>
          </div>
          <div className={styles.line}>
            <span className={styles.lineNumber}>2</span>
            <span>
              <span className={styles.keyword}>fetch</span>
              <span className={styles.paren}>(</span>
              <span className={styles.string}>"/api/logo?key=&#123;domain&#125;&API_KEY=&#123;YOUR_API_KEY&#125;"</span>
              <span className={styles.text}>, </span>
              <span className={styles.brace}>&#123;</span>
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.lineNumber}>3</span>
            <span>
              <span className={styles.tab}></span>
              <span className={styles.property}>method</span>
              <span className={styles.text}>: </span>
              <span className={styles.string}>"GET"</span>
              <span className={styles.text}>,</span>
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.lineNumber}>4</span>
            <span>
              <span className={styles.tab}></span>
              <span className={styles.property}>headers</span>
              <span className={styles.text}>: </span>
              <span className={styles.brace}>&#123;</span>
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.lineNumber}>5</span>
            <span>
              <span className={styles.tab}></span>
              <span className={styles.tab}></span>
              <span className={styles.property}>"Content-Type"</span>
              <span className={styles.text}>: </span>
              <span className={styles.string}>"application/json"</span>
              <span className={styles.text}>,</span>
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.lineNumber}>6</span>
            <span>
              <span className={styles.tab}></span>
              <span className={styles.brace}>&#125;</span>
              <span className={styles.text}>,</span>
            </span>
          </div>
          <div className={styles.line}>
            <span className={styles.lineNumber}>7</span>
            <span>
              <span className={styles.brace}>&#125;)</span>
            </span>
          </div>
        </div>

        <div className={styles.responseLabel}>RESPONSE</div>
        
        <div className={styles.responseBlock}>
          <div><span className={styles.brace}>&#123;</span></div>
          <div>
            <span className={styles.tab}></span>
            <span className={styles.property}>"logo_url"</span>
            <span className={styles.text}>: </span>
            <span className={styles.string}>"https://cdn.openlogo.fyi/logos/google.png"</span>
            <span className={styles.text}>,</span>
          </div>
          <div>
            <span className={styles.tab}></span>
            <span className={styles.property}>"domain"</span>
            <span className={styles.text}>: </span>
            <span className={styles.string}>"google.com"</span>
          </div>
          <div><span className={styles.brace}>&#125;</span></div>
        </div>
      </div>
    </div>
  );
}
