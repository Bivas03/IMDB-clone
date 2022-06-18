import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_movie } from "../Reducer/actions";
import { Card } from "../Components/Card";
import './Screen.scss';
import { Link } from "react-router-dom";
export const Movies=()=>{
    const movies=useSelector((state)=>state);
    const movie_list=movies.Movies.movie_list;
    const dispatch=useDispatch();

    const set_movie=()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '486fc41908msh9bc7ee4961a7852p113616jsndf3d1fbda3c7',
                'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
            }
        };
        
        fetch('https://movies-app1.p.rapidapi.com/api/movies?type=movies', options)
            .then(response => response.json())
            .then(response => dispatch(get_movie(response)))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        set_movie();
    },[]);

    return(
        <div className="screen">
            {movie_list.map((item,index)=>{
                const details={
                    title: movie_list[index].titleOriginal,
                    index: index,
                    image: movie_list[index].image,
                    year: movie_list[index].year,
                    rating: movie_list[index].rating
                }
                return(<Link to={`/Details?movie_list?id:${index}`}><Card details={details}/></Link>); 
            })}
        </div>
    );
};
