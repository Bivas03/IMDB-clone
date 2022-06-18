import React from "react";
import { Link } from "react-router-dom";
import './Genre.scss';

export const Genre=()=>{
  return(
      <div className='container'>
        <Link to={'/Movies'}>
          <div className='Genre-card'>
            <img src={require('../Img/Movie Banner.jfif')} className='poster' alt='poster'></img>
            <div className='label'><h2>Movies</h2></div>
          </div>
        </Link>
        <Link to={'/Series'}>
          <div className='Genre-card'>
            <img src={require('../Img/Mirzapur-2.jpg')} className='poster' alt='poster'></img>
            <div className='label'><h2>Series</h2></div>
          </div>
        </Link>
        <Link to={'/Anime'}>
          <div className='Genre-card'>
            <img src={require('../Img/anime banner.jpg')} className='poster' alt='poster'></img>
            <div className='label'><h2>Anime</h2></div>
          </div>
        </Link>
    </div>
  );
}