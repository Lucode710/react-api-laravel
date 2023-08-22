import React, { useState, useEffect } from 'react';
import './LoadingSpinner.css'; // Importa il file CSS per lo stile del componente

function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula il caricamento delle risorse
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Imposta un timeout di 2 secondi per simulare il caricamento
  }, []);

  return (
    <div className="loading-spinner-container">
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        <div className="content">
          <h1>Risorse caricate!</h1>
          {/* Inserisci qui il contenuto */}
        </div>
      )}
    </div>
  );
}

export default LoadingSpinner;
