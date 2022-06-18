import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../Components/Card";
import { Link } from "react-router-dom";
import { get_series } from "../Reducer/actions";
export const Series=()=>{
    const directory=useSelector((state)=>state);
    const series_list= directory.Series.series_list;
    const dispatch= useDispatch();
    const set_series=()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '486fc41908msh9bc7ee4961a7852p113616jsndf3d1fbda3c7',
                'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
            }
        };
        
        fetch('https://movies-app1.p.rapidapi.com/api/movies?type=series', options)
            .then(response => response.json())
            .then(response => dispatch(get_series(response)))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        set_series();
    },[]);

return(
    <div className="screen">
            {series_list.map((item,index)=>{
                const details={
                    title: series_list[index].titleOriginal,
                    index: index,
                    image: series_list[index].image,
                    year: series_list[index].year,
                    rating: series_list[index].rating
                }
                return(<Link to={`/Details?series_list?id:${index}`}><Card details={details}/></Link>); 
            })}
        </div>
);
}