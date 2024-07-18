'use client'
import Lottie from 'lottie-react';
import rotante from '../data/rotation.json';
import { useContext, useEffect, useState } from 'react';
import { CoinContext } from './context/page';
import LineChart from './maketcap/page';
import homeanimation from '../data/homeload.json'

export default function Home() {
  const { allcoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [marketCapData, setMarketCapData] = useState([]);

  const fetchGlobalMarketCapData = async () => {
    try {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key':process.env.NEXT_PUBLIC_COIN_API_KEY
        }
      };

      const response = await fetch('https://api.coingecko.com/api/v3/global', options);
      const data = await response.json();

      // console.log('API Response:', data);

      // Check if the data is in the expected format if it is in expected formate then 
      //we proceed
      if (data && data.data && data.data.total_market_cap) {
        const formattedData = [
          ['Currency', 'Total Market Cap'],
          ...Object.entries(data.data.total_market_cap).map(([currency, marketCap]) => [currency, marketCap])
        ];

        // console.log('Formatted Data:', formattedData);
        setMarketCapData(formattedData);
      } else {
        console.error('Unexpected API response format:', data);
      }
    } catch (error) {
      console.error('Error fetching global market cap data:', error);
    }
  };

  useEffect(() => {
    fetchGlobalMarketCapData();
  }, []);

  useEffect(() => {
    if (allcoins) {
      setDisplayCoin(allcoins);
    }
  }, [allcoins]);

  return (
    <>
      <div className='mt-20 flex justify-around'>
        <div className='items-center text-center flex'>
          <div>
            <h1 className='font-bold text-4xl'>Welcome to the <br /> Ultimate Crypto Tracker</h1>
            <h6 className='text-gray-100 font-thin text-sm mt-2'>Monitor, Analyze, and Optimize Your Crypto Investments</h6>
          </div>
        </div>
        <Lottie animationData={rotante} className='animation h-96' />
      </div>

      <div className='mt-20'>
        <h2 className='text-2xl font-bold text-center mb-4'>Global Cryptocurrency Market Cap</h2>
        {marketCapData.length > 1 ? (
          <LineChart historicalData={marketCapData} />
        ) : (
          <Lottie animationData={homeanimation} className='animation h-60' />
        )}
      </div>
    </>
  );
}
