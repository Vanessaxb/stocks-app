import { useParams } from "react-router-dom";
import Styles from "./Styles.module.css";
import { useState, useEffect } from "react";

export default function Stock(props) {
  const [stockData, setStockData] = useState(null);
  // const apiKey = REACT_APP_STOCKSAPI_KEY
  // const {name, lastPrice, change} = props
  // const  {symbol, lastPrice} = props

  // Grabbing the Currency symbol from the URL Params
  // const {name, symbol, lastPrice, change} = useParams()
  const params = useParams();
  const { symbol } = params; //disconstructing params

  const url = `https://financialmodelingprep.com/api/v3/quote/${symbol}?apikey=${process.env.REACT_APP_STOCKSAPI_KEY}`;

  const getStockData = async () => {
    try {
    const response = await fetch(url);
    const dataArr = await response.json();
    const data = dataArr[0]
    setStockData(data)
   
    console.log(data);
} catch(e) {
    console.error(e);
}
};

// This will run after every render
useEffect(() => {
    getStockData();
}, []);


   

const loaded = () => {
    return (
    <div className={Styles.stock}>
      <div className={Styles.header}>
        <h3>{stockData.name}</h3>
        <h4>{symbol}</h4>
      </div>
      <h4 className={Styles.price}>Price: {stockData.price}</h4>
      <h4 className={Styles.change}>Change: {stockData.change}</h4>
    </div>
  );
}

 // Function for when data doesn't exist
 const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return stockData && stockData.price ? loaded() : loading();
}
