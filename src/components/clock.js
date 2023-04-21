import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={styles.clock}>
     CURRENTLY {timeString} IN PARIS. 🇫🇷
    </div>
  );
}

export default Clock;
