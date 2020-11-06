import axios from 'axios';
import React,{useEffect,useState} from 'react'
import requests from '../request'
import './Banner.css'
const base_URL = "https://image.tmdb.org/t/p/original/";
function Banner() {
    const [Movie, setMovie] = useState([])
    useEffect(() => {
        async function fetchData()
        {
            const request = await axios.get(requests.fetchNetflixOrginal);
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length-1)])
            return request; 
        }
        fetchData()
    }, [])

    function trim(str,n)
    {
        return str?.length > n ? str.substr(0,n-1) + '...':str

    }

    
    return (
        <header style={
            {
                backgroundSize : 'Cover',
                backgroundImage :  "url" + "(" + (base_URL+ Movie.backdrop_path) +")",
                backgroundPosition : "center"
            }
        }>
            <div className='banner_contents' >
            <h1>{Movie.name}</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>
                    Play
                </button>
                <button className='banner_button'>
                    My List
                </button>
            </div>
            <div className='banner_content'>
                {trim(Movie.overview,150)}
            </div>
            <div className='banner_fade'>

            </div>
            </div>
        </header>
    )
}

export default Banner
