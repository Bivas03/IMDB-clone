export const get_movie=(Movies)=>{
    return{
        type: "Movies",
        payload: Movies
    }
}

export const get_series=(Series)=>{
    return{
        type: "Series",
        payload: Series
    }
}

export const get_anime=(Anime)=>{
    return{
        type: "Anime",
        payload: Anime
    }
}