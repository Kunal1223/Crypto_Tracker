'use client'
import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

const CoinContextProvider = ({ children }) => {
  const [allcoins, setcoins] = useState([]);
  const [currency, setcurrency] = useState({
    name: "usd",
    Symbol: "$"
  });

  const options = {
    method: 'GET',
    headers: { accept: 'application/json', 'x-cg-demo-api-key': process.env.NEXT_PUBLIC_COIN_API_KEY }
  };

  const fetchAllCoin = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
      .then(response => response.json())
      .then(response => setcoins(response))
      .catch(err => console.error(err));
  }

  useEffect(() => {
    fetchAllCoin();
  }, [currency]);

  const contextvalue = {
    allcoins, currency, setcurrency
  }

  return (
    <CoinContext.Provider value={contextvalue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinContextProvider;
