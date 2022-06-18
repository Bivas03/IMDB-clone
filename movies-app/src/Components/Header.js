import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '../Img/hamburger-menu.ico';
import './Header.scss';

export const Header=()=>{
    const location= useLocation().pathname.split("/")[1];
    const [menu,setMenu]= useState("close");
    const clickHandler=()=>{
        if(menu==="close"){
            setMenu("open");
        }
        else{
            setMenu("close");
        }
    }
    return(
        <header className='header'>
            <div className='logo'>
                <img src={require('../Img/Logo.png')} alt='Logo'></img>
            </div>
            <div className="menu"><img src={MenuIcon} alt='Menu' onClick={clickHandler}></img></div>
            <div className={`navbar ${menu}`}>
                <nav>
                    <Link to={'/'} className={`${location===""?"active":""}`}>
                        Home
                    </Link>
                    <Link to={'/Movies'} className={`${location==="Movies"?"active":""}`}>
                        Movies
                    </Link>
                    <Link to={'/Series'} className={`${location==="Series"?"active":""}`}>
                        Series
                    </Link>
                    <Link to={'/Anime'} className={`${location==="Anime"?"active":""}`}>
                        Anime
                    </Link>
                </nav>
            </div>
        </header>
    );
}