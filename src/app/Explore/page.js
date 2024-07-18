'use client';
import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../context/page';
import Link from 'next/link';

export default function Page() {
  const { allcoins, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
  }

  const searchHandler = async (e) => {
    e.preventDefault();

    const coins = allcoins.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });

    setDisplayCoin(coins);
  }

  useEffect(() => {
    if (allcoins) {
      setDisplayCoin(allcoins);
    }
  }, [allcoins]);

  return (
    <>
      <div className='mt-32 font-bold text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Join the Largest Community of</h1>
        <br />
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Crypto Enthusiasts</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20">
        <div className="flex items-center text-center">
          <input
            type="search"
            onChange={inputHandler}
            value={input}
            placeholder="Search your Crypto"
            className="rounded-lg w-72 h-8 text-black list-none mb-2 md:mb-0 text-center"
          />
          <button className="rounded-lg border-solid border border-blue-200 px-6 py-1 mx-2 hover:bg-blue-600" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-col md:flex-row justify-between bg-purple-500 p-4 mb-4">
          <p className="text-center w-full md:w-1/6 mb-2 md:mb-0">#</p>
          <p className="text-center w-full md:w-1/6 mb-2 md:mb-0">Logo</p>
          <p className="text-center w-full md:w-1/6 mb-2 md:mb-0">Coins</p>
          <p className="text-center w-full md:w-1/6 mb-2 md:mb-0">Price</p>
          <p className="text-center w-full md:w-1/6 mb-2 md:mb-0">24H Change</p>
          <p className="text-center w-full md:w-1/6 mb-2 md:mb-0">Market Cap</p>
        </div>

        {displayCoin.slice(0, 20).map((items, i) => (
          <Link href={`/Coinpage/${items.id}`} key={i}>
            <div className="flex flex-col md:flex-row justify-between items-center text-center my-2 p-2  shadow-md rounded-lg hover:bg-blue-500-700-100">
              <p className="text-center w-full md:w-1/6">{items.market_cap_rank}</p>
              <div className="flex justify-center w-full md:w-1/6">
                <img src={items.image} alt="coin_image" width={40} height={40} className="object-center object-cover" />
              </div>
              <p className="text-center w-full md:w-1/6">{items.name}</p>
              <p className="text-center w-full md:w-1/6">{items.current_price.toFixed(2)}</p>
              <p className={`text-center w-full md:w-1/6 ${items.price_change_percentage_24h < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {items.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="text-center w-full md:w-1/6">{items.market_cap}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
