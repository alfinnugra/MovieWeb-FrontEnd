import React from 'react'
import ExImg from '../../assets/example.jpg'

function MovieList() {
  return (
    <div className="MovieList">
        <div className="MovieRecommend p-5">
            <div className="MovieTextHead">
                <h1 className='font-semibold text-md'>Recommend For You</h1>
            </div>
            <div className="MovieList pt-5">
                <a href="">
                    <div className="card w-18">
                        <img src={ExImg} alt="" className='max-w-60 max-h-80' />
                        <div className="cardBody">
                            <h1>Persija vs Arema</h1>
                            <p>Saksikan nanti malam</p>
                        </div>
                    </div>  
                    
                </a>
            </div>
        </div>
    </div>
  )
}

export default MovieList