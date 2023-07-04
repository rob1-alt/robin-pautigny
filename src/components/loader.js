import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

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
    fontSize : '10em',
    display: 'flex',
    justifyContent: 'center',
    fontFamily : 'Thunder',
    alignItems: 'center',
    background: '#f9f5ed;',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    transition: 'opacity 0.5s ease-out', // Ajout de la transition d'opacité
    opacity: showContent ? 0 : 1, // Masque le loader lorsque le contenu est affiché
  };

  const progressBarStyle = {
    width: '100%',
    height: '5px',
    background: '#ccc',
    transition: 'width 0.3s ease-out', // Ajout de la transition de la largeur
  };

  const progressStyle = {
    height: '100%',
    background: '#007bff',
    width: `${progress}%`, // Utilisation de la variable progress pour la largeur dynamique
  };

  const contentStyle = {
    display: showContent ? 'block' : 'none',
  };

  return (
    <div>
      <div style={loaderStyle}>
        {/* <div style={progressBarStyle}>
          <div style={progressStyle}></div>
        </div> */}
        <div style={{ marginTop: '10px' }}>{progress}%</div>
      </div>
      <div style={contentStyle}>
        {/* Votre contenu à afficher après le chargement */}
      </div>
    </div>
  );
};

export default Loader;
