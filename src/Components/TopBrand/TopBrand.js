import React from 'react'
import Logo from './Logo'
import amazonPrime from 'C:/Users/sagar/Desktop/Instamovie/instamovies/src/images/amazon.png'
import netflix from 'C:/Users/sagar/Desktop/Instamovie/instamovies/src/images/netflixmod.ce186f95.png'
import vudu from 'C:/Users/sagar/Desktop/Instamovie/instamovies/src/images/vudu.8aae4b81.svg'
import tmdb from 'C:/Users/sagar/Desktop/Instamovie/instamovies/src/images/tmdb.24a6fdb9.svg'
import kanopy from 'C:/Users/sagar/Desktop/Instamovie/instamovies/src/images/kanopy-logo.c65c9722.svg'
import './TopBrand.css'

function TopBrand() {
    return (
        <div className="top-brand">
            <div className="movie-type">   
                <h2>We are supported by top brands all over the world</h2>
            </div>
            <div className='brand-log'>
                <Logo image = {amazonPrime} text={"AmazonPrime"} />
                <Logo image = {netflix} text={"Netflix"} />
                <Logo image = {vudu} text={"VuDu"} />
                <Logo image = {tmdb} text={"TMDB"} />
                <Logo image = {kanopy} text={"kanopy"} />
            </div>
        </div>
    )
}

export default TopBrand
