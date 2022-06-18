import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Components/Card";
import { get_anime } from "../Reducer/actions";
import { Link } from "react-router-dom";
import './Screen.scss';
export const Anime=(props)=>{
    const directory= useSelector((state)=> state);
    const anime_list= directory.Anime.anime_list;
    const dispatch= useDispatch();

    const set_anime=()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f3cf102319msh20c815279771ea2p195b42jsn416b7f0c59a1',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };
        
        fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
            .then(response => response.json())
            .then(response => dispatch(get_anime(response)))
            .catch(err => console.error(err));
    };

    useEffect(()=>{
        set_anime();
    },[]);

return(
    <div className="screen">
        {anime_list.map((item,index)=>{
            const details={
                title: anime_list[index].title,
                index: index,
                image: anime_list[index].image,
                year: anime_list[index].year,
                rating: anime_list[index].rating
                }
            return(<Link to={`/Details?anime_list?id:${index}`}><Card details={details}/></Link>); 
        })}
    </div>
);
}