import React from 'react';
import logo from './logo.svg';
import styles from './App.css';

const App = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <h1 className={styles.appTitle}>Welcome to React</h1>
    </header>
    <p className={styles.appIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

export default App;
