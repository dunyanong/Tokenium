const CoinItem = (props) => {

    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-2 my-4 py-6 font-dosis font-medium text-gray-600'>
            <p className="ml-10">{props.coins.market_cap_rank}</p>
            <div className='flex items-center'>
                <img src={props.coins.image} alt='' className="h-6 mr-2 items-left"/>
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p className='lg:ml-1'>${props.coins.current_price.toLocaleString()}</p>
            <p className='collapse md:visible'>${props.coins.market_cap.toLocaleString()}</p>            
            <p className='collapse lg:visible'>{props.coins.price_change_percentage_24h.toFixed(1)}%</p>
            <p className='collapse lg:visible'>{props.coins.total_volume.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem