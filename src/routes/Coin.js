// individual coins
import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify';
import {
    AiOutlineRollback
} from "react-icons/ai";
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Coin = () => {
    const [coin, setCoin] = useState({});
    const params = useParams()
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setCoin(response.data);
        })
        .catch((err) => {
            console.log(err);            
        })
    }, );

    return (
        <div>
            <nav className="mb-7 pt-10 grid grid-cols-3 items-center">
            <a className="text-gray-600 text-3xl md:ml-10 ml-8" href='/'><AiOutlineRollback /></a>                
            <Link to='/'>
                <div className="flex justify-center items-center my-30">
                    <h1 className="text-gray-600 text-5xl ml-4 font-bold font-ssp">Tokenium</h1>
                </div>
            </Link>
            <p className='text-white'></p>
            </nav>            
        <div className='font-dosis lg:bg-gray-100 pt-2 lg:rounded-2xl'>
            <div className='p-5 flex justify-between items-center'>
                <div className="flex justify-between items-center md:ml-5 ml-2">
                    {coin.image ? <img src={coin.image.small} alt='' className="h-50" /> : null}
                    <h1 className='text-4xl md:mx-3 ml-1'>{coin.name}</h1>
                </div>
                <div className='px-10 text-xl my-2'>
                    Genesis date: {coin.genesis_date ? <h1>{coin.genesis_date}</h1> : <p>Not revealed</p>}
                </div> 
            </div>
            <div className='px-10 text-xl my-2'>
                Current price: {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>      
            <div className='px-10 text-xl my-2'>
                Max supply: {coin.market_data?.max_supply ? <p className="mr-10">{coin.market_data.max_supply.toLocaleString()} coins</p> : <p>None</p>}
            </div> 
              
            <div className='content m-10'>
                <table>
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>
                        <th>30d</th>
                        <th>1yr</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td className='mx-2'>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td className='mx-2'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td className='mx-2'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td className='mx-2'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td className='mx-2'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                    <td className='mx-2'>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>
                </tr>                        
                </tbody>
                </table> 
            </div>            
              
            <div className='content'>
                <div className='md:grid md:grid-cols-2 w-full'>
                    <div className="left">
                        <div className='flex justify-between pb-2'>
                            <h4 className="ml-10">24 Hour Low:</h4>
                            {coin.market_data?.low_24h ? <p className="mr-10">${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                        </div>
                        <div className='flex justify-between pb-2'>
                            <h4 className="ml-10">24 Hour High:</h4>
                            {coin.market_data?.high_24h ? <p className="mr-10">${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}
                        </div>
                    </div>

                    <div className="right">
                        <div className='flex justify-between pb-2'>
                            <h4 className="ml-10">Mrkt Cap:</h4>
                            {coin.market_data?.market_cap ? <p className="mr-10">${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                        </div>
                        <div className='flex justify-between pb-2'>
                            <h4 className="ml-10">Circulating Supply:</h4>
                            {coin.market_data ? <p className="mr-10">{coin.market_data.circulating_supply}</p> : null}
                        </div>
                    </div>                 
                </div>
                    <div className='content'>
                    <div className='about p-10'>
                        <h3 className="text-2xl text-semibold pb-3">Summary</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>
                        
                        </p>

                    </div>
                     </div>  
            </div>          
        </div>
        </div>
 
    )
}

export default Coin;
