import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

const EtherPrice = () => {
  const [etherPrice, setEtherPrice] = useState(null);
  const [prevEtherPrice, setPrevEtherPrice] = useState(null);

  useEffect(() => {
    const fetchEtherPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        const currentPrice = data.ethereum.usd;
        setPrevEtherPrice(etherPrice);
        setEtherPrice(currentPrice);
      } catch (error) {
        console.error('Error fetching Ether price:', error);
      }
    };

    fetchEtherPrice();

    const intervalId = setInterval(fetchEtherPrice, 6000);
    return () => clearInterval(intervalId);
  }, [etherPrice]);

  return (
    <div>
      <div className={styles.ether}>
        {etherPrice !== null ? (
          <>
            <p>ETH : {etherPrice} USD</p>
            {prevEtherPrice !== null && (
              <span className={etherPrice > prevEtherPrice ? styles.arrowUp : styles.arrowDown}></span>
            )}
          </>
        ) : (
          <p>$$$...</p>
        )}
      </div>
    </div>
  );
};

export default EtherPrice;


{/* <style>
.clock{
    position: fixed;
    right: 40px;
    bottom: 40px;
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    color: var(--text-color);
    z-index: 9999;
  }

</style> */}