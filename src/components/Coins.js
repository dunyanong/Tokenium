// the long list of cryptocoins
import React from "react";
import CoinItem from "./CoinItem";
import { Link } from 'react-router-dom';
import Coin from "../routes/Coin";

const Coins = (props) => {
    return (
        <div>
            <nav className="mb-7 pt-10">
            <Link to='/'>
                <div className="flex justify-center items-center my-30">
                    <h1 className="text-gray-600 text-5xl ml-4 font-bold font-ssp">Tokenium</h1>
                </div>
            </Link>
            </nav>
            <div className="font-dosis lg:shadow-lg lg:rounded-2xl lg:bg-gray-100 pt-2">
            <div className="w-auto ml-5">
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-2 font-bold text-xl py-1 text-gray-800'>                
                    <p className="ml-10 font-ssp">#</p>
                    <p className="font-ssp">Coin</p>
                    <p className="font-ssp">Price</p>
                    <p className='collapse md:visible font-ssp'>Mkt Cap</p>
                    <p className="collapse lg:visible font-ssp">24h</p>
                    <p className='collapse lg:visible font-ssp'>Volume</p>                    
                </div>

                {props.coins.map((coins) => {
                    return (
                        <Link to={`/Coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins}/>                    
                        </Link>                        
                    )
                })}

            </div>
        </div>
        </div>

    );
}
 
export default Coins;
