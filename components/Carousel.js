//import core

import { useState, useEffect } from "react";


import { trendingCoins } from "@/pages/api/cryptodata";
import { CryptoState } from "./CryptoContext"




const Carousel = (trendingCoins) => {


    // trending useState

    const [trending, setTrending] = useState([]);


    // const currency

    const { currency } = CryptoState();

    // fetch data
    const fetchTrendingCoins = async() => {
        const { data } = await trendingCoin;
        setTrending(data);
    };

    // useEffect(() =>{
    //     fetchTrendingCoins();
    // },[currency])

    
  return (
    <>
        <div className="flex items-center h-3/6">

        </div>
    </>
  )
}

export default Carousel


export async function getServerSideProps(context) {

    // takes in currency and returns trending Coins on the market in json format from coingecko API
  const trendingCoins = async (currency) => {
    
    // fetch data
    const trendingCoinsData = fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      );


      // jsonify coins
      const jTrendingCoinsData = await trendingCoinsData.json();

      // return desired json trending coins data
      return jTrendingCoinsData;
  };


      // Storing API results:
    const fetchTrendingData = await trendingCoins(currency);


  return {
    props: {
        trendingCoins: fetchTrendingData
    },
  };
};