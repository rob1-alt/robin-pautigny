
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';

const EtherPrice = () => {
  const [etherPrice, setEtherPrice] = useState(null);

  useEffect(() => {
    const fetchEtherPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
        const data = await response.json();
        setEtherPrice(data.ethereum.usd);
      } catch (error) {
        console.error('Error fetching Ether price:', error);
      }
    };

    // Fetch Ether price initially
    fetchEtherPrice();

    // Set up interval to fetch Ether price every 1 minute (adjust as needed)
    const intervalId = setInterval(fetchEtherPrice, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    <div className={styles.ether}>
      {etherPrice !== null ? (
        <p>ETH : {etherPrice} USD</p>
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