import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import './Details.scss';


export const Details=()=>{
    const directory=useSelector((state)=>state);
    const array=Object.values(directory);
    const location= useLocation().search;
    const listName= location.split("?")[1].toString();
    const objectArray= array.filter((item,index)=>{
        const obj=array[index];
        const keys= Object.keys(obj);
        return keys[0]===listName;
    });
    const index= location.split(":")[1];
    const showObject= objectArray[0];
    const showArray= showObject[listName];
    var genre= "";
    const details= (showArray)=>{
        const show= showArray[index];
        if(listName==="movie_list"){
            return{
                title: show.titleOriginal,
                image: show.image,
                year: show.year,
                rating: show.rating,
                description: show.description,
                release: show.release,
                genres: show.genres.map((item,index)=>{
                    genre= genre +" "+item.name;
                    return genre;
                })
            }    
        }
        else if(listName==="series_list"){
            return{
                title: show.titleOriginal,
                image: show.image,
                year: show.year,
                rating: show.rating,
                description: show.description,
                release: show.release,
                genres: show.genres.map((item,index)=>{
                    genre= genre +" "+item.name;
                    return genre;
                })
            }
        }
        else{
            return{
                title: show.title,
                image: show.image,
                year: show.year,
                rating: show.ranking,
                episodes: show.episodes,
                description: show.synopsis,
                genres: show.genres.toString()
            }
        }
    }
    const showDetail=details(showArray);

    const address=useNavigate();
    const back=()=>{
        address(-1);
    }
    return(
        <div>
            <div className="back-navigation" onClick={back}>Back</div>
            <div className="details-page">
            <div className="media">
                <img className="poster" src={`${showDetail.image}`} alt="img"></img>
            </div>
            <div className="details">
                <div className="text title">
                    <p><span>Title: </span>{showDetail.title}</p>
                </div>
                {showDetail.rating && <div className="text rating">
                    <p><span>Rating: </span>{showDetail.rating}</p>
                </div>
                }
                {showDetail.release && <div className="text release">
                    <p><span>Release: </span>{showDetail.release}</p>
                </div>
                }
                {showDetail.episodes && <div className="text episodes">
                    <p><span>Episodes: </span>{showDetail.episodes}</p>
                </div>
                }
                {showDetail.description && <div className="text description">
                    <p><span>Description: </span>{showDetail.description}</p>
                </div>
                }
                {showDetail.year && <div className="text year">
                    <p><span>Year: </span>{showDetail.year}</p>
                </div>
                }
                {showDetail.genres && <div className="text genres">
                    <p><span>Genres: </span>{showDetail.genres}</p>
                </div>
                }
            </div>
            </div>
        </div>
    );
};