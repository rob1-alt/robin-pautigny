import React, { useEffect } from 'react';

function Background() {
  useEffect(() => {
    // Obtenez l'élément canvas
    const canvas = document.getElementById('background');

    // Définissez les dimensions de canvas en fonction de la taille de la fenêtre
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Créez un contexte de rendu pour canvas
    const ctx = canvas.getContext('2d');

    // Créez un dégradé granuleux
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
      gradient.addColorStop(Math.random(), 'rgba(255, 255, 255, 1)');
    }

    // Dessinez le dégradé granuleux sur le canvas
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return null;
}

export default Background;
