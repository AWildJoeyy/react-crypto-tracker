import React from 'react'
import { Link } from "react-router-dom";

export default function List({coin}) {
  return (
    <div className="home-crypto">
    <Link to={`/${coin.id}`}>
    
        <span className="home-crypto-image"><img src={coin.image}/></span>
        <span className="home-crypto-name">{coin.name}</span>

        {coin.priceBTC && <span className="home-crypto-prices">
            <span className="home-crypto-BTC">
            <img src="/bitcoin.webp"/>
            {coin.priceBTC} BTC</span>
            <span className="home-crypto-CAD">{coin.priceCad} CAD</span>
        </span>}

    </Link>
  </div>
  )
}
