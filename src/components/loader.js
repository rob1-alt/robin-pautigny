


import React, { useState, useEffect } from 'react';
import styles from '@/styles/contextTual.module.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem('animationShown');

    if (!alreadyShown) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setShowContent(true);
            localStorage.setItem('animationShown', 'true'); // Set the flag to indicate animation already shown
            return 100;
          } else {
            const increment = prevProgress < 20 ? 1 : Math.floor(Math.random() * 30) + 1;
            const newProgress = prevProgress + increment;
            return newProgress > 100 ? 100 : newProgress;
          }
        });
      }, 100);

      return () => {
        clearInterval(interval);
      };
    } else {
      // If animation already shown, set showContent to true
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setShowContent(true); // Affiche le contenu une fois le chargement terminé
          return 100; // Assure que la progression reste à 100%
        } else {
          const increment = prevProgress < 20 ? 1 : Math.floor(Math.random() * 30) + 1; // Accélère à la fin
          const newProgress = prevProgress + increment;
          return newProgress > 100 ? 100 : newProgress; // Arrête la progression à 100%
        }
      });
    }, 100); // Réduit la fréquence de mise à jour à 100ms

    return () => {
      clearInterval(interval);
    };
  }, []);

  const loaderStyle = {
    width: '100%',
    height: '100vh',
    fontSize: '10em',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Thunder',
    alignItems: 'center',
    background: '#f9f5ed',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    transition: 'opacity 0.5s ease-out', // Ajout de la transition d'opacité
  };




  return (
    <div>
      {!showContent && (
        <div style={loaderStyle} className={styles.loaderMobile}>
          <div style={{ marginTop: '10px' }}>{progress}%</div>
        </div>
      )}

    </div>
  );
};

export default Loader;
