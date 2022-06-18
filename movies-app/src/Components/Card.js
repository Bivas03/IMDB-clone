import React from "react";
import './Card.scss';
export const Card=(props)=>{
    return(
        <div className="card" key={props.details.index}>
            <div className="poster">
                <img className="poster" alt="img" src={`${props.details.image}`}></img>
            </div>
            <div className="details">
                <div className="title">{props.details.title}</div>
                {props.details.year && <div className="year">{props.details.year}</div>}
                {props.details.rating && <div className="rating">{props.details.rating}</div>}
            </div>
        </div>
    );
};