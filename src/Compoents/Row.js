import React, { useState, useEffect } from "react";
import axios from "axios";
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"
const base_URL = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl,isLargeRow }) {
  const [Movies, setMovies] = useState([]);
  const [trailerURL, settrailerURL] = useState('')
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height :"315px",
    width : '100%'
  }
  const handleClick = (Movie) => {
    if(trailerURL){
      settrailerURL('')
    }
    else {
      console.log(Movie)
      movieTrailer(Movie?.name || Movie.original_title || Movie.original_name || "")
      .then((url) =>
      {
        console.log(url)
    
        const urlParams = new URLSearchParams(new URL(url).search)
        settrailerURL(urlParams.get('v'))
      })
      .catch((err) => 
      {
      console.log(err)
      })
    }
  }
  return (
    <div >
      <h2 className='title'>{title}</h2>
      <div className= {isLargeRow ? "row_posters row_poster_large row " :"row_posters row " } >
        {Movies.map((Movies) => (
          <img key={Movies.id} onClick={() => handleClick(Movies)} className="row_poster"  src={base_URL +(isLargeRow ? Movies.poster_path : Movies.backdrop_path) } alt={Movies.name} />
        ))}
      </div>
      {/* <YouTube videoId={'LezDWQ-OOeo'} opts={opts} /> */}
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} /> }
    </div>
  );
}

export default Row;
