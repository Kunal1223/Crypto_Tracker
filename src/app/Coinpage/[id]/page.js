'use client';

import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import rotation from '../../../data/crypto.json';
import LineChart from '../../LineChart/page';
import { Chart } from 'react-google-charts';

const CoinPage = ({ params }) => {
  const { id } = params;
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);

  const fetchHistoricalData = () => { 
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key':process.env.NEXT_PUBLIC_COIN_API_KEY}
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  };

  const fetchDetails = () => {
    if (id) {
      fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(response => response.json())
        .then(data => setCoinData(data))
        .catch(err => console.error(err));
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchHistoricalData();
  }, [id]);

  if (!coinData || !historicalData) return <div>Loading...</div>;

  const marketDataPieChart = [
    ['Metric', 'Value'],
    ['Market Cap', coinData.market_data.market_cap.usd],
    ['Total Volume', coinData.market_data.total_volume.usd],
    ['Circulating Supply', coinData.market_data.circulating_supply * coinData.market_data.current_price.usd],
  ];

  const priceChangeBarChart = [
    ['Time Period', 'Price Change'],
    ['24h', coinData.market_data.price_change_percentage_24h],
    ['7d', coinData.market_data.price_change_percentage_7d],
    ['14d', coinData.market_data.price_change_percentage_14d],
    ['30d', coinData.market_data.price_change_percentage_30d],
    ['1y', coinData.market_data.price_change_percentage_1y],
  ];

  return (
    <div className="container mx-auto px-4">
      <div className='mt-24 flex items-center justify-center font-semibold'>
        <h1 className='text-center text-4xl'>Detailed Insights for <br />
          <span className='text-green-500'>{coinData.name} ({coinData.symbol})
          </span>
        </h1>
        <Lottie animationData={rotation} className='animation h-32 ml-4' />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
        <div className="bg-gray-800 p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl mb-4 text-green-500">Current Statistics</h2>
          <p>Current Price: ${coinData.market_data.current_price.usd.toLocaleString()}</p>
          <p>Market Cap Rank:   #{coinData.market_cap_rank}</p>
          <p>24h Trading Volume: ${coinData.market_data.total_volume.usd.toLocaleString()}</p>
          <p>Circulating Supply: {coinData.market_data.circulating_supply.toLocaleString()} {coinData.symbol.toUpperCase()}</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg text-gray-300">
          <h2 className="text-2xl mb-4 text-green-500 ">Price Changes</h2>
          <p>Last 24 hour:  {coinData.market_data.price_change_percentage_24h.toFixed(2)}%</p>
          <p>Last 7 days: {coinData.market_data.price_change_percentage_7d.toFixed(2)}%</p>
          <p>Last 30 days: {coinData.market_data.price_change_percentage_30d.toFixed(2)}%</p>
          <p>Last 1 year: {coinData.market_data.price_change_percentage_1y.toFixed(2)}%</p>
        </div>
      </div>

      <div className='mt-24'>
        <LineChart historicalData={historicalData} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-36">
        <div>
          <h2 className="text-2xl mb-4 text-center">Market Data Distribution</h2>
          <Chart
            chartType="PieChart"
            data={marketDataPieChart}
            options={{
              backgroundColor: '#1a1a1a',
              legend: { textStyle: { color: '#FFF' } },
              pieSliceTextStyle: { color: 'black' },
            }}
            width="100%"
            height="400px"
          />
        </div>
        <div>
          <h2 className="text-2xl mb-4">Price Change Percentages</h2>
          <Chart
            chartType="BarChart"
            data={priceChangeBarChart}
            options={{
              backgroundColor: '#1a1a1a',
              hAxis: { textStyle: { color: '#FFF' } },
              vAxis: { textStyle: { color: '#FFF' } },
              legend: { textStyle: { color: '#FFF' } },
            }}
            width="100%"
            height="400px"
          />
        </div>
      </div>

      <div className="mt-36 bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl mb-4 text-center text-green-500 font-bold">About {coinData.name}</h2>
        <p className="mb-4">{coinData.description.en}</p>
      </div>
    </div>
  );
};

export default CoinPage;