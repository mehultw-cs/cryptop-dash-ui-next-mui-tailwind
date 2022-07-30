// imports


// CoinGecko API calls and store it in json to be used in Page, this time using SSR


// 4 API in total: CoinList, SingleCoin, HistoricalChart, Trending Coins



  // takes in currency and returns a list of coins in json data from coingecko API
  export const  coinList = (currency) => {
    // fetch data
    const coinListDataFetch = async (currency) => {
        const coinListData = fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      );

      // jsonify the list of coins
      const jCoinListData = await coinListData.json(); 

      // return desired json coinListData
      return coinListData;
    };
    
  };

  // takes in id and returns json data about a single coin from coingecko API
 export const singleCoin = (id) => {
    
    const singleCoinDataFetch = async (id) => {
        // fetch data
    const singleCoinData = fetch(
      `https://api.coingecko.com/api/v3/coins/${id}`
    );

    // jsonify the list of coins
    const jSingleCoinData = await singleCoinData.json();
    
    // return desired json single coin data
    return jSingleCoinData;
  
    }
    };

  // takes in id, days, currency and returns markets historicalData in json format from coingecko API
 export const historicalChart = (id, days, currency) => {
    
    const historicalChartDataFetch = async (id, days = 365, currency) => {
         // fetch data
    const historicalData = fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
      );

      // jsonify historical Coin data
      const jHistoryData = await historicalData.json();

      // return desired json single coin data
      return jHistoricalData;
    }
   
  };


  // takes in currency and returns trending Coins on the market in json format from coingecko API
 export const trendingCoins = (currency) => {
    
    const trendingCoinDataFetch = async (currency) => {

// fetch data
    const trendingCoinsData = fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
      );


      // jsonify coins
      const jTrendingCoinsData = await trendingCoinsData.json();

      // return desired json trending coins data
      return jTrendingCoinsData;

    }
      };

  // Storing API results:

//   const fetchCoinListData =  coinList(currency);
//   const fetchSingleCoinData =  singleCoin(id);
//   const fetchHistoricData =  historicalChart(id, days, currency);
//   const fetchTrendingData =  trendingCoins(currency);