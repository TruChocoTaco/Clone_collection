import React from 'react'
import './styles/Home.scss'
import { images } from '../constants'
import { Link } from 'react-router-dom'
 
const Home = () => {
    
    const webCards = [
        {title: 'Netflix', image: images.cat, url: '/Netflix', status: "WIP 90%"},
        {title: 'Discord', image: images.cat, url: '/Discord', status: "WIP 90%" },
        {title: 'Hulu', image: images.cat, url: '/Hulu', status: "WIP 0%"},

    ]
  
    return (
    <div className='home-container'>
        <div className="text-content">
            <h1>Welcome to my Clone Collection</h1>
            <h2>Below are a variety of clone websites of well known websites created by me</h2>
        </div>
        <div className="cards">
            {webCards.map((website) => (
                <Link className="card" to={website.url}>
                    <img src={website.image} alt="" />
                    <h1>{website.title}</h1>
                    <h3>{website.status}</h3>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Home