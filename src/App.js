import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Coins from './components/Coins';
import Coin from './routes/Coin';
import Footer from './components/Footer';

function App() {
  const [coins, setCoins] = useState([]);
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  useEffect(() => {
    axios.get(url)
    .then((response) => {
      setCoins(response.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <div className="lg:px-20 ">        
        <Routes>
          <Route path='/' element={<Coins coins={coins}/>} />
          <Route path='/Coin' element={<Coin />} />     
          <Route path='/Coin/:coinId' element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
